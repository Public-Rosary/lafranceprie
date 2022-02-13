/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

const HowToBeginARosaryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie - J’organise un chapelet public</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/organiser-un-chapelet"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl md:my-8 lg:my-12 xl:my-12">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              J’organise un chapelet public
            </h1>
          </div>

          <div className="xl:grid xl:grid-cols-3 my-12 lg:my-24">
            <div className="xl:col-span-2 xl:row-span-3 prose mx-auto p-4 text-justify lg:prose-lg">
              <h3>Pourquoi organiser un chapelet public ?</h3>
              <ul>
                <li>
                  je ne trouve pas de point à proximité de chez moi sur la
                  carte.
                </li>
                <li>
                  toutes les villes, villages et quartiers sont des espaces
                  publics qui attendent leur chapelet !
                </li>
                <li>
                  en public : pour retrouver l’espérance au milieu de la crise
                  actuelle
                </li>
              </ul>

              <h3>Où organiser mon chapelet ?</h3>
              <ul>
                <li>au plus près de chez moi.</li>
                <li>
                  devant une église, un calvaire, une statue (en extérieur), une
                  chapelle ou un lieu catholique similaire.
                </li>
                <li>itinérant entre deux lieux cités ci-dessus.</li>
                <li>
                  je veille à choisir un lieu qui ne mette pas en danger les
                  participants et qui ne gêne pas l’ordre public.
                </li>
              </ul>

              <h3>Avec qui ?</h3>
              <ul>
                <li>
                  mes amis, mes voisins, les paroissiens que je connais, toutes
                  les personnes en quête d'espérance autour de moi
                </li>
                <li>
                  je peux l’organiser même si je ne connais personne pour venir
                  prier avec moi dans ce lieu. La Vierge fera le reste.
                </li>
                <li>
                  en voyant le point sur la carte, d’autres pourront aussi venir
                  vous rejoindre.
                </li>
              </ul>

              <h3>
                A quoi je m’engage en inscrivant un nouveau lieu de chapelet ?
              </h3>
              <ul>
                <li>
                  à respecter et faire respecter TOUT ce qui figure dans la{" "}
                  <Link href="/charte">Charte La France prie</Link> sur mon lieu
                  de chapelet.
                </li>
                <li>
                  à veiller à accorder l’heure de mon chapelet avec les horaires
                  paroissiaux (ex. : ne pas proposer un chapelet sur le parvis à
                  l’heure de la messe mais plutôt avant ou après…)
                </li>
                <li>
                  à tenir informés les bénévoles de toutes modifications /
                  absences / suppressions qui concernent ce lieu via le
                  formulaire afin que cela soit reporté sur la carte.
                </li>
              </ul>
            </div>
            <div className="xl:col-span-1 xl:sticky xl:top-10 md:mx-auto max-w-[48rem]">
            <div className="rounded bg-indigo-50 m-2 p-2 text-center border-2 border-indigo-100">
              <h3 className="my-4 text-2xl font-bold">
                Prêt(e) à ajouter votre chapelet sur&nbsp;la&nbsp;carte ?
              </h3>
              <p className="m-2 text-sm text-gray-500">
                Chaque formulaire est vérifié par un bénévole qui place le point
                sur la carte, le temps de temps de traitement dépend de leurs
                disponibilités, de quelques minutes à quelques heures. Merci de
                votre compréhension.
              </p>
              <p className="m-2 text-lg text-gray-500">
                Choisissez le bon formulaire en fonction de votre
                situation&nbsp;:
              </p>
              <div className="m-4 inline-flex rounded-md shadow">
                <a
                  href="https://forms.gle/2VbxqYAATKeK7oKG9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Chapelet tous les mercredis
                </a>
              </div>

              <div className="m-4 inline-flex rounded-md shadow">
                <a
                  href="https://forms.gle/ERd7noKgS8apHk2q7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Chapelet un autre jour de&nbsp;la&nbsp;semaine
                </a>
              </div>
            </div>
            <div className="rounded m-2 p-2 text-center border-2 border-indigo-100">
              <h3 className="my-4 text-xl font-bold">
                IMPORTANT
              </h3>
              <p className="m-2 md:text-lg text-gray-500 text-justify p-2">
                <ul className="list-disc list-inside">
                  <li className="m-2">Avant d'ajouter un nouveau chapelet, merci de vérifier sur la carte qu'il n'y est pas déjà.</li>
                  <li className="m-2">Il n'est pas nécessaire de réinscrire les chapelets chaque semaine.</li>
                  <li className="m-2">Le même formulaire permet de créer, modifier ou supprimer un lieu de chapelet.</li>
                  <li className="m-2">Merci de prendre soin de bien répondre aux questions pour permettre aux bénévoles de traiter au mieux votre demande.</li>
                </ul>
              </p>
            </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default HowToBeginARosaryPage;
