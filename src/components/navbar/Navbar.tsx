import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background fixed top-0 w-full text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <div className="text-2xl font-bold">
            <Link href="/">Dione</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/features"
              className="text-white/80 hover:text-white duration-100 transition-all ease-in text-sm"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-white/80 hover:text-white duration-100 transition-all ease-in text-sm"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white duration-100 transition-all ease-in text-sm"
            >
              Blog
            </Link>
            <Link
              href="/documentation"
              className="text-white/80 hover:text-white duration-100 transition-all ease-in text-sm"
            >
              Documentation
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
          </Button>
          <Button className="bg-white text-primary hover:bg-gray-300 px-4 py-2 hidden md:block">
            <Link href={"/auth/sign-in"}>Login</Link>
          </Button>
          <Button className="px-4 py-2 hidden md:block">
            <Link href={"/auth/sign-up"}>Sign up</Link>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 bg-background rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/features" className="hover:bg-gray-700 p-2 rounded text-sm">
              Features
            </Link>
            <Link href="/pricing" className="hover:bg-gray-700 p-2 rounded text-sm">
              Pricing
            </Link>
            <Link href="/blog" className="hover:bg-gray-700 p-2 rounded text-sm">
              Blog
            </Link>
            <Link
              href="/documentation"
              className="hover:bg-gray-700 p-2 rounded text-sm"
            >
              Documentation
            </Link>
          </div>
          <div className="flex flex-col space-y-2 p-4 border-t border-gray-700">
            <Button className="bg-white text-primary hover:bg-gray-300 px-4 py-2  md:block">
              <Link href={"/auth/sign-in"}>Login</Link>
            </Button>
            <Button className="px-4 py-2  md:block">
              <Link href={"/auth/sign-up"}>Sign up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
