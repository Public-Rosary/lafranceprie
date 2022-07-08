/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import { TwitterTimelineEmbed } from  'react-twitter-embed';

import Layout from "../components/layout";

const SocialPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie | Nous suivre</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/social"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl px-4 sm:px-6 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Nous suivre
            </h3>
          </div>

          <div className="prose my-12 mx-auto w-full p-1 text-justify prose-h3:relative prose-h3:-left-2 lg:prose-lg lg:my-24">

            <h3>Twitter</h3>
            <p>

            <TwitterTimelineEmbed sourceType="profile" screenName="FrancePrie" options={{height: 500}} />

            </p>

          </div>
        </main>
      </Layout>
    </>
  );
};

export default SocialPage;
