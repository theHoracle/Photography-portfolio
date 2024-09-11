"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const DesktopNavbar = () => {
  // const navLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/about", label: "About me" },
  //   { href: "/portfolio", label: "Portfolio" },
  //   { href: "/services", label: "Services" },
  // ]
  const pathname = usePathname();
  return (
    <div className=" mx-10 lg:mx-14 border-x-2 border-border-primary h-full flex items-center justify-between px-4 lg:px-6">
      <div>
        <Link href="/">Our Logo</Link>
      </div>
      <div className="-mt-[2px]">
        <ul className=" capitalize flex items-center mt-6 text-sm lg:text-base">
          <li className={cn("border-2 border-accent border-b-0 rounded-tl-lg py-4 px-6 hover:bg-stone-200 dark:hover:bg-stone-800", {
            "dark:bg-stone-800 bg-stone-200": pathname === "/"
          })}>
            <Link href="/">Home</Link>
          </li>
          
          <li className={cn("border-t-2 border-border-primary py-4 px-6 hover:bg-stone-200 hover:dark:bg-stone-800", {
            "dark:bg-stone-800 bg-stone-200": pathname === "/about"
          })}>
            <Link href="/about">About</Link>
          </li>
          
          <li className={cn("border-2 border-b-0 border-border-primary py-4 px-6 hover:bg-stone-200 hover:dark:bg-stone-800", {
            "dark:bg-stone-800 bg-stone-200": pathname.includes("/portfolio")
          })}>
            <Link href="/portfolio">Portfolio</Link>
          </li>

          <li className={cn("border-2 border-l-0 border-b-0 border-border-primary rounded-tr-lg py-4 px-6 hover:bg-stone-200 hover:dark:bg-stone-800", {
            "dark:bg-stone-800 bg-stone-200": pathname === "/services"
          })}>
            <Link href="/services">Services</Link>
          </li>
          {/* {navLinks.map((link) => {
           return (
            <li
              key={link.href}
              className={`border-2 first-of-type:rounded-tl-lg last-of-type:rounded-tr-lg border-border-primary hover:bg-stone-200 dark:hover:bg-stone-800 py-4 px-6 ${
                (pathname === link.href || link.href !== '/' && pathname.includes(link.href)) ? "dark:bg-stone-800 bg-stone-200" : ""
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          )})} */}
        </ul>
      </div>
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DesktopNavbar;
