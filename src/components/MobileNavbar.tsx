"use client";

import { Briefcase, Home, MenuIcon, Target, X } from "lucide-react";
import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import ThemeToggle from "./ThemeToggle";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { PersonIcon } from "@radix-ui/react-icons";

const links = [
  ["/", "Home", Home],
  ["/about", "About Me", PersonIcon],
  ["/portfolio", "Portfolio", Briefcase],
  ["/services", "Services", Target],
] as const;

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const themeToggleRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(mobileNavRef, () => setIsMenuOpen(false), themeToggleRef);

  return (
    <div className="relative bg-blend-difference">
      <div className="w-full h-20 border-b-2 border-border-primary px-2.5">
        <div className="h-full -mt-[3px] border-x-2 border-border-primary flex justify-between items-end">
          <div className="p-6">
            <Link href="/">Not Our Logo</Link>
          </div>
          <div className="border-t-2 border-l-2 border-border-primary rounded-tl-3xl p-4 flex items-end justify-center">
            <button className="transition-all" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="size-6" />
              ) : (
                <MenuIcon className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={mobileNavRef}
          className="absolute bg-background top-20 right-0 z-10 mobile-nav-h min-w-fit shadow-lg"
        >
          <div className=" flex flex-col p-8 h-full min-w-64 justify-between">
            <nav className="flex flex-col h-full gap-4">
              {links.map(([href, text, Icon], index) => (
                <Link
                  href={href}
                  key={index}
                  className="font-bold flex items-center justify-end text-right gap-2.5 py-3"
                >
                  {/* {pathname === href && (
                    <div className="rounded-full h-2 w-2 bg-accent-color"></div>
                  )} */}
                  {text}
                  <Icon />
                </Link>
              ))}
            </nav>
            <div ref={themeToggleRef} className="justify-end flex ">
              <ThemeToggle  />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
