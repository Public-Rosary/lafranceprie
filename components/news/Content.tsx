import React from "react";

interface Props {
  content: React.ReactNode;
};

const Content = ({ content }: Props) => (
  <div style={{ display: "flex", direction: "column", alignItems: "center", justifyItems:"center" }}>
    {content}
  </div>
);

export default Content;