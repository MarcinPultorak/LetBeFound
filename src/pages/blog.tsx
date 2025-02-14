import HeaderSimple from "@/components/feature/Header/HeaderSimple";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchArticles } from "../services/strapi";

const BlogPage: FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };
    loadArticles();
  }, []);

  return (
    <section className="flex-grow bg-grayBlue px-5 sm:px-10 pt-5 pb-10 sm:pb-20">
      <HeaderSimple />
      <div className="max-w-screen-2xl mx-auto mt-10 ">
        <h1 className="uppercase text-base sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
          LetBeFound - Blog
        </h1>
        <div className="mt-0 md:mt-10">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div
                className="flex flex-col md:flex-row border-b pb-10 pt-10"
                key={article.id}
              >
                <div className="flex flex-shrink-0 self-center md:mr-5">
                  <Image
                    src={article.image.url}
                    alt={article.title}
                    width={300}
                    height={200}
                  />
                </div>
                <div className="max-w-3xl text-justify">
                  <h2 className="uppercase text-lg font-bold tracking-[.15em] mt-5 md:mt-0 text-center">
                    {article.title}
                  </h2>
                  <p className="max-w-5xl text-xs sm:text-sm md:text-base mt-5">
                    {article.shortDesc}
                  </p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block mt-5 text-sm uppercase hover:text-orange-600 underline underline-offset-4"
                  >
                    Sprawdź więcej...
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-10">Ładowanie artykułów...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

// import HeaderSimple from "@/components/feature/Header/HeaderSimple";
// import { FC } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const BlogPage: FC = () => {
//   const articles = [
//     {
//       title: "Jak stworzyć skuteczną stronę internetową dla firmy?",
//       description:
//         "Jak stworzyć skuteczną stronę internetową dla firmy? 7 kluczowych zasad Tworzenie stron internetowych dla firm to dziś nie tylko kwestia estetyki, ale przede wszystkim skuteczności. Dobra strona www powinna przyciągać klientów, budować wizerunek marki i generować sprzedaż. Jak to osiągnąć? Oto 7 kluczowych zasad!",
//       image: "hexagon-1",
//       link: "#",
//     },
//   ];

//   return (
//     <section className="flex-grow bg-grayBlue px-5 sm:px-10 pt-5 pb-10 sm:pb-20">
//       <HeaderSimple />
//       <div className="max-w-screen-2xl mx-auto">
//         <h1 className="uppercase text-base sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
//           LetBeFound - Blog
//         </h1>
//         <div className="mt-20">
//           {articles.map((article) => (
//             <div className="flex  border-b pb-10 pt-10" key={article.title}>
//               <div className="mr-10 h-full">
//                 <Image
//                   className=""
//                   src={`/images/${article.image}.png`}
//                   alt={"foto"}
//                   width={300}
//                   height={300}
//                 />
//               </div>
//               <div className="max-w-3xl text-justify">
//                 <h2 className="uppercase text-base sm:text-lg lg:text-xl font-bold tracking-[.15em]">
//                   {article.title}
//                 </h2>
//                 <p className="mt-5">{article.description}</p>
//                 <Link
//                   href={article.link}
//                   className="block mt-5 text-xs sm:text-sm md:text-base uppercase hover:text-orange-600 underline underline-offset-4"
//                 >
//                   Sprawdź więcej...
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogPage;
