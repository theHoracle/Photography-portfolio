import Image from "next/image";
import TitledLink from "./TitledLink";
import Button from "./ui/Button";
import { ArrowUpRightIcon } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import services from "../lib/ServiceHighlights";
import LeftRightButton from "./ui/LeftRightButton";
import Heading from "./ui/Heading";

const Service = () => {
  return (
    <div className="my-8">
      <TitledLink
        movable
        title="my photography services"
        desc="services"
        toGO="/services"
      />
      <div
        className="md:flex md:w-full my-6 md:flex-row-reverse md:gap-6
      "
      >
        <div className="my-8 md:my-0 md:w-1/2 rounded-2xl  md:rounded-bl-[80px] overflow-hidden">
          <Image
            className="object-cover md:h-full md:w-full"
            src="/img/j-cole.webp"
            alt="J-cole in the lights"
            width={380}
            height={253}
          />
        </div>
        <div className="md:w-1/2">
          <div>
            <Heading className="flex items-center justify-start gap-2">
              Events{" "}
              <Button variant="super" size="roundedXl">
                <ArrowUpRightIcon />
                {""}
              </Button>
            </Heading>
            <Paragraph className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              eius expedita beatae, dicta magnam recusandae veniam est! Aut
              voluptate quod aspernatur nihil, corporis error autem nemo unde ex
              tempore. Id culpa molestiae quis eaque veritatis neque.
            </Paragraph>
          </div>
          <div className="my-10 md:my-5">
            <h4 className="mb-2">Service Highlights</h4>
            <div className="flex flex-col gap-3">
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="border-2 border-color p-4 rounded-lg"
                  >
                    {/* icon */}
                    <Paragraph className="uppercase text-sm ">
                      {service}
                    </Paragraph>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <LeftRightButton />
      </div>
    </div>
  );
};

export default Service;
