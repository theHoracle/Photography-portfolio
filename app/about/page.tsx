import AboutPage from "../components/AboutPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
