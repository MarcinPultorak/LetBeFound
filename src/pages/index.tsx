import AboutUs from "@/components/feature/AboutUs";
import Contact from "@/components/feature/Contact";
import Hero from "@/components/feature/Hero";
import Offer from "@/components/feature/Offer";
import OurProcess from "@/components/feature/OurProcess/OurProcess";
import OurProjects from "@/components/feature/OurProjects";
import WhyYouNeedWebsite from "@/components/feature/WhyYouNeedWebsite/WhyYouNeedWebsite";
import SectionWrapper from "@/components/ui/SectionWrapper";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />

      <SectionWrapper id={"Oferta"}>
        <WhyYouNeedWebsite />
        <Offer />
      </SectionWrapper>

      <SectionWrapper id={"Nasz proces"}>
        <OurProcess />
      </SectionWrapper>

      <SectionWrapper id={"O nas"}>
        <AboutUs />
      </SectionWrapper>

      <SectionWrapper id={"Nasze realizacje"}>
        <OurProjects />
      </SectionWrapper>

      <SectionWrapper id={"Kontakt"}>
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default Home;
