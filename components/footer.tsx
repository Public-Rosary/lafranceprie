import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="grid bg-indigo-100 py-10 text-center">
      <div className="text-gray-700">
        <div className="m-4">
          <i>Initiative&nbsp;La&nbsp;France&nbsp;prie</i>
        </div>
        <div className="m-4">
          <Link href="/mentions-legales">Mentions&nbsp;légales</Link> |{" "}
          <Link href="/contact">Nous&nbsp;contacter</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
