import AboutPage from "../components/PageComponents/AboutPage";
import Footer from "../components/MainComponents/Footer";
import Navbar from "../components/MainComponents/Navbar";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <div className="mx-6 flex flex-col">
        <AboutPage />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
