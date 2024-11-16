/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Video from "../components/video";

const poster = {
  cloudinaryPublicId: "ilebouchard_gzlfsr",
  fileName: "ilebouchard_gzlfsr.jpg",
  imageAlt: "Ile-Bouchard",
  shortLink: "https://bit.ly/3OrREPF",

};

const PilgrimVirgin: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie - Vierge Pèlerine - Vidéos d'information</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/vierge-pelerine"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl md:my-8 lg:my-12 xl:my-12">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold tracking-tigqht text-indigo-400 md:text-3xl lg:text-4xl ">
              Vierge Pèlerine
            </h1>
          </div>
          <div className="my-12 lg:my-24 xl:grid xl:grid-cols-3">
            <div className="prose mx-auto p-4 text-justify lg:prose-lg xl:col-span-2 xl:row-span-3">
            <h2>Couronnement des trois vierges pèlerines à Pontmain - retour en images</h2>
            <h3>12 octobre 2024</h3>
              <Video videoId="9BG3f1euRv0" />
            </div>
          </div>
          <div className="my-12 lg:my-24 xl:grid xl:grid-cols-3">
            <div className="prose mx-auto p-4 text-justify lg:prose-lg xl:col-span-2 xl:row-span-3">
            <h2>Soin des statues</h2>
              <h3>Manipulation et conditionnement de la Vierge Pèlerine</h3>
              <Video videoId="iFM8S_ir2hs" />
              <h3>Statue de la Vierge Pèlerine - Fixation de la statue sur son socle</h3>
              <Video videoId="okzvxYBFrvY" />
              <h3>Statue de la Vierge Pèlerine - Fixation de la niche</h3>
              <Video videoId="OyyA__OQv_s" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default PilgrimVirgin;
