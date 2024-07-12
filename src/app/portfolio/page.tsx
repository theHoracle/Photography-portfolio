import Image from "next/image";

import Navbar from "../../components/Navbar";
import Paragraph from "../../components/ui/Paragraph";
import Heading from "../../components/ui/Heading";
import Ticker from "../../components/Ticker";
import PortfolioCover from "../../components/PortfolioCover";
import FAQ from "../../components/FAQ";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
import PageIntro from "../../components/PageIntro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Portfolio() {
  return (
    <MaxWidthWrapper>
      <div className="my-10 ">
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
          <PortfolioCover
            category="portraits photography"
            title="faces of resilience"
            date="Feburary 2024"
            img="/img/fashion-model-in-fur.jpeg"
          />
        </div>
        <FAQ />
        <Testimonials />
      </div>
    </MaxWidthWrapper>
  );
}
