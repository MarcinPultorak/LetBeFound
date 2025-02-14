import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cx from "classnames";
import { fetchPortfolioItems } from "../../services/strapi";

interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  link: string;
  image: {
    url: string;
    formats: {
      large: { url: string };
      medium: { url: string };
      small: { url: string };
      thumbnail: { url: string };
    };
  };
}

const OurProjects: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPortfolioItems();
      setPortfolioItems(data);
    };

    loadData();
  }, []);

  const updateSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id={"Nasze realizacje"}
      className="bg-grayBlue py-10 md:py-20 px-5 sm:px-10"
      style={{
        boxShadow: "0px 4px 40px 0px #090D19",
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="uppercase sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          Nasze realizacje
        </h2>

        <Carousel
          selectedItem={currentSlide}
          onChange={updateSlide}
          infiniteLoop
          showIndicators={false}
          showThumbs={false}
          className="mt-10 max-w-3xl mx-auto"
        >
          {portfolioItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              target="_blank"
              aria-label="Sprawdź Online"
            >
              <div>
                <Image
                  src={item.image.url}
                  alt={item.title}
                  width={1366}
                  height={768}
                />
              </div>
            </Link>
          ))}
        </Carousel>
        <div className="flex space-x-3 w-full justify-center mt-5">
          {portfolioItems.map((_, index) => (
            <button
              title={`slide-${index}`}
              key={index}
              className={cx(
                "h-3 w-3 rounded-full",
                currentSlide == index ? "bg-orange-600" : "bg-slate-400"
              )}
              onClick={() => updateSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;

// import { FC, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import cx from "classnames";

// const OurProjects: FC = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);

//   const carouselData = [
//     {
//       image: "agaricus",
//       link: "https://www.agaricus.pl/",
//     },
//     {
//       image: "fhu-plus",
//       link: "https://www.fhuplus.pl/",
//     },
//     {
//       image: "bialy-bukiet",
//       link: "https://bialy-bukiet.vercel.app/",
//     },
//     {
//       image: "hire-my-desk",
//       link: "https://www.hiremydesk.com/",
//     },
//     {
//       image: "dav-code",
//       link: "https://www.dav-code.pl/",
//     },
//     {
//       image: "fhk-tech",
//       link: "https://www.fhktechnology.com/",
//     },
//   ];

//   const updateSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section
//       id={"Nasze realizacje"}
//       className="bg-grayBlue py-10 md:py-20 px-5 sm:px-10"
//       style={{
//         boxShadow: "0px 4px 40px 0px #090D19",
//       }}
//     >
//       <div className="max-w-screen-2xl mx-auto">
//         <h2 className="uppercase sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
//           Nasze realizacje
//         </h2>

//         <Carousel
//           selectedItem={currentSlide}
//           onChange={updateSlide}
//           infiniteLoop
//           showIndicators={false}
//           showThumbs={false}
//           className="mt-10 max-w-3xl mx-auto"
//         >
//           {carouselData.map((item) => (
//             <Link
//               href={item.link}
//               key={item.image}
//               target="_blank"
//               aria-label="Sprawdź Online"
//             >
//               <div>
//                 <Image
//                   src={`/images/${item.image}.png`}
//                   alt=""
//                   width={1366}
//                   height={768}
//                 ></Image>
//               </div>
//             </Link>
//           ))}
//         </Carousel>
//         <div className="flex space-x-3 w-full justify-center mt-5">
//           {carouselData.map((_, index) => (
//             <button
//               title={`slide-${index}`}
//               key={index}
//               className={cx(
//                 "h-3 w-3 rounded-full",
//                 currentSlide == index ? "bg-orange-600" : "bg-slate-400"
//               )}
//               onClick={() => updateSlide(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProjects;
