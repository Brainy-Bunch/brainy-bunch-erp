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
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values);
  }

  // password visibility
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className="w-full border max-w-sm p-4 pb-0 rounded-lg bg-white shadow">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div></div>
          <div className="space-y-1 mb-4">
            <h1 className="text-lg font-bold tracking-tight">
              Sign in to your account
            </h1>
            <p className="text-xs text-neutral-500">
              Welcome back. Please sign in to proceed.
            </p>
          </div>
          <div>
            <Button
              className="w-full py-5 shadow flex items-center gap-1.5"
              variant={"outline"}
            >
              <GoogleSvg className="size-6" />
              Google
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
          <Button
            type="submit"
            className="w-full mt-3 py-5 flex items-center gap-1.5 bg-orange-500 active:bg-orange-600 hover:bg-orange-600 font-semibold"
          >
            Sign in <ArrowRight size={14} strokeWidth={3} />
          </Button>
          <a
            href=""
            className="text-xs font-semibold text-center my-2 text-orange-500"
          >
            Forgot your password ?
          </a>
          <div className="py-5 border-t flex items-center justify-center">
            <p className="text-xs font-medium text-center text-neutral-500">
              Don't have an account yet?{" "}
              <Link
                href="/auth/register"
                className="text-orange-600  font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
