import AboutCard from "./AboutCard";
import FAQ from "./FAQ";
import Footer from "./Footer";
import HomeGallery from "./HomeGallery";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Button from "./ui/Button";
import { ArrowUpRightIcon } from "lucide-react";
import Hero from "./ui/Hero";
import PortfolioTab from "./PortfolioTab";
import TitledLink from "./TitledLink";

const Homepage = () => {
  return (
    <>
      <Hero />
      <main className="">
        <HomeGallery />
        <AboutCard />
        <Services />
        <div>
          <TitledLink
            desc="Portfolio"
            title="Explore my photography work"
            toGO="/works"
          />
          <PortfolioTab />
        </div>
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
