import { FC } from "react";
import SectionDesktop from "./SectionDesktop";
import SectionMobile from "./SectionMobile";
import useIsMobile from "@/hooks/useIsMobile";

const OurProcess: FC = () => {
  const isMobile = useIsMobile(768);

  return (
    <section
      id={"Nasz proces"}
      className="px-5 sm:px-10 py-10 md:py-20 relative z-30 bg-grayBlue"
      style={{
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
