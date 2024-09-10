"use client";

import { Briefcase, Camera, Home, Target, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PersonIcon } from "@radix-ui/react-icons";
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
    <header className="h-full border-b-2 border-accent">
      <div className="mx-2.5 border-x-2 border-b border-accent flex justify-between items-end">
        <div className="pt-9 pb-3 px-3">
          <Link href="/">Not Our Logo</Link>
        </div>
        <div className="border-t-2 border-l-2 border-border-primary rounded-tl-3xl flex items-end p-1 pt-1.5 pl-1.5 justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="hover:bg-background">
                <MobileHamburger className="h-6 w-6" />
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

const MobileHamburger = (props: any) => {
  return <svg {...props} width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.875C0.5 0.391751 0.891751 0 1.375 0H20.625C21.1082 0 21.5 0.391751 21.5 0.875C21.5 1.35825 21.1082 1.75 20.625 1.75H1.375C0.891751 1.75 0.5 1.35825 0.5 0.875ZM0.5 7C0.5 6.51675 0.891751 6.125 1.375 6.125H20.625C21.1082 6.125 21.5 6.51675 21.5 7C21.5 7.48325 21.1082 7.875 20.625 7.875H1.375C0.891751 7.875 0.5 7.48325 0.5 7ZM10.125 13.125C10.125 12.6418 10.5168 12.25 11 12.25H20.625C21.1082 12.25 21.5 12.6418 21.5 13.125C21.5 13.6082 21.1082 14 20.625 14H11C10.5168 14 10.125 13.6082 10.125 13.125Z" fill="white"/>
  </svg>  
}