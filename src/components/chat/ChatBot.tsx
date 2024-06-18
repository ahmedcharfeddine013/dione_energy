"use client";

import React, { useEffect, useRef, useState } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import gsap from "gsap";
import { Input } from "../ui/input";
import { SendHorizontal } from "lucide-react";
import { chatbotMessages, default_avatar } from "@/constants";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { chatbotResponse } from "@/lib/actions/chat/chat";

const ChatBot = () => {
  const [opened, setOpened] = useState(false);
  const [userInput, setUserInput] = useState<string>();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(chatbotMessages);

  useEffect(() => {
    if (opened) {
      gsap.fromTo(
        "#chatbot-container",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    } else {
      gsap.fromTo(
        "#chatbot-container",
        { opacity: 1 },
        { opacity: 0, duration: 0.5 }
      );
    }
  }, [opened]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendUserMessage = () => {
    if (userInput) {
      const newMessages = [
        ...messages,
        {
          id: uuidv4(),
          user: "User",
          message: userInput,
        },
      ];
      setMessages(newMessages);
      console.log(userInput);
      setUserInput("");

      const botResponse = chatbotResponse(userInput);
      console.log(botResponse);

      if (botResponse) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: uuidv4(),
              user: "chatbot",
              message: botResponse,
            },
          ]);
          console.log(chatbotMessages);
        }, 1000); // 1 second delay for the typing animation
      }
    }
  };

  // const sendUserMessage = () => {
  //   if (userInput) {
  //     chatbotMessages.push({
  //       id: uuidv4(),
  //       user: "User",
  //       message: userInput,
  //     });
  //     console.log(userInput);
  //     setUserInput("");
  //     let botResponse = chatbotResponse(userInput);
  //     // if (userInput.toLowerCase() === "hello") {
  //     //   botResponse = "Hi customer!";
  //     // }
  //     console.log(botResponse);

  //     if (botResponse) {
  //       // setTimeout(() => {
  //       chatbotMessages.push({
  //         id: uuidv4(),
  //         user: "chatbot",
  //         message: botResponse,
  //       });
  //       console.log(chatbotMessages);
  //       // }, 1000);
  //     }
  //   }
  // };

  return (
    <>
      <div
        className="p-3 bg-primary w-fit rounded-full cursor-pointer hover:scale-110 duration-100 transition-all ease-in absolute bottom-8 right-8"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        {opened ? <ChevronDown /> : <ChatBubbleIcon />}
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
          <div className="mb-4 flex flex-col gap-3 w-full max-h-[300px]  overflow-y-scroll">
            {messages.map((msg) => (
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
            <div ref={messagesEndRef}></div>
          </div>
          <div className=" flex items-center justify-center gap-3">
            <Input
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput || ""}
              className="bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-2 rounded-lg border-primary"
            />
            <SendHorizontal
              onClick={sendUserMessage}
              className="text-primary hover:scale-125 transition-all duration-100 ease-in cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
