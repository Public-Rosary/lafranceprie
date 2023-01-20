/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';

import Layout from "../../components/layout";

const pdfId = 'Rosaire_1_y17f0q';

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
                  Livret d'accompagnement de 32 pages, destiné à servir de support aux participants des chapelets:{" "}
                  <a href="https://www.leslivreschretiens.fr/a-son-image/2143-373-la-france-prie-livret-d-accompagnement-9782364637641.html#/18-lot_livret-a_l_unite">leslivreschretiens.fr</a>
                </li>
                <li>
                  Histoire et guide du rosaire sur le site de la Milice de
                  l'Immaculée :{" "}
                  <a href="https://m-i.info/fr/le-rosaire/">m-i.info</a>
                </li>
                <li>
                  Dévotion des 1° samedis du mois:{" "}
                  <a href="https://salve-corda.org/">salve-corda.org</a>
                </li>
                <li>
                  Un PDF qui explique comment prier le Rosaire:{" "}
                  <div className="mx-auto">
                  <a href="https://res.cloudinary.com/lafranceprie/image/upload/v1657288244/Rosaire_1_y17f0q.pdf" download>
                    <div className="border-4 border-white bg-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
                      <Image
                        src={`${pdfId}.jpg`}
                        alt="Comment prier le rosaire pdf"
                        className="aspect-[1/1.41] max-w-[300px] bg-gray-300"
                        loading="lazy"
                        layout="responsive"
                        width={300}
                        height={500}
                      />
                      </div>
                      </a>
                    </div></li>
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
