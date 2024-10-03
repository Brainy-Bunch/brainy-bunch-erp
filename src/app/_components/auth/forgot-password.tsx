"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import React from "react";

const EmailSchema = z
  .object({
    email: z.string().email(),
  })
  .required({
    email: true,
  });

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
  });

  function onSubmit(values: z.infer<typeof EmailSchema>) {
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
              Forgot your password?{" "}
            </h1>
            <p className="text-xs text-neutral-500">
              Enter your email address and we will send you a link to reset your
              password.
            </p>
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
          </div>
          <Button
            type="submit"
            className="w-full mt-3 py-5 flex items-center gap-1.5 bg-orange-500 active:bg-orange-600 hover:bg-orange-600 font-semibold"
          >
            Send email <ArrowRight size={14} strokeWidth={3} />
          </Button>
          <div className="w-full flex justify-center">
            <a
              href="/auth/login"
              className="text-xs font-semibold text-center my-2 text-orange-500"
            >
              Back to login
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPassword;
