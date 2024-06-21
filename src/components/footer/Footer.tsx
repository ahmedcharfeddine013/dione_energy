import { logo } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <Image src={logo} alt="Energyhive" width={80} height={80} />
      </div>
    </footer>
  );
};

export default Footer;
