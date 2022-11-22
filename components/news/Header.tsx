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
  <div>
  <div style={{ display: "flex", direction: "row", alignItems: "start", justifyItems:"center" }}>
    

    <h1 style={{ color: "#101010", fontWeight: "600", textAlign: "center" }}>
      {title}
    </h1>

    </div>
      <div style={{ display: "flex", direction: "row", alignItems: "start", justifyItems:"center" }}>

    <p style={{ color: "#6F6F6F", fontWeight: "300", textAlign: "center" }}>
      {description}
    </p>

    <img
      src={ogImage.url}
      alt="Post image"
      style={{ width: "100%", height: 400, borderRadius: 5, objectFit: "cover" }}
      lazy="loading"
    />
    
    <p style={{ color: "#6F6F6F", fontWeight: "300", textAlign: "center" }}>
      Publié  le {date}
    </p>
  </div>
  </div>
);

export default Header;
