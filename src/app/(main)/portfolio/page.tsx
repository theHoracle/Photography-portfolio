import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import ServicesList from "@/components/ServicesList";
import Paragraph from "@/components/ui/Paragraph";
import Ticker from "@/components/Ticker";
import FAQ from "@/components/FAQ";
import { getServicesAndProjects } from "@/hooks/get-services";
import Heading from "@/components/ui/Heading";


export default async function Portfolio() {
  const services = await getServicesAndProjects();
  return (
  <div className="">
    <section className=" w-full">
      <MaxWidthWrapper>
        <div className="h-[calc(100lvh-80px)] my-8 md:m-0 grid grid-rows-2 md:flex  gap-4">
      <div className="relative w-full md:row-span-2 rounded-2xl md:rounded-tr-none overflow-hidden">
        <Image
        src="/gallery/image1.jpeg"
        alt="image1"
        fill
        className="object-cover object-center"
        />
      </div>
      <div className="max-h-fit my-4">
        <Paragraph variants="topic" className="text-xs">Portfolio</Paragraph>
        <Heading size="sm" className="mb-4 uppercase leading-5">
          Visual Poetry in Details
        </Heading>
        <Paragraph>
         {"Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens."}
        </Paragraph>
        <div className="hidden md:block  mt-8 ">
          <div className="grid grid-cols-2 lg:grid-cols-3 h-full gap-4">
            <div className="relative w-full aspect-[1/1.5]">
              <Image
              src="/gallery/image2.jpeg"
              alt="image2"
              fill
              className="object-cover object-center" 
              />
            </div>
            <div className="relative w-full aspect-[1/1.5]">
              <Image
              src="/gallery/image3.jpeg"
              alt="image2"
              fill
              className="object-cover object-center"
              />
            </div>
            <div className="relative w-full aspect-[1/1.5]">
              <Image
              src="/gallery/image1b.jpeg"
              alt="image2"
              fill
              className="object-cover object-center"
              />
            </div>
          </div>
          <p className="uppercase text-xs text-end my-4">scroll down to see the projects</p>
        </div>
      </div>
        </div>
        </MaxWidthWrapper>
    </section>

    <div className="flex flex-col items-center gap-4">
          <Paragraph variants="topic">Brands I have worked with</Paragraph>
          <div className=""></div>
        </div>

    <MaxWidthWrapper>
      <div className="my-10">
        
        {/* portfolio slides */}
       <ServicesList  services={services} />
      </div>
    </MaxWidthWrapper>
      <FAQ />
    </div>
  );
}
