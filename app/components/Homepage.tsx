import AboutCard from "./AboutCard";
import FAQ from "./FAQ";
import Footer from "./Footer";
import HomeGallery from "./HomeGallery";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Button from "./ui/Button";
import { ArrowUpRightIcon } from "lucide-react";
import Hero from "./ui/Hero";

const Homepage = () => {
  return (
    <>
      <Hero />
      <main className="">
        <HomeGallery />
        <AboutCard />
        <Services />
        <Portfolio />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
