"use client";

import ChatBot from "@/components/chat/ChatBot";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <div>
        <ChatBot />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
