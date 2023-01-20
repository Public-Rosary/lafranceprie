import React from "react";

interface Props {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  ogImage: {
    url: string;
  };
}

const Header = ({ title, description, date, ogImage }: Props) => (
  <div style={{ display: "flex", direction: "column", alignItems: "center", justifyItems:"center" }}>
    <p style={{ color: "#6F6F6F", fontWeight: "300", textAlign: "center" }}>
      Published on {date}
    </p>

    <h1 style={{ color: "#101010", fontWeight: "600", textAlign: "center" }}>
      {title}
    </h1>

    <p style={{ color: "#6F6F6F", fontWeight: "300", textAlign: "center" }}>
      {description}
    </p>

    <img
      src={ogImage.url}
      alt="Post image"
      style={{ width: "100%", height: 400, borderRadius: 5, objectFit: "cover" }}
      lazy="loading"
    />
  </div>
);

export default Header;
