"use client";

import ChatBot from "@/components/chat/ChatBot";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/sign-in");
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      {/* {children} */}
      <div>
        <ChatBot />
      </div>
    </div>
  );
};

export default UserLayout;
