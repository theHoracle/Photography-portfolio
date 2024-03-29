import AboutCard from "../AboutCard";
import FAQ from "../MainComponents/FAQ";
import Footer from "../MainComponents/Footer";
import HomeGallery from "../HomeGallery";
import Services from "../Services";
import Testimonials from "../Testimonials";
import Hero from "../ui/Hero";
import PortfolioTab from "../PortfolioTab";
import TitledLink from "../TitledLink";
import Ticker from "../Ticker";

const Homepage = () => {
  return (
    <>
      <Hero />
      <main className="">
        <Ticker />
        <HomeGallery />
        <AboutCard />
        <Services />

        <PortfolioTab />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
