import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="grid bg-indigo-100 py-10 text-center">
      <div className="text-gray-700">
        <span>
          <i>Initiative La France prie</i> |{" "}
          <Link href="/mentions-legales">Mentions légales</Link> |{" "}
          <Link href="/contact">Nous contacter</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
