/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";

const posters = [
  // {
  //   cloudinaryPublicId: "posters/Affiche_LFP-A4-M-A_TEK-DEF_dorna5",
  //   fileName: "affiche_lfp-a4-m-a_tek-def.pdf",
  //   imageAlt: "Affiche Variante 1",
  //   shortLink: "https://bit.ly/3BQ6edp",
  // },
  {
    cloudinaryPublicId: "posters/Affiche_LeChapeletLaurencon_civap4",
    fileName: "affiche_lechapeletlaurencon.pdf",
    imageAlt: "Affiche Variante 2",
    shortLink: "https://bit.ly/3M2hlo7",
  },
  // {
  //   cloudinaryPublicId: "posters/Affiche_LFP_A4_GHachette_l6vkrp",
  //   fileName: "affiche_lfp_a4_ghachette.pdf",
  //   imageAlt: "Affiche Variante 3",
  //   shortLink: "https://bit.ly/3t2SB6x",
  // },
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
    imageAlt: "Affiche Variante 5",
    shortLink: "https://bit.ly/3IzePE1",
  },
  // {
  //   cloudinaryPublicId: "posters/Affiche_LFP_A4_natshez_1_lnkcfz",
  //   fileName: "affiche_lfp_a4_natshez_1.png",
  //   imageAlt: "Affiche Variante 6",
  //   shortLink: "https://bit.ly/3JYKFKy",
  // },
  // {
  //   cloudinaryPublicId: "posters/Affiche_LFP_A4_natshez_2_knyoa",
  //   fileName: "affiche_lfp_a4_natshez_2.png",
  //   imageAlt: "Affiche Variante 7",
  //   shortLink: "https://bit.ly/3HD5SYO",
  // },
  // {
  //   cloudinaryPublicId: "posters/affiche_lfp_a4_natshez_pontmain_imu2wm",
  //   fileName: "affiche_lfp_a4_natshez_pontmain.png",
  //   imageAlt: "Affiche Variante 8",
  //   shortLink: "https://bit.ly/3puq6h3",
  // },
  // {
  //   cloudinaryPublicId: "posters/affiche_lfp_a3_lespetitsbrins-1_ljzm1d",
  //   fileName: "affiche_lfp_a3_lespetitsbrins-1.pdf",
  //   imageAlt: "Affiche Variante 9",
  //   shortLink: "https://bit.ly/3MnNjLZ",
  // },
  {
    cloudinaryPublicId: "posters/affiche_lfp_a3_lespetitsbrins-2_tspceo",
    fileName: "affiche_lfp_a3_lespetitsbrins-2.pdf",
    imageAlt: "Affiche Variante 10",
    shortLink: "https://bit.ly/34env3C",
  },
];

const flyers = [
  {
    cloudinaryPublicId:
      "posters/Affiche_AF_LFP_FLYER_A5_couleur_2_poses_sur_un_A4_xmkcfn",
    fileName: "affiche_af_lfp_flyer_a5_couleur_2_poses_sur_un_a4.pdf",
    imageAlt: "Flyer Variante 1",
    shortLink: "https://bit.ly/3vnU3Dq",
  },
  {
    cloudinaryPublicId:
      "posters/Affiche_AF_LFP_FLYER_A5_noir_et_blanc_deux_poses_sur_un_A4_vlzc8t",
    fileName: "affiche_af_lfp_flyer_a5_noir_et_blanc_deux_poses_sur_un_a4.pdf",
    imageAlt: "Flyer Variante 2",
    shortLink: "https://bit.ly/3psrwsv",
  },
  // {
  //   cloudinaryPublicId: "posters/Flyer_LFP_A5_natshez_sfp5iu",
  //   fileName: "flyer_lfp_a5_natshez.pdf",
  //   imageAlt: "Flyer Variante 3",
  //   shortLink: "https://bit.ly/3hwhfY4",
  // },
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
              Commandes
            </h1>
          </div>

          <div className="prose my-12 mx-auto p-4 text-justify lg:prose-lg">
            <p>
              Pour commander des livrets, affiches ou drapeaux, cliquez sur le bouton ci-dessous. Il vous amenera vers le formulaire de commande.
              </p><p>
              Voici les prix:
              </p>
              <p>
              <h4>Livrets de prières et de chants:</h4>
              A l'unité: 3€<br />
              Par 20: 40€<br />
              Par 50: 45€<br />
              Par 100: 70€<br />
            </p>
            <p>
              <h4>Livrets de préparation à la réception de la vierge pèlerine:</h4>
              A l'unité: 3€<br />
              Par 20: 40€<br />
              Par 50: 45€<br />
              Par 100: 70€<br />
            </p>
            <p>
              <h4>Drapeaux en tissu (80x120cm):</h4>
              A l'unité: 25€<br />
            </p>
            <p>
              <h4>Petits drapeaux en tissu (20x30cm):</h4>
              A l'unité: 5€<br />
            </p>
            <p>
              <h4>Tracts format A5:</h4>
              Par 100: 0,15€<br />
            </p>
            <p>
              <h4>Affiches format A3:</h4>
              A l'unité: 0,20€<br />
            </p>
          </div>
          <div className="text-center">
          <div className="m-4 inline-flex rounded-md shadow">
                  <a
                    href="https://forms.gle/tFr9Z8g3xe1fPJcF8"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Commande
                  </a>
                </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default PostersPage;
