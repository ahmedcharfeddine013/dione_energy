"use client";

import React, { useEffect, useRef, useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import gsap from "gsap";
import { Input } from "../ui/input";
import { SendHorizontal } from "lucide-react";
import { chatbotMessages, default_avatar } from "@/constants";
import Image from "next/image";

const ChatBot = () => {
  
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      gsap.fromTo(
        "#chatbot-container",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      );
    } else {
      gsap.fromTo(
        "#chatbot-container",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.5,
        }
      );
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
        className={`bg-secondary-foreground rounded-xl overflow-hidden w-[400px] opacity-0 absolute bottom-24 right-8 ${
          opened ? "block" : "hidden"
        }`}
      >
        <div className="bg-primary w-full flex flex-col p-4">
          <h1 className="font-bold text-xl">Dione</h1>
          <p>customer service</p>
        </div>
        <div className="p-4 text-gray-900">
          <div className="mb-4 flex flex-col gap-3 w-full">
            {chatbotMessages.map((msg) => (
              <div key={msg.id}>
                {msg.user == "chatbot" ? (
                  <div className="flex w-full items-start justify-start">
                    <div className="flex items-end justify-center gap-2">
                      <Image
                        src={default_avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="flex flex-col items-start justify-start gap-1">
                        <p className="text-sm ml-2">{msg.user}</p>
                        <div className="p-3 py-2 rounded-2xl flex w-fit bg-gray-300">
                          <p>{msg.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full items-center justify-end">
                    <div className="px-3 py-2 rounded-2xl flex w-fit bg-primary text-white ">
                      <p>{msg.message}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
