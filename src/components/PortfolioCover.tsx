import Link from "next/link";
import Heading from "./ui/Heading";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import LeftRightButton from "./ui/LeftRightButton";
import Paragraph from "./ui/Paragraph";

type Props = {
  category: string;
  title: string;
  date: string;
  img: string;
};

const PortfolioCover = (props: Props) => {
  const { category, title, date, img } = props;
  return (
    <div className="border-t-2 border-border-primary py-6">
      <Heading size="sm" className="text-accent-color mb-4">
        {category}
      </Heading>
      <div className="rounded-2xl overflow-hidden h-80">
        <Image src={img} alt={img} width={1000} height={1000} />
      </div>
      <div className="flex items-center justify-between my-4">
        <div>
          <Paragraph className="capitalize">{title}</Paragraph>
          <p className="text-xs">{date}</p>
        </div>
        <div>
          <Link
            href="/portfolio"
            className="uppercase flex items-center justify-end  text-xs border-b-2 border-border-primary"
          >
            view project <ArrowUpRight height={30} />
          </Link>
        </div>
      </div>
      <LeftRightButton />
    </div>
  );
};

export default PortfolioCover;
