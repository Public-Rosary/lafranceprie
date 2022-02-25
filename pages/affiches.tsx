/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";

const posters = [
  {
    cloudinaryPublicId: "posters/Affiche_LFP-A4-M-A_TEK-DEF_dorna5",
    fileName: "affiche_lfp-a4-m-a_tek-def.pdf",
    imageAlt: "Affiche Variante 1",
    shortLink: "https://bit.ly/3BQ6edp",
  },
  {
    cloudinaryPublicId: "posters/Affiche_LeChapeletLaurencon_civap4",
    fileName: "affiche_lechapeletlaurencon.pdf",
    imageAlt: "Affiche Variante 2",
    shortLink: "https://bit.ly/3M2hlo7",
  },
  {
    cloudinaryPublicId: "posters/Affiche_LFP_A4_GHachette_l6vkrp",
    fileName: "affiche_lfp_a4_ghachette.pdf",
    imageAlt: "Affiche Variante 3",
    shortLink: "https://bit.ly/3t2SB6x",
  },
  {
    cloudinaryPublicId: "posters/Affiche_AF_LFP_A3_couleur_dgno7b",
    fileName: "affiche_af_lfp_a3_couleur.pdf",
    imageAlt: "Affiche Variante 4",
    shortLink: "https://bit.ly/36teww2",
  },
  {
    cloudinaryPublicId:
      "posters/Affiche_AF_LFP_AFFICHE_A4_noir_et_blanc_fwffjq",
    fileName: "affiche_af_lfp_affiche_a4_noir_et_blanc.pdf",
    imageAlt: "Affiche Variante 6",
    shortLink: "https://bit.ly/3IzePE1",
  },
];

const flyers = [
  {
    cloudinaryPublicId:
      "posters/Affiche_AF_LFP_FLYER_A5_couleur_2_poses_sur_un_A4_xmkcfn",
    fileName: "affiche_af_lfp_flyer_a5_couleur_2_poses_sur_un_a4.pdf",
    imageAlt: "Affiche Variante 5",
  },
  {
    cloudinaryPublicId:
      "posters/Affiche_AF_LFP_FLYER_A5_noir_et_blanc_deux_poses_sur_un_A4_vlzc8t",
    fileName: "affiche_af_lfp_flyer_a5_noir_et_blanc_deux_poses_sur_un_a4.pdf",
    imageAlt: "Affiche Variante 7",
  },
];

const PostersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie - Nos affiches</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/affiches"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl md:my-8 lg:my-12 xl:my-12">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Nos affiches
            </h1>
          </div>

          <div className="prose my-12 mx-auto p-4 text-justify lg:prose-lg">
            <p>
              Plutôt qu'une seule affiche officielle, nous avons fait appels à
              des volontaires pour nous proposer des affiches.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {posters.map((poster, index) => (
                <div key={index} className="mx-auto">
                  <a
                    href={poster.shortLink}
                    download
                  >
                    <div className="border-4 border-white bg-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
                      <img
                        src={`https://res.cloudinary.com/lafranceprie/t_poster/w_300,q_auto/${poster.cloudinaryPublicId}.jpg`}
                        alt={poster.imageAlt}
                        className="bg-gray-300 max-w-[300px] aspect-[1/1.41]"
                        loading="lazy"
                        srcSet={`https://res.cloudinary.com/lafranceprie/t_poster/w_100,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 100w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_150,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 150w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_200,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 200w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_300,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 300w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_600,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 2x,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_900,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 3x`}
                      />
                    </div>
                    <div className="mt-4 w-full text-center">
                      <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-3 md:px-10 md:text-lg">
                        Télécharger
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default PostersPage;
