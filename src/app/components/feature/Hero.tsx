import { FC } from "react";
import Button from "../ui/Button";
import SwitchButton from "../ui/SwitchIcon";
import Header from "../ui/Header";

const Hero: FC = () => {
  return (
    <section
      className="w-full h-screen flex flex-col flex-1 justify-center relative px-4 sm:px-10 z-50"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "0px 4px 40px 0px rgba(234, 88, 12, 0.20)",
      }}
    >
      <Header />
      <div className="max-w-screen-2xl mx-auto h-full flex flex-col items-center justify-between max-h-[640px] mb-40 mt-40 sm:mb-60">
        <div className="flex flex-col items-center">
          <h1 className="uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[.2em] font-bold text-center">
            <div style={{ textShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)" }}>
              Zrewolucjonizuj
            </div>
            <div
              className="mt-2 sm:mt-6"
              style={{ textShadow: "0px 6px 4px rgba(0, 0, 0, 0.25)" }}
            >
              swój biznes
            </div>
          </h1>
          <div
            className="h-0.5 w-[140px] sm:w-[200px] md:w-[260px] lg:w-[330px] bg-slate-300 mt-2 sm:mt-6"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          />
        </div>
        <div className="max-w-xl flex flex-col items-center">
          <h2
            className="text-center  text-sm sm:text-base lg:text-lg mt-10 sm:mt-0"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.75)" }}
          >
            Stwórz nowoczesną stronę internetową, która przyciągnie uwagę
            klientów i wyraźnie przedstawi{" "}
            <span className="text-orange-600">Twoją ofertę</span>.
          </h2>
          <div className="w-full sm:w-48 mt-10">
            <Button
              className="uppercase"
              style={{ boxShadow: "20px 20px 20px 0px rgba(0, 0, 0, 0.30)" }}
            >
              Sprawdź
            </Button>
          </div>
          <div className="absolute bottom-10">
            <SwitchButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
