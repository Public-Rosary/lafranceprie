import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

import Map, { getStaticProps as mapGetStaticProps } from "../components/map";
import HomeForm from "../components/home-form";
import Summary from "../components/summary";
import HistoryVideo from "../components/history-video";
import SocialMedias from "../components/social-medias";
import Footer from "../components/footer";
import Menu from "../components/menu";
import WorldPublicRosary from "../components/world-public-rosary";
import Faq from "../components/faq";

const description = `Une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour confier ainsi cet espace à la Sainte Vierge et obtenir d'Elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française.`;

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>La France prie</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.lafranceprie.org"></meta>
        <meta property="og:site_name" content="La France prie"></meta>
        <meta property="og:locale" content="fr_FR"></meta>

        <meta
          property="og:image"
          content="https://www.lafranceprie.org/social-medias/link-preview-20220129.jpg"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="631"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:title"
          content="Initiative La France prie"
        ></meta>
        <meta
          property="twitter:image"
          content="https://www.lafranceprie.org/social-medias/link-preview-20220129.jpg"
        ></meta>
        <meta property="twitter:description" content={description}></meta>
      </Head>
      <header>
        <Menu>
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 sm:pb-16 md:mt-16 md:pb-20 lg:mt-20 lg:px-8 lg:pb-28 xl:mt-28 xl:pb-32">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Initiative</span>{" "}
                <span className="block text-indigo-400 xl:inline">
                  La France prie
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#carte"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Voir la carte des chapelets
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#decouvrir"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Découvrir
                  </a>
                </div>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfYFTd8u5yTloETN-t1cBeC7IgLiWp_cwXEu8UBx-nP1OJoQw/viewform"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Ajouter une intention de prière
                  </a>
                </div>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0">
                  <Link href="/vierge-pelerine">
                    <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
                      Vierge Pèlerine
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 sm:ml-3 sm:hidden">
                  <Link href="/gerer-mon-chapelet">
                    <span className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
                      Organiser et gérer mon chapelet
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </Menu>
      </header>

      <main className="mx-auto max-w-7xl">
        <Map {...props.mapComponentProps} />

        <HomeForm />

        <Summary />

        <HistoryVideo />

        <SocialMedias />

        <WorldPublicRosary />

        <Faq />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      mapComponentProps: (await mapGetStaticProps()).props,
    },
  };
};

export default Home;
