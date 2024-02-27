"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";

const MobileNavbar = () => {
  const [menuState, setMenuState] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About Me"],
    ["/portfolio", "Portfolio"],
    ["/services", "Services"],
  ];
  return (
    <div className="relative  ">
      <div className=" w-full  h-28 border-b-2 border-border-primary px-6 ">
        <div className="h-full mt-[-3px] border-l-2 border-r-2 pt-6 border-border-primary flex justify-between items-end">
          <div className="p-8">
            <Link href="/">Not Our Logo</Link>
          </div>
          <div className="border-t-2 border-l-2 border-border-primary rounded-tl-3xl p-6">
            <button
              className="transition-all"
              onClick={() => {
                setMenuState(!menuState);
              }}
            >
              {menuState ? (
                <X height={35} width={35} />
              ) : (
                <MenuIcon height={35} width={35} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-background-color top-28 right-0 z-10 h-lvh ${
          menuState ? "w-2/3" : " w-0 hidden"
        }`}
      >
        <div className="p-8 flex flex-col gap-12 justify-between ">
          <div className="flex flex-col py-10 gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link[0]}
                  key={index}
                  className="text-lg uppercase transition du"
                >
                  {link[1]}
                </Link>
              );
            })}
          </div>
          <div className="">
            <Button variant="outline" size="xl">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
