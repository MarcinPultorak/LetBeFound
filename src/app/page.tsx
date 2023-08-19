import Image from "next/image";
import Hero from "./components/feature/Hero";
import Offer from "./components/feature/Offer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offer />
    </main>
  );
}
