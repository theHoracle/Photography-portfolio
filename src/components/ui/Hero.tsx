import { ArrowUpRightIcon } from "lucide-react";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Button } from "./button";

const Hero = () => {
  return (
    <div className="py-10 w-full flex flex-col md:flex-row md:items-center md:justify-between md:py-14">
      <div>
        <Paragraph className="uppercase">Stunning Photography By</Paragraph>
        <Heading size="lg">theLatunji</Heading>
      </div>
      <div className="pt-8 md:pt-0">
        <Heading size="sm">
          <span className="flex justify-start items-center gap-2 ">
            Let&apos;s
            <Button>
              <ArrowUpRightIcon />
            </Button>
          </span>
          work together
        </Heading>
      </div>
    </div>
  );
};
export default Hero;
