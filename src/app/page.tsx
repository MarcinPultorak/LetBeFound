import Image from "next/image";
import Hero from "./components/feature/Hero";
import Offer from "./components/feature/Offer";
import OurProcess from "./components/feature/OurProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offer />
      <OurProcess />
    </main>
  );
}
