import { FC } from "react";
import Image from "next/image";

const OurProcess: FC = () => {
  return (
    <section
      id={"Nasz proces"}
      className="px-5 sm:px-10 py-10 md:py-20 relative z-30"
      style={{
        boxShadow: "0px 4px 40px 0px #090D19",
      }}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover -z-50"
        src={"/images/ourprocess-background.png"}
        alt="OurProcess background"
        fill
      ></Image>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 max-w-screen-2xl mx-auto">
        <div />
        <div className="space-y-4">
          <div className="bg-blackPurple bg-opacity-80 border border-zinc-600 rounded-2xl p-4 sm:p-8 flex flex-col items-center">
            <h3 className="text-sm sm:text-base md:text-lg text-orange-600 tracking-[.15em] underline uppercase">
              Konsultacje i analiza
            </h3>
            <p className="mt-6 text-xs md:text-sm lg:text-base">
              Rozpoczynamy naszą współpracę od dogłębnych konsultacji, aby
              poznać Twoje cele i wymagania. Przeprowadzamy także wnikliwą
              analizę rynku i konkurencji, aby nasze rozwiązania były
              strategicznie dostosowane i efektywne. To nasza droga do
              zrozumienia Twojej wizji i zbudowania solidnego fundamentu dla
              projektu.
            </p>
          </div>
          <div className="bg-blackPurple bg-opacity-80 border border-zinc-600 rounded-2xl p-4 sm:p-8 flex flex-col items-center">
            <h3 className="text-sm sm:text-base md:text-lg text-orange-600 tracking-[.15em] underline uppercase">
              Projektowanie i wdrażanie
            </h3>
            <p className="mt-6 text-xs md:text-sm lg:text-base">
              Nasz zespół projektowy, pełen kreatywności i pasji, przekształca
              Twoje marzenia w rzeczywistość online. Tworzymy estetyczne i
              intuicyjne projekty, które oddają charakter Twojej firmy. Po
              otrzymaniu Twojej aprobaty przystępujemy do wdrożenia, dbając o
              każdy detal, aby Twoja strona była gotowa zdobyć serca klientów.
            </p>
          </div>
          <div className="bg-blackPurple bg-opacity-80 border border-zinc-600 rounded-2xl p-4 sm:p-8 flex flex-col items-center">
            <h3 className="text-sm sm:text-base md:text-lg text-orange-600 tracking-[.15em] underline uppercase">
              Testowanie i wsparcie
            </h3>
            <div className="mt-6 text-xs md:text-sm lg:text-base">
              <p>Dla nas praca nie kończy się po wdrożeniu strony:</p>
              <ul className="list-disc my-4 list-inside space-y-1">
                <li>
                  Regularnie przeprowadzamy testy, by zapewnić najwyższą jakość
                  i funkcjonalność.
                </li>
                <li>
                  Wspieramy Cię także po uruchomieniu, oferując wsparcie
                  techniczne, gdy tego potrzebujesz. Naszym celem jest
                  zapewnienie Ci pewności, że Twoja strona działa sprawnie i
                  skutecznie, wspierając Cię w każdym kroku na drodze do sukcesu
                  online.
                </li>
                <li>
                  W pełni zaangażowani w Twój projekt, skupiamy się na każdym
                  etapie procesu, aby dostarczyć Ci kompleksowe i efektywne
                  rozwiązania.
                </li>
              </ul>
              <p>
                Daj nam szansę, abyśmy mogli przekształcić Twoje wizje w
                rezultaty online, które przynoszą wartość Twojemu biznesowi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
