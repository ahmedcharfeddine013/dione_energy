import default_avatar from "../../public/default_avatar.png";

const testEmail = process.env.USER_EMAIL as string;
const testPassword = process.env.USER_PASSWORD as string;

const chatbotMessages = [
  {
    id: 1,
    user: "chatbot",
    message: "Hi!",
  },
  {
    id: 2,
    user: "user",
    message: "Hi Dione Customer Service!",
  },
];

export { testEmail, testPassword, chatbotMessages, default_avatar };
