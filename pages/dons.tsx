/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";

const GivingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie | Nous aider</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/dons"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl px-4 sm:px-6 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Nous aider
            </h3>
          </div>

          <div className="prose my-12 mx-auto w-full p-1 text-justify prose-h3:relative prose-h3:-left-2 lg:prose-lg lg:my-24">
            <p>
              Vous pouvez aider aux frais de fonctionnement de l'organisation.
              <br />
              Nous vous en remercions vivement.
            </p>

            <h3>Coordonnées bancaires:</h3>
            <p>
              <span className="underline">IBAN</span>: FR76 1380 7000 5832 8219
              7950 554
              <br />
              <span className="underline">BIC</span>: CCBPFRPPNAN
              <br />
              <span className="underline">Titulaire de compte</span>:
              Association La France Prie
            </p>

            <h3>Paypal</h3>

            <p>
              <a href="https://paypal.me/lafranceprie?country.x=FR&locale.x=fr_FR">
                Cliquez ici pour être redirigé vers Paypal
              </a>
            </p>

            <h3>Chèques</h3>

            <p>
              Chèques a l'ordre de : "Association La France Prie, chez Myriam
              Nakad, 53 route de Rennes, 44700 Orvault"
            </p>

            <h3>Acheter un Polo</h3>

            <p>
              <a href="https://www.tresorsdetantecotine.com/polos-sweats">
                Cliquez ici pour nous soutenir par l'achat de polos "La France
                prie"
              </a>
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default GivingPage;
