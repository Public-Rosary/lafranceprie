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
        direction: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <NextLink as={`/actualites/${article.slug}`} href="/actualites/[slug]">
        <a href="/actualites">{article.title}</a>
      </NextLink>

      <p style={{ color: "#6F6F6F, fontSize: 16, fontWeight: 300 }}>" }}>
        {article.description}
      </p>

      <div
        style={{
          display: "flex",
          direction: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <p style={{ color: "#6F6F6F, fontSize: 16, fontWeight: 300 }}>" }}>
          {article.timeReading.text}
        </p>

        <p style={{ color: "#6F6F6F, fontSize: 16, fontWeight: 300 }}>" }}>•</p>
        <p style={{ color: "#6F6F6F, fontSize: 16, fontWeight: 300 }}>" }}>
          {article.date}
        </p>
      </div>

      <NextLink as={`/blog/${article.slug}`} href="/actualites/[slug]">
        <a href="/actualites" color="#6f6f6f">
          Lire l'article
        </a>
      </NextLink>
    </div>
  </>
);

export default ArticleItem;
