"use client";
//Using screen size would render mobile nav or desktop nav,
import { MenuIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // add styles based on active page
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full h-1/6 border-b-2 border-border-primary px-6 md:hidden">
        <div className="h-full mt-[-3px] border-l-2 border-r-2 pt-6 border-border-primary flex justify-between items-end">
          <div className="p-8">
            <Link href="/">Our Logo</Link>
          </div>
          <div className="border-t-2 border-l-2 border-border-primary rounded-tl-3xl p-6">
            <MenuIcon height={35} width={35} />
          </div>
        </div>
      </div>
      {/*  */}
      {/* The end of Mobile nav */}
      {/*  */}
      <div className="hidden md:block w-full h-20 border-b-2 border-border-primary">
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
          <div>
            <Button
              variant="outline"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
