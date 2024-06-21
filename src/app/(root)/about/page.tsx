"use client";

import { logo } from "@/constants";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutPage = () => {
  useGSAP(() => {
    gsap.to("#logo_sidebanner", {
      opacity: 1,
      duration: 0.5,
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="font-extralight text-sm">
        <p>
          We propose the development of a Solar State Prediction System designed
          to maximize energy production and optimize energy sales for users.
          This system will predict solar energy availability, allowing users to
          identify peak periods of solar power generation. By leveraging these
          insights, users can adjust their energy consumption and maximize their
          profits through efficient energy usage and trading. Additionally, the
          system will include a dashboard that helps users monitor and optimize
          their energy consumption, enhancing both savings and earnings.
        </p>
        <p className="font-bold my-3 text-xl">Example Scenarios:</p>
        <p className="text-lg my-1 font-bold text-orange-500 ">
          User with Installed Solar Panels:
        </p>
        <p className="flex flex-col">
          Consider a user who has installed solar panels and is part of the
          Solar State Prediction System. This user is interested in optimizing
          their energy consumption to reduce costs and earn incentives. <br />
          The system predicts that on a particular day, from 10 AM to 2 PM,
          there will be low solar energy generation due to overcast conditions.
          The user receives an alert through the dashboard, indicating this low
          solar energy period. <br />
          <span className="text-green-400 my-2 font-bold">
            The user can then take the following actions:
          </span>
          Adjust Consumption: The system predicts only 5 kWh of solar energy
          will be generated that day. The dashboard provides specific
          recommendations on which appliances to use or avoid. For instance, the
          user might be advised to run only essential appliances like the
          refrigerator and lights, while delaying the use of high-energy devices
          like the washing machine and air conditioner until after the peak
          period of low generation. <br />
          Earn Rewards: By following the system’s recommendations and reducing
          consumption during low solar energy periods, the user earns tokens or
          rewards provided by the platform. These rewards can be used to offset
          future energy costs or traded within the platform for other benefits.{" "}
          <br />
          Monitor Consumption: The dashboard shows detailed consumption data for
          each appliance, helping the user understand which devices consume the
          most energy. This data helps the user optimize their usage patterns
          and ensure they stay within the 5 kWh limit predicted for the day.{" "}
          <br />
          Participate in Energy Trading: On days with low solar generation, the
          user can still participate in the energy trading platform by
          purchasing excess solar energy from others at a lower rate, ensuring
          they meet their energy needs without incurring high costs.
        </p>
        <p className="text-lg my-1 font-bold text-orange-500 ">
          User without Installed Solar Panels:
        </p>
        <p className="flex flex-col">
          Consider a user who has not yet installed solar panels but is part of
          the Solar State Prediction System. This user is interested in
          optimizing their energy consumption to reduce costs and earn
          incentives. <br />
          The system predicts that over the next three months, from June to
          August, there will be consistent high solar energy generation due to
          favorable weather conditions. The user receives an alert through the
          dashboard, indicating this extended period of high solar energy
          generation. <br />
          <span className="text-green-400 my-2 font-bold">
            The user can then take the following actions:
          </span>
          Evaluate Investment Opportunities: The system provides a detailed
          forecast showing that during these three months, the user could
          potentially generate a significant amount of solar energy if they
          install solar panels. For instance, the forecast predicts that they
          could produce up to 6,000 kWh of energy, while their maximum
          consumption is 4,000 kWh. The dashboard includes a financial
          calculator that estimates the payback period for the investment,
          showing that, based on current energy prices and the predicted solar
          generation, the user could recoup their investment in just three
          months. <br />
          Consider Economic Benefits: The user sees that by installing solar
          panels, they can meet their own energy needs and sell the excess
          energy back to the grid. This opportunity for additional income
          further enhances the appeal of investing in solar technology. The
          forecast takes into account local economic conditions, incentives, and
          potential savings on energy bills, providing a comprehensive picture
          of the financial benefits. <br />
          Make an Informed Decision: With the insights provided by the Solar
          State Prediction System, the user can make an informed decision about
          investing in solar panels. They see a clear path to financial gain and
          energy independence, supported by reliable predictions and detailed
          economic analysis. By acting on this information, the user transitions
          from being a mere consumer to an investor in renewable energy. <br />
          Monitor Consumption: For users without solar panels, the dashboard
          still provides detailed consumption data for each appliance. The
          system can calculate potential energy production and consumption over
          three months, showing that the user could generate 50 kWh of energy
          and consume a minimum of 20 kWh, resulting in an excess of 30 kWh
          available for sale or reduced energy costs. The dashboard also helps
          users understand how many months it will take to recoup their
          investment in solar panels based on their consumption patterns and
          predicted solar generation.
        </p>
      </div>
      <div
        id="logo_sidebanner"
        className="fixed hidden md:block md:right-24 md:top-40 opacity-0"
      >
        <Image src={logo} alt="logo" height={500} width={500} />
      </div>
    </div>
  );
};

export default AboutPage;
