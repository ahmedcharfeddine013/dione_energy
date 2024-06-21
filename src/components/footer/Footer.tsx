import { logo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-10 border-t-2">
      <div className="grid grid-cols-2 place-items-center md:place-items-start gap-6 md:grid-cols-4 ">
        <div>
          <Image src={logo} alt="Energyhive" width={120} height={120} />
        </div>
        <div>
          <h1>Energyhive</h1>
          <div className="text-sm font-extralight">
            <Link href={"/about"}>About Us</Link>
          </div>
        </div>
        <div>
          <h1>Policy</h1>
          <div className="text-sm flex flex-col font-extralight">
            <Link href={"/"}>Legal notice</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms</Link>
          </div>
        </div>
        <div>
          <h1>Energyhive</h1>
          <div className="text-sm flex flex-col font-extralight">
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
