"use client";

import Hero from "@/components/hero/Hero";
import { dashboard } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.to(".problem", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      stragger: 0.2,
      scrollTrigger: {
        trigger: ".problem",
        start: "top 80%", // Adjust as needed
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".solution", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      stragger: 0.2,
      scrollTrigger: {
        trigger: ".solution",
        start: "top 80%", // Adjust as needed
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <main>
      <Hero />
      <div className="py-24 px-10 lg:p-24 hero-gradient h-fit overflow-hidden relative">
        <div className="text-2xl md:text-4xl font-extralight my-10 flex flex-col gap-4 text-start md:text-center">
          <h2 className="problem opacity-0 -translate-x-20">
            1. Solar panel owners struglle to optimize their energy consumption.
          </h2>
          <h2 className="problem opacity-0 translate-x-20">
            2. Buildings contribute significantly to global energy-related
            emission.
          </h2>
          <h2 className="problem opacity-0 -translate-x-20">
            3. Current tools lack real-time optimization and insights for energy
            management
          </h2>
        </div>
        <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-[50%] "></div>
        <div className="bg-gradient-to-b from-background to-transparent absolute top-0 w-full h-[50%] "></div>
      </div>
      <div className="my-24 px-10 lg:p-24 hero-gradient grid md:grid-cols-2 grid-cols-1 place-items-center h-fit overflow-hidden relative">
        <div>
          <Image src={dashboard} alt="dashboard" height={500} width={500} />
        </div>
        <div className="text-2xl md:text-4xl font-extralight my-10 flex flex-col gap-4 text-start ">
          <h2 className="solution opacity-0 -translate-x-20">
            1. Optimize Solar Energy Usage.
          </h2>
          <h2 className="solution opacity-0 translate-x-20">
            2. Accurate predictions.
          </h2>
          <h2 className="solution opacity-0 -translate-x-20">
            3. Actionnable Alerts.
          </h2>

          <h2 className="solution opacity-0 -translate-x-20">
            4. Energy Trading Opportunities.
          </h2>
          <h2 className="solution opacity-0 -translate-x-20">
            5. Energy Savings.
          </h2>
        </div>
        <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 w-full h-[50%] "></div>
        <div className="bg-gradient-to-b from-background to-transparent absolute top-0 w-full h-[50%] "></div>
      </div>
    </main>
  );
}
