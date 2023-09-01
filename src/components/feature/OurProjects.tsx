import { FC, useState } from "react";
import Image from "next/image";
import { animate, motion } from "framer-motion";

const OurProjects: FC = () => {
  const carouselData = [
    {
      title: "Hire My Desk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et fermentum neque, a euismod lectus. Quisque orci quam, semper in nunc ut, feugiat finibus diam. Nulla tincidunt sapien vel nunc lao",
      image: "hire-my-desk",
      link: "#",
    },
    {
      title: "Dav-Code",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et fermentum neque, a euismod lectus. Quisque orci quam, semper in nunc ut, feugiat finibus diam. Nulla tincidunt sapien vel nunc lao",
      image: "dav-code",
      link: "#",
    },
    {
      title: "FHK Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et fermentum neque, a euismod lectus. Quisque orci quam, semper in nunc ut, feugiat finibus diam. Nulla tincidunt sapien vel nunc lao",
      image: "fhk-tech",
      link: "#",
    },
  ];

  const [changeSlide, setChangeSlide] = useState<number>(0);

  const nextSlide = () => {
    if (changeSlide < carouselData.length - 1) {
      setChangeSlide(changeSlide + 1);
    } else if (changeSlide == carouselData.length - 1) {
      setChangeSlide(0);
    }
    console.log(changeSlide);
  };

  const prevSlide = () => {
    if (changeSlide == 0) {
      setChangeSlide(carouselData.length - 1);
    } else if (changeSlide <= carouselData.length - 1) {
      setChangeSlide(changeSlide - 1);
    }
    console.log(changeSlide);
  };

  return (
    <section className="bg-grayBlue py-20 px-10">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="uppercase sm:text-xl md:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          Nasze realizacje
        </h2>
        <img
          src="/images/decor-top.svg"
          alt=""
          className="mt-10 lg:mt-0 w-24"
        />

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-12 mt-20">
          <div className="max-w-screen-md mt-8 lg:mt-0">
            <div className="flex flex-col items-center space-y-6 max-w-xl ">
              <h2 className="text-sm md:text-base lg:text-lg text-orange-600 tracking-[.15em] underline uppercase">
                {carouselData[changeSlide].title}
              </h2>
              <p className="text-justify text-xs sm:text-sm md:text-base">
                {carouselData[changeSlide].description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <a
                href={carouselData[changeSlide].link}
                className="underline text-orange-600"
              >
                Zobacz Online
              </a>
              <div className="space-x-1 ">
                <button onClick={prevSlide} className="w-8 h-8 bg-slate-300">
                  <img
                    src="/images/icon-arrow-left.svg"
                    alt=""
                    className="mx-auto"
                  />
                </button>
                <button onClick={nextSlide} className="w-8 h-8 bg-sky-800">
                  <img
                    src="/images/icon-arrow-right.svg"
                    alt=""
                    className="mx-auto"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-2xl w-full">
            <motion.div>
              <Image
                className="rounded-xl max-h-80 mx-auto"
                src={`/images/${carouselData[changeSlide].image}.png`}
                alt="asdasdasd"
                width={672}
                height={320}
              />
            </motion.div>
          </div>
        </div>
        <img
          src="/images/decor-bottom.svg"
          alt=""
          className="ml-auto mt-20 w-24"
        />
      </div>
    </section>
  );
};

export default OurProjects;
