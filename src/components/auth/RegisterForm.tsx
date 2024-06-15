"use client";
import * as z from "zod";
import React, { FormEvent, useState, useTransition } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Social from "./Social";
import { Label } from "../ui/label";
import { RegisterSchema } from "@/lib/validations";

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      //   register(values).then((data) => {
      //     setError(data.error);
      //     setSuccess(data.success);
      //   });
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-6 md:p-12 gap-6 border-2 rounded-xl">
        <h1 className="text-xl">Create an account</h1>
        <div className="flex flex-col w-[300px] md:w-[400px] gap-6">
          <Form {...form}>
            <form
              className="flex flex-col items-start justify-center gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col items-start justify-center gap-4 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Name"
                          disabled={isPending}
                        ></Input>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                          type={showPassword ? "text" : "password"}
                          disabled={isPending}
                        ></Input>
                      </FormControl>
                      <div className="flex items-start justify-start gap-2">
                        <Input
                          type="checkbox"
                          onClick={() => setShowPassword(!showPassword)}
                          className="w-4 h-4"
                        />
                        <Label>show password</Label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2"
                disabled={isPending}
              >
                Register
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
          <div>
            <Social />
          </div>

          <div className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our Terms Of Service and Privacy
            Policy
          </div>
          <Link
            href="/auth/sign-in"
            className="px-8 text-center text-sm text-muted-foreground hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}
