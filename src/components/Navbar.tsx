"use client"
import { usePathname } from "next/navigation";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";


const Navbar = () => {
  const pathname = usePathname()
  if(pathname.includes("admin")) {
    return null
  }
  // add styles based on active page
  return (
    <div className="w-screen mb-24 md:mb-0">
      <div className="md:hidden w-full z-50 fixed bg-background top-0">
        <MobileNavbar />
      </div>
      {/* The end of Mobile nav */}
      <div className="hidden md:block w-full h-20 border-b-2 border-border-primary">
        <DesktopNavbar />
      </div>
    </div>
  );
};

export default Navbar;
