"use client";

import { FC, ReactNode } from "react";
import cx from "classnames";
import { motion } from "framer-motion";

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
      id={"Oferta"}
      className="px-5 sm:px-10 py-10 md:py-20 z-40 relative"
      style={{
        backgroundImage: "url('/images/offer-background.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "0px 4px 30px 0px #075985",
      }}
    >
      <h2 className="uppercase text-base sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
        Pozwól klientom odnaleźć cię w internecie!
      </h2>
      <div className="max-w-screen-2xl mx-auto sm:mt-20 mt-10">
        <div className="space-y-5">
          {data.map((item, index) => (
            <_OfferTile
              key={item.title}
              index={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;

type _OfferTileProps = {
  index: number;
  title: string;
  description: string;
  icon: ReactNode;
};

const _OfferTile: FC<_OfferTileProps> = (props) => {
  const even = () => {
    if (props.index % 2 == 1) {
      return [-300, 0];
    } else {
      return [300, 0];
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileInView={{
        x: even(),
        opacity: [0, 1],
        transition: { duration: [0.8] },
      }}
      transition={{ duration: 0.5 }}
      className={cx(
        "md:max-w-xl flex justify-between border border-zinc-600 rounded-2xl p-4 sm:p-8 space-x-8 opacity-90",
        {
          "md:ml-32 space-x-reverse": props.index % 2 == 1,
        }
      )}
      style={{
        boxShadow: "0px 4px 20px 0px rgba(82, 82, 91, 0.25)",
        backgroundColor: "#050915",
      }}
    >
      <div className="flex flex-col items-center">
        <h3 className="text-sm md:text-base lg:text-lg text-orange-600 tracking-[.15em] underline uppercase">
          {props.title}
        </h3>
        <p className="mt-4 text-justify text-xs sm:text-sm lg:text-base">
          {props.description}
        </p>
      </div>
      <div
        className={cx(
          "flex items-center shrink-0 w-[40px] sm:w-auto",
          props.index % 2 == 1 ? "order-first" : "order-last"
        )}
      >
        {props.icon}
      </div>
    </motion.div>
  );
};
