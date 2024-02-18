import Link from "next/link";
import Image from "next/image";

import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import { ArrowUpRight } from "lucide-react";
import LeftRightButton from "../components/ui/LeftRightButton";

const Pricing = () => {
  return (
    <div>
      <div className="my-10 flex flex-col gap-4">
        <Heading size="sm">potrait photography</Heading>
        <Paragraph className="text-accent-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          temporibus repudiandae doloribus sit earum quo autem odit dolorum
          accusamus consectetur, ipsum ut cum error, rerum minima pariatur harum
          exercitationem iure.
        </Paragraph>
        <div>
          <Link
            href="/portfolio"
            className="uppercase flex items-center justify-start
    text-sm border-b-2 mr-auto border-border-primary max-w-max"
          >
            view project <ArrowUpRight height={30} />
          </Link>
          <div className="flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden mt-4">
              <Image
                src="/img/Grammys.jpeg"
                alt="some image"
                width={1000}
                height={1000}
              />
            </div>
            <div className="bg-background-color -translate-y-12 w-1/2 flex flex-col h-14  items-center rounded-tl-3xl rounded-tr-3xl ">
              <div className="-my-7">
                <LeftRightButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Pricing;
