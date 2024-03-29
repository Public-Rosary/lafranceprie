/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";
import Link from "next/link";

const LegalsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie | Mentions légales</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/mentions-legales"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl px-4 sm:px-6 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Mentions légales
            </h3>
          </div>
          <div className="prose my-12 mx-auto w-full p-1 text-justify prose-h3:relative prose-h3:-left-2 lg:prose-lg lg:my-24">
            <h3>Qui sommes-nous ?</h3>
            <p>
              Une équipe de laïcs catholiques bénévoles, indépendemment de tous
              mouvements, diocèses ou paroisses.
            </p>

            <p>
              <b>Association "La France Prie"</b>
              <br />
              chez Myriam Nakad
              <br />
              53 route de Rennes
              <br />
              44700 Orvault
              <br />
              <br />
              Association loi de 1901 enregistrée sous le N° W494004986
            </p>

            <h3>Notre hébergeur</h3>
            <p>
              <b>Cloudflare, Inc.</b>
              <br />
              Attn: Legal Department
              <br />
              101 Townsend St,
              <br />
              San Francisco, CA 94107
            </p>

            <p>
              Images et photos hébergées chez Cloudinary
              <br />
              Carte hébergée chez Google
              <br />
              Statistiques web avec Cloudflare Web Analytics (sans cookie)
              <br />
              Polices de caractères Google Font
            </p>

            <h3>RGPD</h3>
            <Link href="/rgdp">Politique de confidentialité des données</Link>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default LegalsPage;
