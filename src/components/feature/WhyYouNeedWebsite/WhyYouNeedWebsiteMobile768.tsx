import HexagonTileStatic from "@/components/ui/HexagonTileStatic";
import { WhyNeedWebsiteData } from "@/data/textData";
import { FC } from "react";

const WhyYouNeedWebsiteMobile768: FC = () => {
  return (
    <div className="">
      <h2 className="uppercase text-base sm:text-xl text-center font-bold tracking-[.15em] relative z-10">
        Dlaczego Warto Posiadać Własną Stronę Internetową dla Twojego Biznesu?
      </h2>
      <p className="text-xs sm:text-sm text-justify w-full mt-10 pb-0 sm:pb-10">
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
      <div className="flex flex-col items-center mt-10">
        <HexagonTileStatic data={WhyNeedWebsiteData.Tile1} />
        <p className="max-w-lg text-xs sm:text-sm text-justify mt-10">
          Strona internetowa jest wizytówką Twojego biznesu w świecie online.
          Dzięki profesjonalnemu wyglądowi, zyskasz zaufanie potencjalnych
          klientów. W LetBeFound zadbamy, aby Twoja strona przyciągnęła jak
          największą ilość klientów.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <HexagonTileStatic data={WhyNeedWebsiteData.Tile2} />
        <p className="max-w-lg text-xs sm:text-sm text-justify mt-10">
          Klienci często korzystają z Internetu, aby dowiedzieć się więcej o
          firmach. Posiadając własną stronę, masz kontrolę nad informacjami,
          które prezentujesz o swoim biznesie. To sprawia, że klienci czują się
          pewniej, podejmując decyzję o współpracy z Tobą.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <HexagonTileStatic data={WhyNeedWebsiteData.Tile3} />
        <p className="max-w-lg text-xs sm:text-sm text-justify mt-10">
          Internet to ogromne źródło potencjalnych klientów. Posiadając stronę
          internetową, otwierasz drzwi do globalnego rynku, gdzie Twoje produkty
          lub usługi mogą być dostępne dla wszystkich. Dzięki odpowiednio
          dobranym treściom, Twoja strona będzie łatwa do znalezienia w
          internecie.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <HexagonTileStatic data={WhyNeedWebsiteData.Tile4} />
        <p className="max-w-lg text-xs sm:text-sm text-justify mt-10">
          Strona internetowa to doskonałe narzędzie do prowadzenia działań
          marketingowych. Dzięki odpowiednim narzędziom, takim jak blog czy
          sekcje informacyjne, możesz dostarczać wartościową treść dla swojej
          grupy docelowej, przyciągając ich uwagę i budując długotrwałe relacje.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <HexagonTileStatic data={WhyNeedWebsiteData.Tile5} />
        <p className="max-w-lg text-xs sm:text-sm text-justify mt-10">
          Wiele firm posiada już swoje strony internetowe, a brak obecności
          online może Cię wykluczyć z rywalizacji. Posiadając nowoczesną i
          funkcjonalną stronę, możesz skutecznie konkurować z innymi graczami na
          rynku.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <HexagonTileStatic data={WhyNeedWebsiteData.Tile6} />
        <p className="max-w-lg text-xs sm:text-sm text-justify mt-10">
          Dzięki stronom internetowym możesz lepiej poznać swoich klientów
          poprzez analizę ich zachowań na stronie. Możesz dostosować ofertę do
          ich preferencji oraz prowadzić interaktywną komunikację poprzez
          formularze kontaktowe czy chat online.
        </p>
      </div>
      <p className="text-xs sm:text-sm text-justify mt-10 sm:mt-20">
        W LetBeFound wiemy, jak ważna jest obecność online dla sukcesu{" "}
        <span className="text-orange-600">Twojego biznesu</span>. Nasza firma
        specjalizuje się w tworzeniu atrakcyjnych, zoptymalizowanych pod kątem
        SEO stron internetowych, które przyciągają uwagę, budują zaufanie i
        generują zyski. Daj swojemu biznesowi szansę na dynamiczny rozwój i
        skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych
        usługach!
      </p>
    </div>
  );
};

export default WhyYouNeedWebsiteMobile768;
