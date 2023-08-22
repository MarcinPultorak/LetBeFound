import { FC, ReactNode } from "react";

const AboutUs: FC = () => {
  const data = [
    {
      icon: <img className="w-8 md:w-12 lg:w-16" src="/images/icon-bulb.svg" />,
      paragraph:
        "Wierzymy w twórczość i nowatorskie podejście. Nasze projekty są pełne świeżości i kreatywności, aby wyróżnić Cię na tle konkurencji.",
    },
    {
      icon: <img className="w-8 md:w-12 lg:w-16" src="/images/icon-bolt.svg" />,
      paragraph:
        "Każdy członek zespołu LetBeFound ma w sobie ogromną pasję do tego, co robi. Ta energia jest wkomponowana w każdy projekt, który tworzymy.",
    },
    {
      icon: (
        <img className="w-8 md:w-12 lg:w-16" src="/images/icon-users.svg" />
      ),
      paragraph:
        "Tworzymy relacje oparte na zaufaniu i partnerstwie. Twoje cele stają się naszymi celami, a wspólnie pracujemy nad osiągnięciem sukcesu.",
    },
    {
      icon: (
        <img className="w-8 md:w-12 lg:w-16" src="/images/icon-arrows-au.svg" />
      ),
      paragraph:
        "Jako zespół tworzący strony internetowe, wiemy, że to nie tylko kwestia estetyki. Nasze strony są responsywne, zoptymalizowane pod kątem SEO i skupione na konwersjach.",
    },
  ];

  return (
    <section
      className="pt-20 z-20 relative"
      style={{
        backgroundImage: "url('/images/about-us.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#090D19",
      }}
    >
      <div className="max-w-screen-2xl mx-auto sm:px-0 px-5">
        <h2 className="uppercase sm:text-xl md:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          LetBefound - kilka słów o nas
        </h2>
        {/* <div className="flex mt-20 justify-between px-32"> */}
        <div className="grid lg:grid-cols-2 lg:grid-flow-col justify-items-center mt-20 grid-flow-row lg:gap-0 gap-10">
          <p
            className="max-w-sm text-justify text-xs sm:text-sm md:text-base"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            W LetBeFound łączymy pasję z wiedzą i doświadczeniem, aby
            zrewolucjonizować Twój biznes w świecie cyfrowym. Nasza firma
            powstała z miłości do tworzenia, projektowania i strategii online.
            Jesteśmy dedykowanym zespołem, który dąży do tego, by Twoja firma
            osiągnęła najwyższe cele w przestrzeni internetowej.
          </p>
          <p
            className="max-w-sm text-justify text-xs sm:text-sm md:text-base lg:mt-0"
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
        </div>
      </div>
      <div className="mt-16">
        <img className="w-28 md:w-36 mx-auto" src="/images/logo-aboutus.svg" />
      </div>
      <div
        className="pb-32"
        style={{
          backgroundColor: "rgba(8, 12, 25, 0.70)",
          boxShadow: "0px -1px 15px 0px #52525B",
        }}
      >
        <div className="px-5 sm:px-10">
          <div className="lg:grid grid-cols-5 gap-10 max-w-screen-2xl mx-auto">
            <div className="block lg:hidden ">
              <img
                className="mx-auto w-28 md:w-36"
                src="/images/logo-aboutus-mirror.svg"
              />
            </div>
            <_AboutUsTile icon={data[0].icon} paragraph={data[0].paragraph} />
            <_AboutUsTile icon={data[1].icon} paragraph={data[1].paragraph} />
            <div className="hidden lg:block">
              <img
                className="mx-auto w-28 md:w-36"
                src="/images/logo-aboutus-mirror.svg"
              />
            </div>
            <_AboutUsTile icon={data[2].icon} paragraph={data[2].paragraph} />
            <_AboutUsTile icon={data[3].icon} paragraph={data[3].paragraph} />
          </div>
        </div>
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
    <div className="flex flex-row lg:flex-col items-center lg:-mt-20 justify-center lg:justify-normal mt-16">
      <div
        className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full flex justify-center items-center shrink-0"
        style={{
          backgroundColor: "#182132",
          boxShadow: "0px 0px 10px 10px #090D19",
        }}
      >
        {props.icon}
      </div>
      <p className="lg:mt-10 text-center max-w-xs sm:max-w-md text-xs sm:text-sm md:text-base px-4 lg:px-0">
        {props.paragraph}
      </p>
    </div>
  );
};
