import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cx from "classnames";

const OurProjects: FC = () => {
  const carouselData = [
    {
      image: "hire-my-desk",
      link: "https://www.hiremydesk.com/",
    },
    {
      image: "dav-code",
      link: "https://www.dav-code.pl/",
    },
    {
      image: "fhk-tech",
      link: "https://www.fhktechnology.com/",
    },
  ];

  return (
    <section
      id={"Nasze realizacje"}
      className="bg-grayBlue py-10 md:py-20 px-5 sm:px-10"
    >
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="uppercase sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          Nasze realizacje
        </h2>

        <Carousel
          infiniteLoop
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <div
                className={cx(
                  "w-3 h-3 rounded-full inline-block mx-1",
                  isSelected ? "bg-orange-600" : "bg-slate-400"
                )}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
              ></div>
            );
          }}
          className="mt-10 max-w-3xl mx-auto"
        >
          {carouselData.map((item) => (
            <Link href={item.link} key={item.image}>
              <div>
                <Image
                  src={`/images/${item.image}.png`}
                  alt=""
                  width={1366}
                  height={768}
                ></Image>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OurProjects;
