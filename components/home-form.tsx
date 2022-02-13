import type { NextPage } from "next";
import Link from "next/link";

const HomeForm: NextPage = () => {
  return (
    <div className="my-16 text-center" id="form">
      <span className="text-xl tracking-tight text-gray-600 md:text-2xl lg:text-3xl">
        Vous ne trouvez rien à coté de chez vous ?
      </span>{" "}
      <span className="text-xl tracking-tight text-indigo-600 md:text-2xl lg:text-3xl">
        Organisez-le !
      </span>
      <div className="mt-8 flex justify-center">
        <div className="rounded-md shadow">
          <Link href="/organiser-un-chapelet" passHref>
            <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
              Inscrire mon chapelet sur la carte
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
