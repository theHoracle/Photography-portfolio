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
        <div className="h-[calc(100lvh-80px)] my-8 md:m-0 grid grid-rows-2 gap-4">
      <div className="relative w-full rounded-2xl overflow-hidden">
        <Image
        src="/gallery/image1.jpeg"
        alt="image1"
        fill
        className="object-cover object-center"
        />
      </div>
      <div className="max-h-fit">
        <Paragraph variants="topic" className="text-xs">Portfolio</Paragraph>
        <Heading size="sm" className="mb-4 uppercase leading-5">
          Visual Poetry in Details
        </Heading>
        <Paragraph>
         {"Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens."}
        </Paragraph>
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
