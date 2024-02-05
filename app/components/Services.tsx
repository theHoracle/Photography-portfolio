import Image from "next/image";
import TitledLink from "./TitledLink";
import Button from "./ui/Button";
import { ArrowUpRightIcon } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import services from "../lib/ServiceHighlights";
import LeftRightButton from "./ui/LeftRightButton";

const Service = () => {
  return (
    <div>
      <TitledLink
        title="my photography services"
        desc="services"
        toGO="/services"
      />
      <div className="">
        <div className="my-8">
          <Image
            className="rounded-2xl"
            src="/img/j-cole.webp"
            alt="J-cole in the lights"
            width={380}
            height={253}
          />
        </div>
        <div>
          <h2 className="uppercase text-3xl mb-3 flex items-center justify-start gap-2">
            Events{" "}
            <Button variant="super" size="xl">
              <ArrowUpRightIcon />{" "}
            </Button>
          </h2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius
            expedita beatae, dicta magnam recusandae veniam est! Aut voluptate
            quod aspernatur nihil, corporis error autem nemo possimus harum
            cumque excepturi quo soluta explicabo ut ipsa mollitia, esse,
            pariatur temporibus iusto accusantium? Ipsam dignissimos eius
            placeat blanditiis quisquam dicta, cum suscipit unde ex tempore. Id
            culpa molestiae quis eaque veritatis neque.
          </Paragraph>
        </div>
        <div className="my-10">
          <h4 className="mb-2">Service Highlights</h4>
          <div className="flex flex-col gap-3">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-color p-4 rounded-lg"
                >
                  {/* icon */}
                  <Paragraph className="uppercase font-xl ">
                    {service}
                  </Paragraph>
                </div>
              );
            })}
          </div>
          <LeftRightButton />
        </div>
      </div>
    </div>
  );
};

export default Service;
