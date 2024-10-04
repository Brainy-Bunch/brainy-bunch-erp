"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GoogleSvg } from "../svgs";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import React from "react";

import { useRouter } from "next/navigation";

// firebase
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { auth } from "../../../../firebaseConfig";
import Loader from "../common/loader";
import { fetchUserByUid } from "@/app/utils/firebase/getUser";

const LoginFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .required({
    password: true,
    email: true,
  });

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  // password visibility
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  // * authentication yo
  async function onLogin(values: z.infer<typeof LoginFormSchema>) {
    setIsLoading(true);
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = credentials.user;

      console.log(user);
    } catch {}
  }

  const handleRole = async (id: string) => {
    const user = await fetchUserByUid(id);
    if (user?.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/coach/dashboard");
    }
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      handleRole(user.uid);
    } else {
    }
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        if (!result) return;
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result?.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  // * google authentication yo

  return (
    <div className="auth-form">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onLogin)}
          className="flex flex-col gap-4"
        >
          <div></div>
          <div className="space-y-3 mb-10">
            <h1 className="text-2xl font-bold tracking-tight">
              Sign in to your account
            </h1>
            <p className="text text-neutral-500">
              Welcome back. Please sign in to proceed.
            </p>
          </div>
          <div>
            <Button
              className="w-full py-6 shadow flex items-center gap-3"
              variant={"outline"}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                signInWithGoogle();
              }}
            >
              <GoogleSvg className="size-6" />
              Continue with Google
            </Button>
          </div>
          <div className=" relative py-3 flex items-center justify-center">
            <hr className="absolute w-full" />
            <p className=" text-center relative z-10 bg-white px-3">or</p>
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="shadow-none py-6 bg-neutral-100 ring-transparent outline-none focus:border-neutral-300"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Password"
                      className="shadow-none py-6 bg-neutral-100 ring-transparent outline-none focus:border-neutral-300"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsPasswordVisible(!isPasswordVisible);
                    }}
                    className="absolute top-0 right-0 h-8 px-4 grid place-items-center text-neutral-800 "
                  >
                    {isPasswordVisible ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="auth-btn">
            {isLoading ? (
              <>
                Signing in
                <Loader className="ml-2" />
              </>
            ) : (
              <>
                Sign in <ArrowRight size={14} strokeWidth={3} />
              </>
            )}
          </Button>
          <a
            href="/auth/forgot-password"
            className=" font-semibold text-center my-6 text-orange-500"
          >
            Forgot your password?
          </a>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
