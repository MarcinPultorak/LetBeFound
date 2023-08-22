"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { FC } from "react";
import SectionDesktop from "./SectionDesktop";
import SectionMobile from "./SectionMobile";

const OurProcess: FC = () => {
  const isMobile = useIsMobile(768);

  return (
    <section
      className="px-5 sm:px-10 py-20 relative z-30"
      style={{
        backgroundColor: "#182132",
        boxShadow: "0px 4px 40px 0px #090D19",
      }}
    >
      <h2 className="uppercase text-base sm:text-lg md:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
        Etapy współpracy
      </h2>
      {isMobile ? <SectionMobile /> : <SectionDesktop />}
    </section>
  );
};

export default OurProcess;
