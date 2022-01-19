import type { NextPage } from "next";

const HomeForm: NextPage = () => {
  return (
    <div className="text-center pb-16">
      <span className="text-xl tracking-tight text-gray-600 md:text-2xl lg:text-3xl ">
        Vous ne trouvez rien à coté de chez vous ? 
      </span>{" "}
      <span className="text-xl tracking-tight text-indigo-600 md:text-2xl lg:text-3xl">
        Organisez-le !
      </span>

      <div className="mt-8 flex justify-center">
        <div className="rounded-md shadow">
          <a
            href="https://forms.gle/2VbxqYAATKeK7oKG9"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Inscrire mon chapelet sur la carte
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
