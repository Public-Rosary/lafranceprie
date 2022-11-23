import React from "react";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Article from "../../components/news/Article";
import { api } from "../../lib/news";
import { NewsArticle } from "../../lib/types";
import MDXComponents from "../../components/MDXComponents";
import Head from "next/head";
import Layout from "../../components/layout";

interface Props {
  readingTime: {
    text: string;
  };
  frontMatter: {
    title: string;
    description: string;
    date: string;
    content: string;
    ogImage: {
      url: string;
    };
  };
  slug: string;
  source: any;
  tags: Array<string>;
};
type Params = {
    params: {
      slug: string;
      timeReading: {
        text: string;
      };
    };
  };
  
  export async function getStaticProps({ params }: Params) {
    const { content, data } = api.getRawArticleBySlug(params.slug);
    const mdxSource = await serialize(content, {
        parseFrontmatter: true
    });
    const tags = data.tags ?? [];
    return {
      props: {
        slug: params.slug,
        readingTime: readingTime(content),
        source: mdxSource,
        frontMatter: data,
        tags,
      },
    };
  }
  
  export async function getStaticPaths() {
    const articles: Array<NewsArticle> = api.getAllArticles(["slug"]);
    return {
      paths: articles.map((articles) => {
        return {
          params: {
            slug: articles.slug,
          },
        };
      }),
      fallback: false,
    };
  };

const Index = ({ readingTime, frontMatter, slug, source }: Props) => {

  return (
    <div>
      <Head>
      <title>La France prie - {frontMatter.title}</title>
      <meta
        name="description"
        content={frontMatter.description}
      />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:url"
        content={`https://www.lafranceprie.org/actualites${slug}`}
      ></meta>
    </Head>
          <Layout>
        <main className="mx-auto my-8 max-w-7xl md:my-8 lg:my-12 xl:my-12">

      <Article
        readingTime={readingTime}
        title={frontMatter.title}
        description={frontMatter.description}
        date={frontMatter.date}
        content={<MDXRemote {...source} components={MDXComponents} />}
        ogImage={frontMatter.ogImage}
        slug={slug}
      />
      </main>
    </Layout>
    </div>
  );
};

export default Index;