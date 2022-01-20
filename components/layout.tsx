import { NextPage } from "next";

import Menu from "../components/menu";
import Footer from "../components/footer";

const Layout: NextPage = ({ children }) => {
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
