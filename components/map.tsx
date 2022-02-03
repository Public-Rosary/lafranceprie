import type { InferGetStaticPropsType } from "next";
import { ExternalLinkIcon } from '@heroicons/react/solid'

import {
  getRosaryPlacesTotalCount,
  getRosaryPlacesCountByWeekday,
} from "../lib/google_maps/rosary_datasource";

const Map = ({
  total,
  folders,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div id="carte">
      <div className="text-center px-8 py-16 sm:p-16">
        <h3 className="text-2xl tracking-tight font-extrabold text-indigo-400 md:text-3xl lg:text-4xl">
          Déjà plus de {total} chapelets dans toute la France !
        </h3>
      </div>
      <div className="container mx-auto w-full pb-8 text-center">
        <span className="text-sm md:text-base text-gray-600">
          Cliquez sur un point de la carte pour voir le jour et l&apos;heure.
          <br />
          Si vous rencontrez une difficulté pour naviguer dans la carte, ouvrez
          la carte dans Maps avec{" "}
          <a
            className="text-blue-600"
            href="https://www.google.com/maps/d/viewer?mid=1RRHCUPF7ygW2cj4tRMbiKwSC9tAxXyXS"
          >
            ce lien <ExternalLinkIcon className="inline h-4 w-4" />
          </a>
        </span>
        
      </div>
      <div className="w-auto h-[448px] md:h-[704px] block bg-gray-100 mx-4">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1RRHCUPF7ygW2cj4tRMbiKwSC9tAxXyXS&ehbc=2E312F"
            className="block w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      <div className="text-center text-sm text-gray-600">
        (
        {folders
          .map<React.ReactNode>((folder) => (
            <span key={folder.name}>
              {folder.count + " chaque " + folder.name}
            </span>
          ))
          .reduce((prev, curr) => [prev, ", ", curr])}
        )
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const total = await getRosaryPlacesTotalCount();
  const roundedTotal = Math.floor(total / 10) * 10;
  return {
    props: {
      total: roundedTotal,
      folders: await getRosaryPlacesCountByWeekday(),
    },
  };
};

export default Map;
