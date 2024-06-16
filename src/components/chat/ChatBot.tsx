import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const ChatBot = () => {
  return (
    <div className="p-3 bg-primary w-fit rounded-full cursor-pointer hover:scale-110 duration-100 transition-all ease-in absolute bottom-8 right-8">
      <ChatBubbleIcon />
    </div>
  );
};

export default ChatBot;
