"use client";

import { Briefcase, Camera, Home, Target, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Me", icon: PersonIcon },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/services", label: "Services", icon: Target },
  ];

  const pathname = usePathname();

  return (
    <header>
      <div className="h-full -mt-[3px] border-x-2 border-b-2 border-accent flex justify-between items-end">
        <div className="p-6">
          <Link href="/">Not Our Logo</Link>
        </div>
        <div className="border-t-2 border-l-2 border-border-primary rounded-tl-3xl flex items-end p-1 pt-1.5 pl-1.5 justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="sm:hidden hover:bg-background">
                <HamburgerMenuIcon className="h-7 w-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Camera className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Latunji Photography</span>
                </Link>
                {links.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground ${
                      pathname === href ? "text-foreground font-bold" : ""
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default MobileNavbar;
