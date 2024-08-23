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
    <div className="w-screen mb-[80px] md:mb-0">
      <div className="md:hidden w-full z-50 fixed bg-background top-0">
        <MobileNavbar />
      </div>
      {/* The end of Mobile nav */}
      <div className="hidden md:block fixed bg-background z-50 top-0  w-full h-20 border-b-2 border-border-primary">
        <DesktopNavbar />
      </div>
    </div>
  );
};

export default Navbar;
