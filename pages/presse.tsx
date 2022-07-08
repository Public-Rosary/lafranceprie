/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { VideoCameraIcon, MicrophoneIcon } from "@heroicons/react/solid";

import Layout from "../components/layout";

const PressPage: NextPage = () => {
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
              Presse
            </h3>
          </div>

          <div className="prose my-12 mx-auto w-full p-1 text-justify prose-h3:relative prose-h3:-left-2 lg:prose-lg lg:my-24">
            <h3>Interviews en vidéo :</h3>
            <p>
              <VideoCameraIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://www.youtube.com/watch?v=qsHwgPEXXso">
                La France prie - Terres de Mission n°257 - TVL du 3 avril 2022
              </a>{" "}
              (à partir de la 20ème minute)
            </p>
            <p>
              <VideoCameraIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://www.cnews.fr/emission/2022-03-27/en-quete-desprit-du-27032022-1197552">
                Emission "En quête d'esprit" CNEWS du 27 mars 2022
              </a>
            </p>
            <p>
              <VideoCameraIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://dai.ly/x87v3wf">
                Reportage par CNEWS le 13 février 2022
              </a>{" "}
              (à regarder à partir de la 15ème minute)
            </p>
            <p>
              <VideoCameraIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://youtu.be/KF0VqE2ltjU">
                Entretien avec un activiste luthérien le 11 février 2022
              </a>
            </p>

            <h3>Interviews radio :</h3>
            <p>
              <MicrophoneIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://radionotredame.net/embed/375786">
                Radio Notre-Dame avec M. Louis Daufrenes le 9 mars 2022
              </a>{" "}
              (à partir de la minute 6'45'')
            </p>
            <p>
              <MicrophoneIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://bit.ly/3i6BlYY">
                Radio Maria Suisse Romande le 24 février 2022
              </a>
            </p>
            <p>
              <MicrophoneIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://bit.ly/3GX8m3W">
                Radio Courtoisie le 17 février 2022
              </a>{" "}
              (à partir de la 46ème minute)
            </p>
            <p>
              <MicrophoneIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://bit.ly/3I37yfa">
                Radio Notre Dame le 9 février 2022
              </a>
            </p>
            <p>
              <MicrophoneIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://bit.ly/3p2Upey">Radio Maria le 3 février 2022</a>
            </p>
            <p>
              <MicrophoneIcon className="inline-block h-5 w-5 text-blue-500	" />
              <a href="https://bit.ly/3JBJpg8">
                Radio Espérance le 18 janvier 2022
              </a>
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default PressPage;
