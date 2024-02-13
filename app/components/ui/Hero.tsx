import { ArrowUpRightIcon } from "lucide-react";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Hero = () => {
  return (
    <div className="py-10  w-full">
      <div>
        <Paragraph className="uppercase">Stunning Photography By</Paragraph>
        <Heading className="text-5xl capitalize">theLatunji</Heading>
      </div>
      <div className="pt-8">
        <h2 className="text-3xl uppercase">
          <div className="flex justify-start items-center gap-2">
            Let&apos;s
            <Button variant="super" size="xl">
              <ArrowUpRightIcon />
            </Button>
          </div>
          work together
        </h2>
      </div>
    </div>
  );
};
export default Hero;
