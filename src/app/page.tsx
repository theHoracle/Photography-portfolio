import HomeGallery from "../components/HomeGallery";
import FAQ from "../components/FAQ";
import PortfolioTab from "../components/PortfolioTab";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Ticker from "../components/Ticker";
import Hero from "../components/ui/Hero";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import AboutSection from "../components/AboutSection";

export default async function Home() {
 return (
    <MaxWidthWrapper>
      <Hero />
      <div className="flex flex-col">
        <Ticker />
        <HomeGallery />
        <AboutSection />
        <Services />
        <PortfolioTab />
        <FAQ />
        <Testimonials />
      </div>
    </MaxWidthWrapper>
  );
}
