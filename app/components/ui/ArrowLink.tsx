import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
  text?: string;
  href?: string;
};

const ArrowLink = (props: Props) => {
  const { text, href } = props;
  return (
    <div>
      <Link
        href={href ? href : "/portfolio"}
        className="uppercase flex items-center justify-end  text-sm  text-slate-300 border-b-2 border-border-primary"
      >
        {text ? text : "view project"} <ArrowUpRight />
      </Link>
    </div>
  );
};

export default ArrowLink;
