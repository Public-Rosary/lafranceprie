import React from "react";

interface Props {
  content: React.ReactNode;
};

const Content = ({ content }: Props) => (
  <div >
    {content}
  </div>
);

export default Content;