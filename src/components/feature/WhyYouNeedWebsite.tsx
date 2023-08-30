import { FC } from "react";
import HexagonTile from "../ui/HexagonTile";
import { WhyNeedWebsiteData } from "@/data/textData";
import HexagonTileEmpty from "../ui/HexagonTileEmpty";

const WhyYouNeedWebsite: FC = () => {
  return (
    <>
      <section className="py-20 px-10 bg-grayBlue relative">
        <div className="max-w-screen-2xl mx-auto ">
          <h2 className="uppercase sm:text-xl md:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
            Dlaczego Warto Posiadać Własną Stronę Internetową dla Twojego
            Biznesu?
          </h2>
          <p className="max-w-2xl p-5 text-justify absolute top-72 left-1/3 z-50">
            W dzisiejszych czasach, kiedy większość działań przenosi się do
            przestrzeni online, posiadanie profesjonalnej strony internetowej
            stało się nieodzownością dla każdego przedsiębiorstwa. Jeśli chcesz
            skutecznie konkurować na rynku i dotrzeć do szerokiego grona
            potencjalnych klientów, to inwestycja w własną stronę internetową
            jest absolutnie niezbędna. A dlaczego akurat LetBeFound jest
            idealnym partnerem do stworzenia Twojej strony internetowej? Oto
            kilka powodów:
          </p>
          <div className="w-[calc(100%*1.90)] grid grid-cols-6 gap-x-3 -ml-[28.6%] -mt-[10%]">
            <HexagonTileEmpty />
          </div>
          <div className="w-[calc(100%*1.90)] grid grid-cols-6 gap-x-3 -ml-[44.9%] -mt-[7%]">
            <HexagonTileEmpty />
            <HexagonTileEmpty />
            <HexagonTileEmpty />
          </div>
          <div className="w-[calc(100%*1.90)] grid grid-cols-6 gap-x-3 -ml-[29%] -mt-[7%]">
            <HexagonTileEmpty />
            <HexagonTile data={WhyNeedWebsiteData.Tile1} />
            <HexagonTile data={WhyNeedWebsiteData.Tile2} />
            <HexagonTile data={WhyNeedWebsiteData.Tile3} />
          </div>
          <div className="w-[calc(100%*1.90)] grid grid-cols-6 gap-x-3 -ml-[13.1%] -mt-[7%]">
            <HexagonTileEmpty />
            <HexagonTile data={WhyNeedWebsiteData.Tile4} />
            <HexagonTile data={WhyNeedWebsiteData.Tile5} />
            <HexagonTileEmpty />
          </div>
          <div className="w-[calc(100%*1.90)] grid grid-cols-6 gap-x-3 ml-[34.6%] -mt-[7%]">
            <HexagonTile data={WhyNeedWebsiteData.Tile6} />
            <HexagonTileEmpty />
            <HexagonTileEmpty />
          </div>
          <div className="w-[calc(100%*1.90)] grid grid-cols-6 gap-x-3 ml-[82.4%] -mt-[7%]">
            <HexagonTileEmpty />
          </div>
          <p className="max-w-2xl font-bold text-justify p-5 absolute left-1/3 bottom-28 ">
            W dzisiejszych czasach, kiedy większość działań przenosi się do
            przestrzeni online, posiadanie profesjonalnej strony internetowej
            stało się nieodzownością dla każdego przedsiębiorstwa. Jeśli chcesz
            skutecznie konkurować na rynku i dotrzeć do szerokiego grona
            potencjalnych klientów, to inwestycja w własną stronę internetową
            jest absolutnie niezbędna. A dlaczego akurat LetBeFound jest
            idealnym partnerem do stworzenia Twojej strony internetowej? Oto
            kilka powodów:
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyYouNeedWebsite;
