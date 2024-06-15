"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    // resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    setError("");
    setSuccess("");
    startTransition(() => {
      //   login(values)
      //     .then((data) => {
      //       if (data?.error) {
      //         form.reset();
      //         setError(data.error);
      //       }
      //       if (data?.success) {
      //         form.reset();
      //         setSuccess(data.success);
      //       }
      //       if (data?.twoFactor) {
      //         setShowTwoFactor(true);
      //       }
      //     })
      //     .catch(() => setError("Something went wrong!"));
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-12 gap-6 border-2 rounded-xl">
        <h1 className="text-xl">Welcome Back</h1>
        <div className="flex flex-col w-[400px] gap-6">
          <Form {...form}>
            <form
              className="flex flex-col items-start justify-center gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col items-start justify-center gap-4 w-full">
                {showTwoFactor && (
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Two Factor Code</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="123456"
                            disabled={isPending}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {!showTwoFactor && (
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="email"
                              type="email"
                              disabled={isPending}
                            ></Input>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="password"
                              type="password"
                              disabled={isPending}
                            ></Input>
                          </FormControl>
                          <Button
                            size="sm"
                            variant="link"
                            asChild
                            className="px-0 font-normal"
                          >
                            <Link href="/auth/reset">Forgot password</Link>
                          </Button>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2"
              >
                Login
              </Button>
            </form>
          </Form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          <div className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our Terms Of Service and Privacy
            Policy
          </div>
          <Link
            href="../auth/register"
            className="px-8 text-center text-sm text-muted-foreground hover:underline"
          >
            Don&apos;t have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
