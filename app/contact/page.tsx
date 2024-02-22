import ContactPage from "../components/PageComponents/ContactPage";
import Footer from "../components/MainComponents/Footer";
import Navbar from "../components/MainComponents/Navbar";
import Testimonials from "../components/Testimonials";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="mx-6">
        <ContactPage />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
