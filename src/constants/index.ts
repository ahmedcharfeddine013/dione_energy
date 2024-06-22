import default_avatar from "../../public/default_avatar.png";
import logo from "../../public/l.png";
import dashboard from "../../public/assets/dashboard/dashboard.jpeg";
import appliance1 from "../../public/assets/dashboard/appliance1.jpeg";

const testEmail = process.env.USER_EMAIL as string;
const testPassword = process.env.USER_PASSWORD as string;

const chatbotMessages = [
  {
    id: "1",
    user: "chatbot",
    message: "Hi!",
  },
  {
    id: "2",
    user: "user",
    message: "Hi Dione Customer Service!",
  },
];

export {
  testEmail,
  testPassword,
  chatbotMessages,
  default_avatar,
  logo,
  dashboard,
  appliance1,
};
