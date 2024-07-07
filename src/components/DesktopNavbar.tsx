"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const DesktopNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="mx-10 lg:mx-14 border-x-2 border-border-primary h-full flex items-center justify-between px-4 lg:px-6">
      <div>
        <Link href="/">Our Logo</Link>
      </div>
      <div className="">
        <ul className=" capitalize flex items-center mt-6 text-sm lg:text-base">
          <li
            className={`border-2 rounded-tl-lg border-border-primary py-4 px-6 ${
              pathname === "/" ? "bg-border-primary" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`border-y-2 border-border-primary py-4 px-6 ${
              pathname === "/about" ? "bg-border-primary" : ""
            } `}
          >
            <Link href="/about">About me</Link>
          </li>
          <li
            className={`border-y-2 border-l-2 border-border-primary py-4 px-6 ${
              pathname === "/portfolio" ? "bg-border-primary" : ""
            }`}
          >
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li
            className={`border-2 rounded-tr-lg border-border-primary py-4 px-6 ${
              pathname === "/services" ? "bg-border-primary" : ""
            }`}
          >
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DesktopNavbar;
