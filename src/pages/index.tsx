import AboutUs from "@/components/feature/AboutUs";
import Contact from "@/components/feature/Contact";
import Hero from "@/components/feature/Hero";
import Offer from "@/components/feature/Offer";
import OurProcess from "@/components/feature/OurProcess/OurProcess";
import OurProjects from "@/components/feature/OurProjects";
import WhyYouNeedWebsite from "@/components/feature/WhyYouNeedWebsite/WhyYouNeedWebsite";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <WhyYouNeedWebsite />
      <Offer />
      <OurProcess />
      <AboutUs />
      <OurProjects />
      <Contact />
    </>
  );
};

export default Home;
