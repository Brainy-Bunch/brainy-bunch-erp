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
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import React from "react";

const PasswordSchema = z
  .object({
    password: z.string(),
    confirmPass: z.string(),
  })
  .required({
    password: true,
    confirmPass: true,
  });

const ResetpasswordComp = () => {
  const form = useForm<z.infer<typeof PasswordSchema>>({
    resolver: zodResolver(PasswordSchema),
  });

  function onSubmit(values: z.infer<typeof PasswordSchema>) {
    console.log(values);
  }

  // input visibility logic

  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] =
    React.useState(false);

  return (
    <div className="auth-form">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div></div>
          <div className="space-y-1 mb-4">
            <h1 className="text-lg font-bold tracking-tight">Reset password</h1>
            <p className="text-xs text-neutral-500">Enter your new password.</p>
          </div>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Enter password"
                      className="shadow-none py-6 bg-neutral-100 ring-transparent outline-none focus:border-neutral-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPasswordVisible(!isPasswordVisible);
                    }}
                    className="absolute top-0 right-0 h-8 px-4 grid place-items-center text-neutral-800 "
                  >
                    {isPasswordVisible ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="confirmPass"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      placeholder="Confirm password"
                      className="shadow-none py-6 bg-neutral-100 ring-transparent outline-none focus:border-neutral-300"
                      {...field}
                    />
                  </FormControl>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setConfirmPasswordVisible(!isConfirmPasswordVisible);
                    }}
                    className="absolute top-0 right-0 h-8 px-4 grid place-items-center text-neutral-800 "
                  >
                    {isConfirmPasswordVisible ? (
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
            Reset password <ArrowRight size={14} strokeWidth={3} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetpasswordComp;
