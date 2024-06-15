import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/validations";
import Google from "next-auth/providers/google";
import { testEmail, testPassword } from "./constants";

export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          if (email == testEmail && password == testPassword) {
            return {
              email,
              password,
            };
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
