import { FC } from "react";

const SectionMobile: FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-20">
      <div className="relative mx-auto">
        <div className="absolute w-[150px] -top-20">
          <img src="/images/number-one.svg"></img>
        </div>
        <h3 className="text-sm sm:text-base md:text-lg text-orange-600 tracking-[.15em] underline uppercase">
          Konsultacje i analiza
        </h3>
        <p className="mt-6 text-xs">
          Rozpoczynamy naszą współpracę od dogłębnych konsultacji, aby poznać
          Twoje cele i wymagania. Przeprowadzamy także wnikliwą analizę rynku i
          konkurencji, aby nasze rozwiązania były strategicznie dostosowane i
          efektywne. To nasza droga do zrozumienia Twojej wizji i zbudowania
          solidnego fundamentu dla projektu.
        </p>
      </div>

      <div className="-mt-20">
        <img src="/images/process-background.png" className="bg-cover" />
      </div>

      <div className="self-center relative mx-auto -mt-24">
        <div className="absolute w-[150px] right-0 -top-10">
          <img src="/images/number-two.svg"></img>
        </div>
        <h3 className="text-sm sm:text-base text-orange-600 tracking-[.15em] underline uppercase">
          Projektowanie i wdrażanie
        </h3>
        <p className="mt-6 text-xs">
          Nasz zespół projektowy, pełen kreatywności i pasji, przekształca Twoje
          marzenia w rzeczywistość online. Tworzymy estetyczne i intuicyjne
          projekty, które oddają charakter Twojej firmy. Po otrzymaniu Twojej
          aprobaty przystępujemy do wdrożenia, dbając o każdy detal, aby Twoja
          strona była gotowa zdobyć serca klientów.
        </p>
      </div>

      <div className="relative mt-14 mx-auto">
        <div className="absolute w-[150px] inset-x-1/2 -translate-x-1/2 top-6">
          <img src="/images/number-three.svg"></img>
        </div>
        <h3 className="text-sm sm:text-base text-orange-600 tracking-[.15em] underline uppercase">
          Testowanie i wsparcie
        </h3>
        <div className="mt-6 text-xs">
          <p>Dla nas praca nie kończy się po wdrożeniu strony:</p>
          <ul className="list-disc my-4 list-inside space-y-1">
            <li>
              Regularnie przeprowadzamy testy, by zapewnić najwyższą jakość i
              funkcjonalność.
            </li>
            <li>
              Wspieramy Cię także po uruchomieniu, oferując wsparcie techniczne,
              gdy tego potrzebujesz. Naszym celem jest zapewnienie Ci pewności,
              że Twoja strona działa sprawnie i skutecznie, wspierając Cię w
              każdym kroku na drodze do sukcesu online.
            </li>
            <li>
              W pełni zaangażowani w Twój projekt, skupiamy się na każdym etapie
              procesu, aby dostarczyć Ci kompleksowe i efektywne rozwiązania.
            </li>
          </ul>
          <p>
            Daj nam szansę, abyśmy mogli przekształcić Twoje wizje w rezultaty
            online, które przynoszą wartość Twojemu biznesowi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionMobile;
