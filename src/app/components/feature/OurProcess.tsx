import { FC } from "react";

const OurProcess: FC = () => {
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
      <div className="max-w-screen-2xl mx-auto">
        <div
          className="mt-20 md:mt-10 md:grid md:grid-cols-3 bg-top md:bg-center sm:bg-contain"
          style={{
            backgroundImage: "url('/images/process-background.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-10 sm:py-20">
            <div className="relative max-w-[400px] sm:max-w-[550px] md:max-w-full mx-auto sm:-mt-20 md:-mt-0">
              <div className="absolute lg:w-auto w-[150px] md:w-[200px] sm:-top-16 left-8 -top-20 md:left-28 lg:-top-48 lg:-left-12">
                <img src="/images/number-one.svg"></img>
              </div>
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
            <div className="mt-[500px] sm:mt-[350px] md:mt-48 relative max-w-[400px] sm:max-w-[550px] md:max-w-full mx-auto">
              <div className="absolute lg:w-auto w-[150px] md:w-[200px] left-36 top-20 sm:top-0 sm:left-96 md:top-52 md:left-36 lg:top-20 lg:left-28">
                <img src="/images/number-three.svg"></img>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg text-orange-600 tracking-[.15em] underline uppercase">
                Testowanie i wsparcie
              </h3>
              <div className="mt-6 text-xs md:text-sm lg:text-base">
                <p>Dla nas praca nie kończy się po wdrożeniu strony:</p>
                <ul className="list-disc my-4 list-inside space-y-1">
                  <li>
                    Regularnie przeprowadzamy testy, by zapewnić najwyższą
                    jakość i funkcjonalność.
                  </li>
                  <li>
                    Wspieramy Cię także po uruchomieniu, oferując wsparcie
                    techniczne, gdy tego potrzebujesz. Naszym celem jest
                    zapewnienie Ci pewności, że Twoja strona działa sprawnie i
                    skutecznie, wspierając Cię w każdym kroku na drodze do
                    sukcesu online.
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
          <div />
          <div className="self-center relative max-w-[400px] sm:max-w-[550px] md:max-w-full mx-auto mt-20 sm:mt-0">
            <div className="absolute lg:w-auto w-[150px] md:w-[200px] sm:-top-12 sm:left-36 md:-top-20 md:left-16 lg:-top-28 lg:left-36">
              <img src="/images/number-two.svg"></img>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
