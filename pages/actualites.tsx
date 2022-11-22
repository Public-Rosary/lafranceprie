/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";
import ArticleItem from "../components/news/ArticleItem";
import { api } from "../lib/news";
import { NewsArticle } from "../lib/types";

export const getStaticProps = async () => {
  const articles: Array<NewsArticle> = api.getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "excerpt",
    "timeReading",
    "ogImage",
    "content",
  ]);
  return {
    props: { articles },
  };
};

interface Props {
  articles: Array<NewsArticle>;
};


const NewsPage: NextPage<Props> = ({ articles }: Props) => {
  return (
    <>
      <Head>
        <title>La France prie - Actualités</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/actualites"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl md:my-8 lg:my-12 xl:my-12">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Actualités
            </h1>
          </div>

          <div className="prose my-12 mx-auto p-4 text-justify lg:prose-lg">
            <p>
              eoau
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 divide-y gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {articles.map((article) => (
                  <ArticleItem key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default NewsPage;
