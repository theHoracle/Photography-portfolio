import Paragraph from "../../components/ui/Paragraph";
import Ticker from "../../components/Ticker";
import FAQ from "../../components/FAQ";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import ServicesList from "@/components/ServicesList";


export default function Portfolio() {
  
  return (
  <div className="">
    <section className="h-[calc(100lvh-80px)]   w-full">
      <MaxWidthWrapper>
      <div className="relative h-[calc(100lvh-80px)] w-full rounded-2xl overflow-hidden">
        <Image
        src="/gallery/image1.jpeg"
        alt="image1"
        fill
        className="object-cover object-center"
        />
      </div>
        </MaxWidthWrapper>
    </section>
    <MaxWidthWrapper>

      <div className="my-10">
        
        <div className="flex flex-col items-center my-8 gap-4 mb-16">
          <Paragraph variants="topic">Brands I have worked with</Paragraph>
          <Ticker />
        </div>
        {/* portfolio slides */}
       
       <ServicesList />
      </div>
    </MaxWidthWrapper>
      <FAQ />
    </div>
  );
}
