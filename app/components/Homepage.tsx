import AboutCard from "./AboutCard";
import HomeGallery from "./HomeGallery";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Button from "./ui/Button";
import { ArrowUpRightIcon } from "lucide-react";

const Homepage = () => {
  return (
    <>
      <div className="border-y border-color py-10 px-6 w-full">
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
      <HomeGallery />
      <AboutCard />
      <Services />
      <Portfolio />
    </>
  );
};

export default Homepage;
