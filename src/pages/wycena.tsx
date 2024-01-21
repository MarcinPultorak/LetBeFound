import HeaderSimple from "@/components/feature/Header/HeaderSimple";
import Questionnaire from "@/components/feature/Questionnaire/Questionnaire";
import { AppPage } from "@/types/appPage";

const WycenaPage: AppPage = () => {
  return (
    <section className="flex-grow bg-grayBlue px-5 sm:px-10 pt-5 pb-10 sm:pb-20">
      <div className="max-w-screen-2xl mx-auto">
        <HeaderSimple />
        <h1 className="uppercase text-base sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em] mt-20">Wycena twojej strony internetowej</h1>
        <Questionnaire />
      </div>
    </section>
  );
};

WycenaPage.layoutType = "default";

export default WycenaPage;
