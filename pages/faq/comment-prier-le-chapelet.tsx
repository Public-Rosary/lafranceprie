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
        <main className="mx-auto my-8 max-w-7xl px-4 sm:px-6 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Comment prier le chapelet ?
            </h3>
          </div>

          <div className="prose my-12 mx-auto w-full p-1 text-justify prose-h3:relative prose-h3:-left-2 lg:prose-lg lg:my-24">
            <h3>Quelques ressources :</h3>

            <p>
              <ul>
                <li>
                  Histoire et guide du rosaire sur le site du Vatican :{" "}
                  <a href="https://www.vatican.va/special/rosary/index_rosary_fr.htm">
                    vatican.va
                  </a>
                </li>

                <li>
                  Un résumé concis par le diocèse de Paris :{" "}
                  <a href="https://www.paris.catholique.fr/comment-prier-le-chapelet.html">
                    paris.catholique.fr
                  </a>
                </li>

                <li>
                  Un{" "}
                  <a href="https://petitessoeursdespauvres.org/actualite/prier-le-chapelet/">
                    guide rapide
                  </a>{" "}
                  écrit par la Congrégation des Petites Soeurs des pauvres.
                  Accompagné d'un{" "}
                  <a href="https://petitessoeursdespauvres.org/wp-content/uploads/sites/8/2021/03/Prier-le-chapelet.pdf">
                    livret imprimable
                  </a>
                </li>

                <li>
                  Un beau site qui explique comment prier le chapelet et vous
                  proposent d'en acheter si vous n'en avez pas encore:{" "}
                  <a href="https://www.prierlechapelet.com/">
                    prierlechapelet.com
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
