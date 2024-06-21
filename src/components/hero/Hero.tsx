"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#slogon", {
      opacity: 1,
      y: 0,
    });
    gsap.to("#hero_button", {
      opacity: 1,
      x: 0,
    });
  });

  return (
    <section>
      <div className="relative h-screen overflow-hidden">
        <div className=" absolute -z-50 left-0 top-0 h-full w-full">
          <video
            className="pointer-events-none h-full w-full object-cover "
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/assets/videos/hero_wallpaper.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="z-10 flex items-center flex-col gap-6 justify-center h-full w-full">
          <div
            id="slogon"
            className="font-bold mx-20 border-2 p-3 rounded-lg bg-gray-800/60 opacity-0 translate-y-20 "
          >
            <h1 className="text-4xl md:text-6xl text-center">
              <span className="text-primary">Energyhive: </span>
              Innovating Today for a Sustainable Tomorrow.
            </h1>
          </div>
          <Button
            id="hero_button"
            className="text-xl bg-background/80 px-10 py-8 opacity-0 translate-x-20"
          >
            <Link href={"/auth/sign-up"}>Get started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
