import { FC, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import cx from "classnames";
import Link from "next/link";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const OurProjects: FC = () => {
  const carouselData = [
    {
      title: "Hire My Desk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et fermentum neque, a euismod lectus. Quisque orci quam, semper in nunc ut, feugiat finibus diam. Nulla tincidunt sapien vel nunc lao",
      image: "hire-my-desk",
      link: "https://www.hiremydesk.com/",
    },
    {
      title: "Dav-Code",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et fermentum neque, a euismod lectus. Quisque orci quam, semper in nunc ut, feugiat finibus diam. Nulla tincidunt sapien vel nunc lao",
      image: "dav-code",
      link: "https://www.dav-code.pl/",
    },
    {
      title: "FHK Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et fermentum neque, a euismod lectus. Quisque orci quam, semper in nunc ut, feugiat finibus diam. Nulla tincidunt sapien vel nunc lao",
      image: "fhk-tech",
      link: "https://www.fhktechnology.com/",
    },
  ];

  const [[changeSlide, direction], setChangeSlide] = useState([0, 0]);

  const imageIndex = wrap(0, carouselData.length, changeSlide);

  const paginate = (newDirection: number) => {
    setChangeSlide([changeSlide + newDirection, newDirection]);
  };

  return (
    <section
      id={"Nasze realizacje"}
      className="bg-grayBlue py-10 md:py-20 px-5 sm:px-10"
    >
      <div className="max-w-screen-2xl mx-auto ">
        <h2 className="uppercase sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          Nasze realizacje
        </h2>
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-96 mt-16">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={changeSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full -translate-x-1/2 flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-12"
            >
              <div className="max-w-screen-md mt-8 lg:mt-0">
                <div className="flex flex-col items-center space-y-6 max-w-xl">
                  <h2 className="text-sm md:text-base lg:text-lg text-orange-600 tracking-[.15em] underline uppercase">
                    {carouselData[imageIndex].title}
                  </h2>
                  <p className="text-justify text-xs sm:text-sm md:text-base">
                    {carouselData[imageIndex].description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <a
                    href={carouselData[imageIndex].link}
                    className="underline text-orange-600"
                    target="blank"
                  >
                    Zobacz online
                  </a>
                </div>
              </div>
              <div className="max-w-2xl w-full">
                <Link href={carouselData[imageIndex].link} target="blank">
                  <Image
                    className="rounded-xl mx-auto"
                    src={`/images/${carouselData[imageIndex].image}.png`}
                    alt="project-screen-shot"
                    width={672}
                    height={320}
                  />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-2 mt-10">
          <button onClick={() => paginate(-1)} className="w-8 h-8  rounded-sm">
            <img
              src="/images/icon-arrow-left.svg"
              alt="arrow-left"
              className="mx-auto"
            />
          </button>
          <div className="flex space-x-2 items-center">
            {carouselData.map((item, i) => (
              <div
                key={item.title}
                className={cx(
                  "w-2 h-2 rounded-full",
                  i == imageIndex ? "bg-orange-600" : "bg-slate-300"
                )}
              />
            ))}
          </div>
          <button onClick={() => paginate(1)} className="w-8 h-8  rounded-sm">
            <img
              src="/images/icon-arrow-right.svg"
              alt="arrow-right"
              className="mx-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
