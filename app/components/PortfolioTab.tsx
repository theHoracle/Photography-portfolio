import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LeftRightButton from "./ui/LeftRightButton";
import Paragraph from "./ui/Paragraph";

const PortfolioTab = () => {
  return (
    <div className="w-full">
      <div className="md:w-1/3">
        <div className="mb-3">
          <Image
            alt="Burna, a lady and 21 Savage at the 2024 Grammys"
            src="/img/Grammys.jpeg"
            width={380}
            height={250}
            className="rounded-2xl"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Paragraph size="sm">Faces of Resilience</Paragraph>
            <p className="text-xs">Janurary 2024</p>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="uppercase flex items-center justify-end  text-sm border-b-2 border-border-primary"
            >
              view project <ArrowUpRight height={30} />
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <LeftRightButton />
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;
