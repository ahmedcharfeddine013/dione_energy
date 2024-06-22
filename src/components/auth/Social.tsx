import React from "react";
import { Button } from "../ui/button";
import GoogleIcon from "@mui/icons-material/Google";

const Social = () => {
  return (
    <div className="relative flex flex-row gap-3">
      <Button className="w-full flex items-center justify-center">
        {" "}
        <GoogleIcon fontSize="small" />
      </Button>
    </div>
  );
};

export default Social;
