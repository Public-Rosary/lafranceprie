import React from "react";
import NextLink from "next/link";

import { Article } from "../../lib/types";

interface Props {
  article: Article;
}

const ArticleItem = ({ article }: Props) => (
  <>
    <img
      src={article.ogImage.url}
      alt="Image for article"
      style={{
        width: "100%",
        height: 250,
        borderRadius: 5,
        objectFit: "cover",
      }}
      lazy="loading"
    />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",

      }}

      className="col-span-2"
    >
      <NextLink as={`/actualites/${article.slug}`} href="/actualites/[slug]">
      <span className="font-bold">
        <a href="/actualites">{article.title}</a>
        </span>
      </NextLink>

      <p style={{ color: "#6F6F6F, fontSize: 16, fontWeight: 300 }}>" }}>
        {article.description}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <p style={{ color: "#6F6F6F, fontSize: 16, fontWeight: 300 }}>" }}>
          {article.timeReading.text} • {article.date}
        </p>
      </div>

      <NextLink as={`/actualites/${article.slug}`} href="/actualites/[slug]">
      <span className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
          Lire l&#39;article
          </span>
      </NextLink>
    </div>
  </>
);

export default ArticleItem;
