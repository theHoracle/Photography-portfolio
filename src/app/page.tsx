import FAQ from "../components/FAQ";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Hero from "../components/ui/Hero";
import AboutSection from "../components/AboutSection";
import { getProjects } from "@/hooks/get-projects";
import { getReviews } from "@/hooks/get-reviews";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSlides from "@/components/PortfolioSlides";

export default async function Home() {
  const projects = await getProjects();
  const reviews = await getReviews();
 return (
   <div className="flex flex-col">
    <Navbar />
    <div className="sm:mt-20">
      <Hero />
      <AboutSection />
      <Services />
      {/* Portfolio */}
      <PortfolioSlides title="Explore my photography projects" slides={projects}/>
      <FAQ /> 
      <Testimonials reviews={reviews} />
      <Footer />
      </div>
     </div>
  );
}
