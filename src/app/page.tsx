import FAQ from "../components/FAQ";
import PortfolioTab from "../components/PortfolioTab";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Hero from "../components/ui/Hero";
import AboutSection from "../components/AboutSection";
import { getProjects } from "@/hooks/get-projects";
import { getReviews } from "@/hooks/get-reviews";

export default async function Home() {
  const projects = await getProjects()
 return (
   <div className="flex flex-col">
      <Hero />
        <AboutSection />
        <Services />
        <FAQ />
       
      </div>
  );
}
