import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
