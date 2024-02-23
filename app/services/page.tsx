import Navbar from "../components/MainComponents/Navbar";
import PageIntro from "../components/PageIntro";
import Paragraph from "../components/ui/Paragraph";
import ArrowLink from "../components/ui/ArrowLink";
import ServicesPage from "../components/PageComponents/ServicesPage";
import FAQ from "../components/MainComponents/FAQ";
import Footer from "../components/MainComponents/Footer";

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="mx-6">
        <PageIntro
          page="services"
          head="Diverse Photography Offerings"
          note="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe nesciunt facilis vitae et porro facere mollitia quia culpa fuga id repellendus, quam numquam, aliquid impedit fugiat officia totam in."
        />
        <ServicesPage />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
