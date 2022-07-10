import { ReactNode } from 'react';
import { NextPage } from "next";

import Menu from "../components/menu";
import Footer from "../components/footer";

type Props = {
  children: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
