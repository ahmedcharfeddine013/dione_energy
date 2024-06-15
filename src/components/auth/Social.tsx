import React from "react";
import { Button } from "../ui/button";
import GoogleIcon from "@mui/icons-material/Google";
import GithubIcon from "@mui/icons-material/Github";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="relative flex flex-row gap-3">
      <Button
        className="w-full flex items-center justify-center"
        // onClick={() => onClick("google")}
      >
        {" "}
        <GoogleIcon fontSize="small" />
      </Button>
      <Button
        className="w-full flex items-center justify-center"
        // onClick={() => onClick("github")}
      >
        {" "}
        <GithubIcon fontSize="small" />
      </Button>
    </div>
  );
};

export default Social;
