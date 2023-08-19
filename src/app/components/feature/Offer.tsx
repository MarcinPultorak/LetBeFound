"use client";

import { FC, ReactNode } from "react";

const Offer: FC = () => {
  const data = [
    {
      title: "Wyróżnij się online",
      description:
        "Pomożemy Ci wyróżnić Twoją firmę online poprzez stworzenie profesjonalnej strony internetowej, która przyciągnie uwagę klientów.",
      icon: <img src="/images/icon-globe.svg" />,
    },
    {
      title: "Responsywność",
      description:
        "Nasze strony są w pełni responsywne, dzięki czemu wyglądają doskonale na wszystkich urządzeniach, co jest kluczowe dla sukcesu w erze mobilności.",
      icon: <img src="/images/icon-arrows.svg" />,
    },
    {
      title: "Indywidualne podejście",
      description:
        "W LetBeFound rozumiemy, że każdy projekt jest unikalny, tak jak każdy klient. Nasze podejście skupia się na budowaniu partnerskich relacji i dokładnym zrozumieniu Twoich potrzeb.",
      icon: <img src="/images/icon-chart.svg" />,
    },
    {
      title: "Optymalizacja SEO",
      description:
        "Tworzenie strony to tylko pierwszy krok. Nasze zaawansowane techniki optymalizacji SEO sprawią, że Twoja strona będzie widoczna dla osób, które poszukują Twoich usług. To klucz do zdobywania organicznego ruchu i pozyskiwania nowych klientów.",
      icon: <img src="/images/icon-cog.svg" />,
    },
  ];

  return (
    <section
      className=""
      style={{
        backgroundImage: "url('/images/offer-background.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="space-y-5">
        {data.map((item) => (
          <_OfferTile
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Offer;

type _OfferTileProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const _OfferTile: FC<_OfferTileProps> = (props) => {
  return (
    <div
      className="max-w-xl flex  justify-between border border-zinc-600 rounded-2xl p-8"
      style={{
        boxShadow: "0px 4px 20px 0px rgba(82, 82, 91, 0.25)",
      }}
    >
      <div className="max-w-sm flex flex-col items-center">
        <h2 className="text-lg text-orange-600 tracking-[.15em] underline uppercase">
          {props.title}
        </h2>
        <p className="mt-4 text-justify">{props.description}</p>
      </div>
      <div className="flex items-center">{props.icon}</div>
    </div>
  );
};
