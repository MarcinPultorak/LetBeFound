import Image from "next/image";
import Hero from "./components/feature/Hero";
import Offer from "./components/feature/Offer";
import OurProcess from "./components/feature/OurProcess/OurProcess";
import AboutUs from "./components/feature/AboutUs";
import Contact from "./components/feature/Contact";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offer />
      <OurProcess />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
