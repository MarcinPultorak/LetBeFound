import { FC, ReactNode } from "react";
import cx from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const AboutUs: FC = () => {
  const isMobile = useIsMobile(768);
  const data = [
    {
      icon: <img className="w-8" src="/images/icon-bulb.svg" alt="Icon-bulb" />,
      paragraph:
        "Wierzymy w twórczość i nowatorskie podejście. Nasze projekty są pełne świeżości i kreatywności, aby wyróżnić Cię na tle konkurencji.",
    },
    {
      icon: <img className="w-8" src="/images/icon-bolt.svg" alt="icon-bolt" />,
      paragraph:
        "Każdy członek zespołu LetBeFound ma w sobie ogromną pasję do tego, co robi. Ta energia jest wkomponowana w każdy projekt, który tworzymy.",
    },
    {
      icon: (
        <img className="w-8 " src="/images/icon-users.svg" alt="icon-users" />
      ),
      paragraph:
        "Tworzymy relacje oparte na zaufaniu i partnerstwie. Twoje cele stają się naszymi celami, a wspólnie pracujemy nad osiągnięciem sukcesu.",
    },
    {
      icon: (
        <img
          className="w-8"
          src="/images/icon-arrows-au.svg"
          alt="icon-arrows"
        />
      ),
      paragraph:
        "Jako zespół tworzący strony internetowe, wiemy, że to nie tylko kwestia estetyki. Nasze strony są responsywne, zoptymalizowane pod kątem SEO i skupione na konwersjach.",
    },
  ];

  return (
    <section
      id={"O nas"}
      className="px-5 sm:px-10 py-10 md:py-20 z-20 relative bg-darkPurple"
      style={{
        boxShadow: "0px 4px 30px 0px #075985",
      }}
    >
      <Image
        src={"/images/about-us.png"}
        alt="about-us-image"
        className="absolute top-0 left-0 w-full h-full object-cover -z-50"
        fill
      />
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="uppercase sm:text-xl md:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          LetBefound - kilka słów o nas
        </h2>
        <motion.div
          viewport={{ once: true }}
          whileInView={
            isMobile ? { x: 0, opacity: 1 } : { x: [-300, 0], opacity: [0, 1] }
          }
          transition={isMobile ? { duration: 0 } : { duration: 1 }}
          className="lg:grid lg:grid-cols-2 mt-16"
        >
          <div>
            <p
              className="text-justify text-xs sm:text-sm md:text-base"
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              W LetBeFound łączymy pasję z wiedzą i doświadczeniem, aby
              zrewolucjonizować{" "}
              <span className="text-orange-600">Twój biznes</span> w świecie
              cyfrowym. Nasza firma powstała z miłości do tworzenia,
              projektowania i strategii online. Jesteśmy dedykowanym zespołem,
              który dąży do tego, by{" "}
              <span className="text-orange-600">Twoja firma</span> osiągnęła
              najwyższe cele w przestrzeni internetowej.
            </p>
            <p
              className="text-justify text-xs sm:text-sm md:text-base mt-4"
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Od momentu założenia LetBeFound, nasza podróż była pełna wyzwań,
              innowacji i wzrostu. Pomogliśmy już wielu firmom o różnej skali
              odnaleźć swoje miejsce w wirtualnym świecie, budując dynamiczne
              strony internetowe i stosując skuteczne strategie online. Z każdym
              projektem uczymy się, rozwijamy i doskonalimy nasze umiejętności,
              aby być zawsze na czele zmieniających się trendów.
            </p>
            <div className="mt-14 xl:grid xl:grid-cols-2 xl:grid-rows-2">
              {data.map((i) => (
                <_AboutUsTile
                  key={i.paragraph}
                  icon={i.icon}
                  paragraph={i.paragraph}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

type _AboutUsTileProps = {
  icon: ReactNode;
  paragraph: string;
};

const _AboutUsTile: FC<_AboutUsTileProps> = (props) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="flex items-center mt-10 xl:mt-0"
      >
        <div
          className="w-24 h-24 rounded-full flex justify-center items-center shrink-0 bg-grayBlue"
          style={{
            boxShadow: "0px 0px 10px 10px #090D19",
          }}
        >
          {props.icon}
        </div>
        <p className="text-xs sm:text-sm p-5">{props.paragraph}</p>
      </motion.div>
    </>
  );
};
