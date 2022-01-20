import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="grid text-center py-10 bg-indigo-100">
      <div className="text-gray-700">
        <span>
          Initiative La France prie - Initiatives de laïcs catholiques bénévoles
          | <Link href="/mentions-legales">Mentions légales</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
