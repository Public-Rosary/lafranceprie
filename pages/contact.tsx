/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie | Nous contacter</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/contact"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl px-4 sm:px-6 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Nous contacter
            </h3>
          </div>

          <div className="prose my-12 mx-auto w-full p-1 text-justify prose-h3:relative prose-h3:-left-2 lg:prose-lg lg:my-24">
            <p>
              Nous sommes tous bénévoles, nous pouvons mettre plusieurs heures à
              plusieurs jours pour vous répondre en fonction de notre
              disponibilité.
              <br />
              Nous vous remercions de votre compréhension.
            </p>
            <h3>Par Télephone</h3>

            <p>Secretariat : +33658803520</p>
            <h3>Par mail</h3>

            <p>
              Pour toutes les questions :{" "}
              <a href="mailto:contact@lafranceprie.org">
                contact@lafranceprie.org
              </a>
            </p>

            <p>
              Pour la presse :{" "}
              <a href="mailto:presse@lafranceprie.org">
                presse@lafranceprie.org
              </a>
            </p>
            <h3>Sur les réseaux sociaux</h3>

            <p>
              Telegram :{" "}
              <a href="https://t.me/lafranceprie">https://t.me/lafranceprie</a>
            </p>

            <p>
              Facebook :{" "}
              <a href="https://www.facebook.com/LaFrancePrie2022/">
                https://www.facebook.com/LaFrancePrie2022/
              </a>
            </p>

            <p>
              Instagram :{" "}
              <a href="https://instagram.com/lafranceprie">
                https://instagram.com/lafranceprie
              </a>
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;
