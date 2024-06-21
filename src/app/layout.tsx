import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dione",
  description: "Energy",
  icons : '/public/l.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
