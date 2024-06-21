import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/sign-in");
    }
  }, [isAuthenticated, router]);
  return <div></div>;
};

export default ProtectedLayout;
