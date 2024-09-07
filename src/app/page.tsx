import FAQ from "../components/FAQ";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Hero from "../components/ui/Hero";
import AboutSection from "../components/AboutSection";
import { getProjects } from "@/hooks/get-projects";
import { getReviews } from "@/hooks/get-reviews";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <FAQ /> 
      <Testimonials reviews={reviews} />
      <Footer />
      </div>
     </div>
  );
}
