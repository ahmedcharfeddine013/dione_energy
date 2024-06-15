import { testEmail, testPassword } from "@/constants";
import { LoginSchema } from "@/lib/validations";
import * as z from "zod";

export async function Login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const { email, password } = validatedFields.data;

  if (email == testEmail && password == testPassword) {
    return {
      success: "Logged In Successfully!",
    };
  }

  return {
    error: "Failed to sign in! User email or password must be wrong",
  };
}
