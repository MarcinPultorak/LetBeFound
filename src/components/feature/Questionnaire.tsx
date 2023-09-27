import { FC } from "react";
import Header from "./Header/Header";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";

const Questionnaire: FC = () => {
  return (
    <section className="flex-grow bg-grayBlue px-5 sm:px-10 py-10 sm:py-20">
      <div className="max-w-screen-2xl mx-auto">
        <Header />

        <h2 className="uppercase text-base sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em] mt-20">
          Wycena twojej strony internetowej
        </h2>
        <div
          className="bg-sky-800 bg-opacity-20 px-5 sm:px-10 pt-5 pb-16 mt-10 sm:mt-16 rounded-md relative"
          style={{
            boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <ProgressBar questionsCount={12} currentQuestion={7} />
          <span className="text-xs ">Pytanie 1 z 12</span>
          <h2 className="mt-2 text-sm sm:text-base md:text-lg ">
            Jakiego chuja chcesz do dupy
          </h2>
          <div className="bg-sky-800 p-3 sm:p-5 mt-8 rounded-md text-center sm:text-left">
            <span className="text-xs sm:text-sm md:text-base">
              Wybierz jedną z odpowiedzi:
            </span>
          </div>
          <div className="py-8 px-4 border-b border-sky-800 text-xs sm:text-sm md:text-base">
            <Checkbox label="duzego w chuj" />
          </div>
          <div className="py-8 px-4 border-b border-sky-800 text-xs sm:text-sm md:text-base">
            <Checkbox label="takiego tyci tyci" />
          </div>
          <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 mt-16 justify-center">
            <Button
              variant="sky"
              className="sm:max-w-[190px] font-normal normal-case text-xs sm:text-sm md:text-base"
              style={{
                boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
              }}
            >
              Poprzednie pytanie
            </Button>
            <Button
              variant="orange"
              className="sm:max-w-[190px] font-normal normal-case text-xs sm:text-sm md:text-base"
              style={{
                boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
              }}
            >
              Następne pytanie
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
