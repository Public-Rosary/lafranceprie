/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../../components/layout";

const HowToPrayRosaryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie | Comment prier le chapelet</title>
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
        <main className="mx-auto max-w-7xl px-4 sm:px-6 my-8 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl tracking-tight font-extrabold text-indigo-400 md:text-3xl lg:text-4xl ">
              Comment prier le chapelet ?
            </h3>
          </div>

          <div className="text-justify prose lg:prose-lg p-1 my-12 lg:my-24 w-full mx-auto prose-h3:relative prose-h3:-left-2">
            <h3>Quelques ressources :</h3>

            <p>
              <ul>
                <li>
                  Un beau site qui explique comment prier le chapelet et vous
                  proposent d'en acheter si vous n'en avez pas encore:{" "}
                  <a href="https://www.prierlechapelet.com/">
                    https://www.prierlechapelet.com/
                  </a>
                </li>

                <li>
                <a target='_blank' href="/pdf/comment-prier-le-rosaire.pdf">Un guide rapide à imprimer</a>
                </li>

                <li>
                  Un bot Telegram qui vous accompagne dans votre récitation et
                  vous rappelle chaque jour de prier le chapelet :{" "}
                  <a href="https://t.me/chapeletbot">
                    https://t.me/chapeletbot
                  </a>
                </li>
              </ul>
            </p>

            <p>
              Vous souhaitez proposer un outil pour découvrir le chapelet ou une
              prière ? écrivez-nous à cette adresse :{" "}
              <a href="mailto:contact@lafranceprie.org">
                contact@lafranceprie.org
              </a>
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default HowToPrayRosaryPage;
