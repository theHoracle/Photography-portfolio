import { ArrowUpRightIcon } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="py-10 px-6 w-full">
      <div>
        <p className="uppercase">Stunning Photography By</p>
        <h1 className="text-6xl">theLatunji</h1>
      </div>
      <div className="pt-8">
        <h2 className="text-3xl uppercase">
          <div className="flex justify-start items-center gap-2">
            Let's
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
