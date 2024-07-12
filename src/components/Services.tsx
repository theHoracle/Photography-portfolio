"use client"
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import Heading from "./ui/Heading";
import { Button } from "./ui/button";
import { services } from "@/app/lib/ServiceHighlights";
import SectionSlide from "./SectionSlide";



const Service = () => {
  const serviceArr = [EventSection, RetouchingSection, PotraitsSection]
  return (
    <div className="my-8 flex flex-col gap-6">
      <SectionSlide href="/services"
      section="services"
      sectionTitle="My photography services"
      slides={serviceArr} />
    </div>
  );
};

export default Service;

const EventSection = () => {
  return <div className="flex flex-col lg:flex-row-reverse gap-4">
        <div className="relative hidden lg:block rounded-3xl md:rounded-bl-[100px] overflow-hidden flex-[2] size-auto lg:flex-1">
          <Image
            className="object-cover object-center size-full"
            src="/img/j-cole.webp"
            alt="J-cole in the lights"
            fill
          />
        </div>
        <div className="flex-[3] lg:flex-1">
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
          <div className="my-8 md:my-5">
            <h4 className="mb-2 text-sm">Service Highlights</h4>
            <div className="flex flex-col gap-2.5">
              {services.map((service, index) => {
                return <div key={index} className="border border-accent rounded-lg w-full p-4 uppercase">
                  <p>{service}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
}

const RetouchingSection = () => {
  return <div></div>
}

const PotraitsSection = () => {
  return <div></div>
}