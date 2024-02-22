import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ArrowLink = () => {
  return (
    <div>
      <Link
        href="/portfolio"
        className="uppercase flex items-center justify-end  text-sm md:text-xs border-b-2 border-border-primary"
      >
        view project <ArrowUpRight height={30} />
      </Link>
    </div>
  );
};

export default ArrowLink;
