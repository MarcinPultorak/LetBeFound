import HeaderSimple from "@/components/feature/Header/HeaderSimple";
import { fetchArticles } from "../../services/strapi";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

interface ArticleChild {
  text: string;
  bold: boolean;
}

interface ArticleBlock {
  type: string;
  children: ArticleChild[];
}

interface Article {
  id: number;
  title: string;
  slug: string;
  shortDesc?: string;
  article: ArticleBlock[];
  image: {
    url: string;
    formats: any;
  };
}

const renderArticleContent = (articleContent: ArticleBlock[]) => {
  if (!articleContent || !Array.isArray(articleContent)) return null;

  return articleContent.map((block: ArticleBlock, index: number) => {
    if (block.type === "paragraph") {
      return (
        <p key={index} className="mb-4">
          {block.children.map((child: ArticleChild, i: number) => (
            <Fragment key={i}>
              {child.bold ? <strong>{child.text}</strong> : child.text}
            </Fragment>
          ))}
        </p>
      );
    }
    return null;
  });
};

const BlogArticle = ({ article }: { article: Article }) => {
  if (!article) {
    return <p>Artykuł nie został znaleziony</p>;
  }

  return (
    <section className=" bg-grayBlue px-5 sm:px-10 pt-5 pb-10 sm:pb-20">
      <HeaderSimple />
      <Image
        src={article.image.url}
        alt={article.title}
        width={800}
        height={400}
        className="w-full max-w-5xl max-h-80 object-cover object-top place-self-center mt-5 sm:mt-10"
      />
      <h1 className="place-self-center uppercase max-w-5xl text-base sm:text-xl lg:text-2xl text-center font-bold tracking-[.15em] mt-5 sm:mt-10">
        {article.title}
      </h1>
      <div className="flex flex-col mt-5 sm:mt-10 place-self-center">
        <div className="max-w-5xl text-xs sm:text-sm md:text-base">
          {renderArticleContent(article.article)}
        </div>
        <Link
          href={"/blog"}
          className="text-xs sm:text-sm md:text-base uppercase hover:text-orange-600 underline underline-offset-4 flex place-content-end mt-5"
        >
          Wróć do listy artykułów
        </Link>
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Article[] = await fetchArticles();
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles: Article[] = await fetchArticles();
  const article = articles.find((a) => a.slug === params?.slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: { article },
    revalidate: 60,
  };
};

export default BlogArticle;
