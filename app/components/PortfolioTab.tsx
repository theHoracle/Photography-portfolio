import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LeftRightButton from "./ui/LeftRightButton";
import Paragraph from "./ui/Paragraph";

const PortfolioTab = () => {
  return (
    <div className="w-full my-10">
      <div className="md:w-1/3 ">
        <div className="mb-3 grid place-items-center h-auto lg:h-96 overflow-hidden rounded-xl">
          <Image
            alt="Burna, a lady and 21 Savage at the 2024 Grammys"
            src="/gallery/image2.jpeg"
            width={380}
            height={250}
            className="min-h-full w-auto"
          />
        </div>
        <div className="flex items-start justify-between">
          <div>
            <Paragraph size="sm">Faces of Resilience</Paragraph>
            <p className="text-xs">Janurary 2024</p>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="uppercase flex items-center justify-end  text-sm md:text-xs border-b-2 border-border-primary"
            >
              view project <ArrowUpRight height={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden my-10">
        <LeftRightButton />
      </div>
    </div>
  );
};

export default PortfolioTab;
