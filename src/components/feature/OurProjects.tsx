import { FC, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const OurProjects: FC = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

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

  const carouselHandler = (newState: number) => {
    let test = changeSlide + newState;

    if (test > carouselData.length - 1) {
      setChangeSlide(0);
    } else if (test < 0) {
      setChangeSlide(carouselData.length - 1);
    } else {
      setChangeSlide((prev) => prev + newState);
    }
  };

  return (
    <section className="bg-grayBlue py-10 md:py-20 px-5 sm:px-10">
      <div className="max-w-screen-2xl mx-auto relative">
        <h2 className="uppercase sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          Nasze realizacje
        </h2>
        <img
          src="/images/decor-top.svg"
          alt=""
          className="mt-10 lg:mt-0 w-24"
        />
        <div className="relative h-80 w-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={changeSlide}
              variants={variants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-0 inset-x-1/2 w-full -translate-x-1/2 flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-12"
            >
              <div className="max-w-screen-md mt-8 lg:mt-0">
                <div className="flex flex-col items-center space-y-6 max-w-xl">
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
                    Zobacz online
                  </a>
                </div>
              </div>
              <div className="max-w-2xl w-full">
                <Image
                  className="rounded-xl max-h-80 mx-auto"
                  src={`/images/${carouselData[changeSlide].image}.png`}
                  alt="asdasdasd"
                  width={672}
                  height={320}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-1 mt-10">
          <button
            onClick={() => carouselHandler(-1)}
            className="w-8 h-8 bg-slate-300"
          >
            <img src="/images/icon-arrow-left.svg" alt="" className="mx-auto" />
          </button>
          <button
            onClick={() => carouselHandler(1)}
            className="w-8 h-8 bg-sky-800"
          >
            <img
              src="/images/icon-arrow-right.svg"
              alt=""
              className="mx-auto"
            />
          </button>
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
