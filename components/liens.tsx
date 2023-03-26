import type { NextPage } from "next";
import Link from "next/link";

const Liens: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:p-16">
      <div className="text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl">
          Initiatives qui nous sont chères
        </h3>
      </div>
      <div className="mt-8 grid md:grid-cols-1">
        <div className="text-lg text-gray-500 md:p-4">
          <ul className="list-inside list-disc">
            <li className="hover:text-black hover:underline">
              <Link href="https://vavisprie.org/">
                Decouvrez &quot;Va, vis, prie&quot;, qui vise à recolter 223 000 chapelets et 300 messes entre l&apos;Annonciation et l&apos;Assomption,  en raison des 223 000 IVG commis par an.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Liens;
