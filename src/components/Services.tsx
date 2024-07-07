import Image from "next/image";
import TitledLink from "./TitledLink";
import { ArrowUpRightIcon } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import services from "../app/lib/ServiceHighlights";
import LeftRightButton from "./ui/LeftRightButton";
import Heading from "./ui/Heading";
import { Button } from "./ui/button";


const Service = () => {
  return (
    <div className="my-8 ">
      <TitledLink
        movable
        title="my photography services"
        desc="services"
        toGO="/services"
      />
      <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2  gap-4">
        <div className="relative rounded-3xl md:rounded-bl-[100px] overflow-hidden row-span-1 md:col-span-2">
          <Image
            className="object-cover object-center size-full"
            src="/img/j-cole.webp"
            alt="J-cole in the lights"
            fill
          />
        </div>
        <div className="row-start-2 md:col-span-1">
          <div className="flex flex-col gap-4">
            <Heading className="flex items-center justify-start gap-2">
              Events{" "}
              <Button>
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
