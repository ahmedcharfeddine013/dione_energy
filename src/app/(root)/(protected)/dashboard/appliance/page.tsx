import { appliance1 } from "@/constants";
import Image from "next/image";
import React from "react";

const AppliancePage = () => {
  return (
    <div className="mt-[85px] relative">
      <Image
        src={appliance1}
        alt="dashboard"
        className="h-full w-full object-center "
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default AppliancePage;
