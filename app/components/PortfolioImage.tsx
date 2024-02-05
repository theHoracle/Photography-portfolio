import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";
import Link from "next/link";

const PortfolioImage = () => {
  return (
    <div>
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
          <h4>Faces of Resilience</h4>
          <Paragraph>Janurary 2024</Paragraph>
        </div>
        <div>
          <Link
            href="/portfolio"
            className="uppercase flex items-center justify-end gap-1"
          >
            view project <ArrowUpRight height={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImage;
