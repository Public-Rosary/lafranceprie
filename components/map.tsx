import type { NextPage } from "next";

const Map: NextPage = () => {
  return (
    <div id="carte">
    <div className="text-center px-8 py-16 sm:p-16">
        <h3 className="text-2xl tracking-tight font-extrabold text-indigo-400 md:text-3xl lg:text-4xl ">
          Déjà plus de 1400 chapelets dans toute la France !
        </h3>
        <span className="text-gray-600">Cliquez sur un point de la carte pour voir le jour et l&apos;heure</span>
      </div>
    <div className="container mx-auto w-full h-[32rem] md:h-[48rem] pb-16">
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1RRHCUPF7ygW2cj4tRMbiKwSC9tAxXyXS&ehbc=2E312F"
        className="w-full h-full block"
      ></iframe>
    </div>
    </div>
  );
};

export default Map;
