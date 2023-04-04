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
      <div className="mt-8 grid grid-cols-5">
        <div className="col-span-2 p-4 text-lg font-bold sm:col-span-1 sm:text-right">
          
        <img
              className="h-56 w-full bg-[#ffffff] object-contain object-top sm:h-72 md:h-96 lg:h-full"
              src="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,q_auto/logo-vvp_njw4cn.png"
              alt="Image de Notre Dame de France"
              loading="lazy"
              srcSet="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_640,q_auto/logo-vvp_njw4cn 640w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_750,q_auto/logo-vvp_njw4cn 750w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_828,q_auto/logo-vvp_njw4cn 828w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_1080,q_auto/logo-vvp_njw4cn 1080w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_1200,q_auto/logo-vvp_njw4cn 1200w"
            />
        </div>
        <div className="text-lg text-gray-500 md:p-4 col-span-3 align-middle ">
                <Link href="https://vavisprie.org/" className="align-middle">
                  Decouvrez &quot;Va, vis, prie&quot;, qui vise à recolter 223 000 chapelets et 300 messes entre l&apos;Annonciation et l&apos;Assomption,  en raison des 223 000 IVG commis par an.
                </Link>
        </div>
      </div>
    </div>
  );
};

export default Liens;
