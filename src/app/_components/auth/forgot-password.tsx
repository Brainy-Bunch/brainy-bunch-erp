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
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Loader from "../common/loader";
// import { auth } from "../../../../firebaseConfig";

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

  const auth = getAuth();

  const [hasSentEmail, setHasSentEmail] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  function onSubmit(values: z.infer<typeof EmailSchema>) {
    setIsLoading(true);
    sendPasswordResetEmail(auth, values.email)
      .then((data) => {
        console.log("check email");
        setHasSentEmail(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="auth-form">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div></div>
          <div className="space-y-3 mb-10">
            <h1 className="text-2xl font-bold tracking-tight">
              {hasSentEmail ? "Email sent" : "Forgot your password?"}
            </h1>
            <p className="text text-neutral-500 !leading-relaxed">
              {hasSentEmail
                ? "Check your email for a link to reset your password."
                : " Enter your email address and we will send you a link to reset your password."}
            </p>
          </div>
          {hasSentEmail ? null : (
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
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-3 py-6 flex items-center gap-1.5 bg-orange-500 active:bg-orange-600 hover:bg-orange-600 disabled:bg-orange-400 font-semibold"
          >
            {isLoading ? (
              <>
              <span>Sending email</span>
              <Loader />
              </>
            ) : (
              <>
                {hasSentEmail ? "Open Inbox" : "Send email"}{" "}
                <ArrowRight size={14} strokeWidth={3} />
              </>
            )}
          </Button>
          <div className="w-full flex justify-center">
            <a
              href="/auth/login"
              className="font-semibold text-center my-6 text-orange-500"
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
