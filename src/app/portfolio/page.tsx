import Paragraph from "../../components/ui/Paragraph";
import Ticker from "../../components/Ticker";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import PageIntro from "../../components/PageIntro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Services, Work } from "@prisma/client";
import PortfolioSlides from "@/components/PortfolioSlides";

export const getServices = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/services-and-works`);
  if (!res.ok) {
    throw new Error("FETCH SERVICES FAILED!");
  }
  return res.json();
};

export default async function Portfolio() {
  let services: (Services & { works: Work[] })[] | undefined;

  try {
    const data = await getServices();
    services = data.services;
    console.log("I don logg you: ", services);
  } catch (error) {
    console.error("Error fetching services: ", error);
    services = [];
  }

  return (
    <MaxWidthWrapper>
      <div className="my-10">
        <PageIntro
          page="Portfolio"
          head="Visual Poetry in Pixels"
          note=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, corporis, illum temporibus repellat, ipsum odit quas libero assumenda eos quo similique beatae! Temporibus laborum qui magni nihil, repudiandae non enim porro obcaec adipisci nobis optio, quibusdam accusamus iste."
        />
        <div className="flex flex-col items-center my-8 gap-4 mb-16">
          <Paragraph variants="topic">Brands I have worked with</Paragraph>
          <Ticker />
        </div>
        <div>
          {services?.map((service) => {
            console.log("Service here: ", service);
            return (
              <PortfolioSlides
                key={service.id}
                slides={service.works}
                title={service.title}
              />
            );
          })}
        </div>
        <FAQ />
        <Testimonials />
      </div>
    </MaxWidthWrapper>
  );
}
