import ChatBot from "@/components/chat/ChatBot";
import React, { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
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
