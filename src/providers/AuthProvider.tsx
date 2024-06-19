"use client";
import React, { ReactNode, useState } from "react";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const login = () => {
    setIsAuthenticated(true);
    router.push("/");
  };

  const logout = () => {
    setIsAuthenticated(false);
    router.push("/auth/sign-in");
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
