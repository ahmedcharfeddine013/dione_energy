"use client";

import React, { useEffect, useRef, useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Input } from "../ui/input";
import { SendHorizontal } from "lucide-react";

const ChatBot = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      gsap.to("#chatbot-container", {
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to("#chatbot-container", {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [opened]);

  return (
    <>
      <div
        className="p-3 bg-primary w-fit rounded-full cursor-pointer hover:scale-110 duration-100 transition-all ease-in absolute bottom-8 right-8"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <ChatBubbleIcon />
      </div>
      <div
        id="chatbot-container"
        className={`bg-secondary-foreground rounded-xl overflow-hidden w-[300px] opacity-0 absolute bottom-24 right-8 ${
          opened ? "block" : "hidden"
        }`}
      >
        <div className="bg-primary w-full flex flex-col p-4">
          <h1 className="font-bold text-xl">Dione</h1>
          <p>customer service</p>
        </div>
        <div className="p-4 text-gray-900">
          <div className="mb-4">
            <div className="p-3 bg-gray-300 rounded-lg">
              <p>hi</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Input className="bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-2 rounded-lg border-primary" />
            <SendHorizontal className="text-primary hover:scale-125 transition-all duration-100 ease-in cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
