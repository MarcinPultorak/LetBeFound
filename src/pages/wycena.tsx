import Header from "@/components/feature/Header/Header";
import Questionnaire from "@/components/feature/Questionnaire";
import { FC } from "react";

const WycenaPage: FC = () => {
  return (
    <section className="flex-grow bg-grayBlue px-5 sm:px-10 py-10 sm:py-20">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <h1 className="uppercase text-base sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em] mt-20">
          Wycena twojej strony internetowej
        </h1>
        <Questionnaire />
      </div>
    </section>
  );
};

export default WycenaPage;
