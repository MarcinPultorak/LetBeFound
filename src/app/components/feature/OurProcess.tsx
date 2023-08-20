import { FC } from "react";

const OurProcess: FC = () => {
  return (
    <section
      className="px-10 py-20"
      style={{
        backgroundColor: "#182132",
      }}
    >
      <h2 className="uppercase text-2xl text-center font-bold tracking-[.15em]">
        Etapy współpracy
      </h2>
      <div className="max-w-screen-2xl mx-auto">
        <div
          className="mt-10 grid grid-cols-3"
          style={{
            backgroundImage: "url('/images/process-background.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-20">
            <div className="relative">
              <div className="absolute -top-48 -left-12">
                <img src="/images/number-one.svg"></img>
              </div>
              <h3 className="text-lg text-orange-600 tracking-[.15em] underline uppercase">
                Konsultacje i analiza
              </h3>
              <p className="mt-6">
                Rozpoczynamy naszą współpracę od dogłębnych konsultacji, aby
                poznać Twoje cele i wymagania. Przeprowadzamy także wnikliwą
                analizę rynku i konkurencji, aby nasze rozwiązania były
                strategicznie dostosowane i efektywne. To nasza droga do
                zrozumienia Twojej wizji i zbudowania solidnego fundamentu dla
                projektu.
              </p>
            </div>
            <div className="mt-48 relative">
              <div className="absolute top-20 left-28">
                <img src="/images/number-three.svg"></img>
              </div>
              <h3 className="text-lg text-orange-600 tracking-[.15em] underline uppercase">
                testowanie i wsparcie
              </h3>
              <p className="mt-6">
                Dla nas praca nie kończy się po wdrożeniu strony:
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
                Daj nam szansę, abyśmy mogli przekształcić Twoje wizje w
                rezultaty online, które przynoszą wartość Twojemu biznesowi.
              </p>
            </div>
          </div>
          <div />
          <div className="self-center relative">
            <div className="absolute -top-28 left-36">
              <img src="/images/number-two.svg"></img>
            </div>
            <h3 className="text-lg text-orange-600 tracking-[.15em] underline uppercase">
              projektowanie i wdrażanie
            </h3>
            <p className="mt-6">
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
