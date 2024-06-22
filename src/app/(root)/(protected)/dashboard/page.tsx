import { dashboard } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserDashboardPage = () => {
  return (
    <div className="mt-[85px] relative">
      <Image
        src={dashboard}
        alt="dashboard"
        className="h-full w-full object-center "
        height={1000}
        width={1000}
      />
      <Link href={'/dashboard/appliance'} className="absolute top-28 left-7 p-6 opacity-0">Click me!</Link>
    </div>
  );
};

export default UserDashboardPage;
