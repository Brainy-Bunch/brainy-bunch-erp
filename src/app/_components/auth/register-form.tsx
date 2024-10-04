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
import { ArrowRight } from "lucide-react";

const registerFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values);
  }

  return (
    <div className="auth-form">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div></div>
          <div className="space-y-1 mb-4">
            <h1 className="text-lg font-bold tracking-tight">
              Create an account
            </h1>
            <p className="text-xs text-neutral-500">
              Welcome. Please fill in your details to get started.
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Firstname"
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Lastname"
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      required
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone number"
                      className="shadow-none py-6 bg-neutral-100 ring-transparent outline-none focus:border-neutral-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full py-5 flex items-center gap-1.5 bg-orange-500 font-semibold"
          >
            Create account
            <ArrowRight size={16} strokeWidth={3} />
          </Button>
          <div className="py-5 border-t mt-5 flex items-center justify-center">
            <p className="text-xs font-medium text-center text-neutral-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-orange-600  font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
