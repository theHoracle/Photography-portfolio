//Using screen size would render mobile nav or desktop nav,
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-1/6 border-b-2 border-border-primary px-6">
      <div className="h-full mt-[-3px] border-l-2 border-r-2 pt-6 border-border-primary flex justify-between items-end">
        <div className="p-8">
          <Link href="/">Our Logo</Link>
        </div>
        <div className="border-t-2 border-l-2 border-border-primary rounded-tl-3xl p-6">
          <MenuIcon height={35} width={35} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
