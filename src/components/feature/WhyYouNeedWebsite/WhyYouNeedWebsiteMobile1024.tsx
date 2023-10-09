import Button from "@/components/ui/Button";
import HexagonTile from "@/components/ui/HexagonTile";
import HexagonTileEmpty from "@/components/ui/HexagonTileEmpty";
import { WhyNeedWebsiteData } from "@/data/textData";
import { FC } from "react";
import Link from "next/link";

const WhyYouNeedWebsiteMobile1024: FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="max-w-2xl mx-auto uppercase sm:text-xl md:text-xl text-center font-bold tracking-[.15em] relative z-10">
        Dlaczego Warto Posiadać Własną Stronę Internetową dla Twojego Biznesu?
      </h2>
      <p className="max-w-2xl text-sm p-5 text-justify absolute top-40 w-full inset-x-1/2 -translate-x-1/2 z-10">
        W dzisiejszych czasach, kiedy większość działań przenosi się do
        przestrzeni online, posiadanie profesjonalnej strony internetowej stało
        się nieodzownością dla każdego przedsiębiorstwa. Jeśli chcesz skutecznie
        konkurować na rynku i dotrzeć do szerokiego grona potencjalnych
        klientów, to inwestycja w własną stronę internetową jest absolutnie
        niezbędna. A dlaczego akurat LetBeFound jest idealnym partnerem do
        stworzenia{" "}
        <span className="text-orange-600">Twojej strony internetowej?</span> Oto
        kilka powodów:
      </p>

      <div className="w-[calc(100%*1.90)] grid grid-cols-4 gap-x-2 -ml-[22%] -mt-[10.8%]">
        <HexagonTileEmpty />
      </div>
      <div className="w-[calc(100%*1.90)] grid grid-cols-4 gap-x-2 -ml-[46%] -mt-[10.8%]">
        <HexagonTileEmpty />
        <HexagonTile data={WhyNeedWebsiteData.Tile1} />
        <HexagonTile data={WhyNeedWebsiteData.Tile2} />
      </div>
      <div className="w-[calc(100%*1.90)] grid grid-cols-4 gap-x-2 -ml-[22%] -mt-[10.8%]">
        <HexagonTileEmpty />
        <HexagonTile data={WhyNeedWebsiteData.Tile3} />
        <HexagonTileEmpty />
      </div>
      <div className="w-[calc(100%*1.90)] grid grid-cols-4 gap-x-2 ml-[1.9%] -mt-[10.8%]">
        <HexagonTile data={WhyNeedWebsiteData.Tile4} />
        <HexagonTile data={WhyNeedWebsiteData.Tile5} />
        <HexagonTileEmpty />
      </div>
      <div className="w-[calc(100%*1.90)] grid grid-cols-4 gap-x-2 ml-[25.9%] -mt-[10.8%]">
        <HexagonTile data={WhyNeedWebsiteData.Tile6} />
        <HexagonTileEmpty />
      </div>
      {/* <div className="w-[calc(100%*1.90)] grid grid-cols-5 gap-x-2 ml-[97%] -mt-[8%]">
        <HexagonTileEmpty />
      </div> */}
      <p className="max-w-2xl text-sm p-5 text-justify mx-auto mt-10 z-10">
        W LetBeFound wiemy, jak ważna jest obecność online{" "}
        <span className="text-orange-600">dla sukcesu Twojego biznesu</span>.
        Nasza firma specjalizuje się w tworzeniu atrakcyjnych, zoptymalizowanych
        pod kątem SEO stron internetowych, które przyciągają uwagę, budują
        zaufanie i generują zyski. Daj swojemu biznesowi szansę na dynamiczny
        rozwój i skontaktuj się z nami już dziś, aby dowiedzieć się więcej o
        naszych usługach!
      </p>
      <Button variant="orange" className="mt-8 max-w-[360px] mx-auto">
        <Link href={"wycena"}>Darmowa wycena</Link>
      </Button>
    </div>
  );
};

export default WhyYouNeedWebsiteMobile1024;
