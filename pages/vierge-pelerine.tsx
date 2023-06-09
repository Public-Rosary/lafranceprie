/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

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
        <title>La France prie - Vierge Pèlerine</title>
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
            <h1 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Vierge Pèlerine
            </h1>
          </div>

          <div className="my-12 lg:my-24 xl:grid xl:grid-cols-3">
            <div className="prose mx-auto p-4 text-justify lg:prose-lg xl:col-span-2 xl:row-span-3">
              <div className="mx-auto w-full max-w-[310px]">
                <a href={poster.shortLink} download>
                  <div className="border-4 border-white bg-gray-200 shadow-lg transition-shadow hover:shadow-2xl">
                    <img
                      src={`https://res.cloudinary.com/lafranceprie/t_poster/w_300,q_auto/${poster.cloudinaryPublicId}.jpg`}
                        alt={poster.imageAlt}
                        className="aspect-[1/1.41] max-w-[300px] bg-gray-300"
                        loading="lazy"
                        srcSet={`https://res.cloudinary.com/lafranceprie/t_poster/w_100,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 100w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_150,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 150w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_200,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 200w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_300,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 300w,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_600,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 2x,
                                https://res.cloudinary.com/lafranceprie/t_poster/w_900,f_auto,q_auto/${poster.cloudinaryPublicId}.jpg 3x`}
                      />
                    </div>
                    <div className="mt-4 w-full text-center">
                      <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-3 md:px-10 md:text-lg">
                        Télécharger
                      </p>
                    </div>
                  </a>
                </div>
              <h3>En quoi consiste cette initiative?</h3>
              <p>
                Conformément au message de Fatima, la dévotion au Cœur Immaculé
                de Marie associée à la récitation du chapelet demeure le moyen
                de sauver les âmes.
              </p>
              <p>
                Pour répondre à cette demande de Notre-Dame, l'association « La
                France Prie » va acquérir grâce à vos dons plusieurs statues de
                Notre-Dame de Fatima (Statues du Cœur Immaculé, fidèles à
                l’original, en bois, hauteur 60cm) chacune avec un brancard. Ce
                dernier permettra à la statue d’être exposée à la vénération et
                portée en procession.
              </p>
              <p>
                A partir d’octobre 2022, ces vierges pèlerines commenceront à
                visiter l'un après l'autre les groupes de chapelet qui
                souhaitent participer et se seront inscrits à temps. Ces statues
                se déplaceront au sein des groupes de prière semaine après
                semaine.
              </p>
              <p>
                A travers cette initiative, nous espérons que le Cœur Immaculé
                de Marie bénira notre nation afin d’obtenir la conversion et le
                salut de tous les pécheurs.
              </p>
              <blockquote className="quote relative border-l-4 border-neutral-500 bg-neutral-100 p-4 text-xl italic text-neutral-600">
                <p>
                  À la fin, mon Cœur Immaculé triomphera...et le monde aura un
                  temps de paix !
                </p>
                <cite className="text-sm">
                  (Notre-Dame de Fatima, 13 juillet 1917)
                </cite>
              </blockquote>
              <h3>Quels sont les buts?</h3>
              <ul>
                <li>
                  Se consacrer au Cœur Immaculé de Marie dans l’esprit de St
                  Louis-Marie Grignon de Montfort.
                </li>
                <li>
                  Réparer publiquement les péchés scandaleux de notre société et
                  les outrages faits aux Cœurs de Jésus et de Marie
                </li>
                <li>
                  Hâter le triomphe du Cœur Immaculé de Marie et de la paix dans
                  le monde.
                </li>
              </ul>
              <h3>Comment participer?</h3>
              <div>
                Si vous êtes organisateur de chapelet, inscrivez votre groupe de
                chapelet via{" "}
                <a href="https://forms.gle/8AWNbQ4CFMhaXoh2A">ce formulaire</a>.
                Nous vous mettrons ensuite en relation avec un organisateur
                régional. Cette personne aura comme mission:
                <ul>
                  <li>
                    De coordonner le transport de la vierge pèlerine au sein de
                    la région en prenant en compte que chaque groupe de prière
                    ne reçoit la vierge qu’une seule fois dans l’année.
                  </li>
                  <li>
                    D’appuyer et de conseiller les coordinateurs de chaque
                    groupe dans le cadre du cheminement de la vierge pèlerine.
                  </li>
                </ul>
              </div>
              <div>
                Au niveau de votre groupe de chapelet, il vous est ensuite
                demandé de:
                <ul>
                  <li>
                    Préparer la réception par une neuvaine (une brochure sera
                    fournie).
                  </li>
                  <li>
                    Définir le calendrier de passage de la Vierge au sein de
                    chaque famille et coordonner le transport.
                  </li>
                  <li>
                    Présenter la statue sur le lieu de récitation du chapelet
                    (avec une éventuelle procession en fonction des possibilités
                    locales).
                  </li>
                  <li>
                    Organiser lors du chapelet hebdomadaire la consécration à la
                    Vierge Marie après le chapelet (la consécration personnelle
                    se fait sur la base du volontariat).
                  </li>
                  <li>
                    S’inscrire dans le livre de voyage de la vierge pèlerine.
                  </li>
                  <li>
                    Organiser l'imposition du scapulaire si un prêtre est
                    présent.
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[48rem] md:mx-auto xl:sticky xl:top-10 xl:col-span-1">
              <div className="m-2 rounded border-2 border-indigo-100 bg-indigo-50 p-2 text-center">
                <h3 className="my-4 text-2xl font-bold">Vous inscrire</h3>
                <p className="m-2 text-sm text-gray-500">
                  Chaque formulaire est vérifié par un bénévole, qui vous mettra
                  ensuite en relation avec votre coordinateur régional.
                </p>
                <div className="m-4 inline-flex rounded-md shadow">
                  <a
                    href="https://forms.gle/8AWNbQ4CFMhaXoh2A"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Inscrire votre groupe de chapelet pour recevoir la Vierge
                    Pèlerine
                  </a>
                </div>
              </div>
              <div className="m-2 rounded border-2 border-indigo-100 bg-indigo-50 p-2 text-center">
              <h3 className="my-4 text-2xl font-bold">
                  Videos d'information
                </h3>
                <p>Nous avons préparés des vidéos d'explication </p>
                <div className="m-4 inline-flex rounded-md shadow">
                  <Link
                    href="/vierge-pelerine-videos"
                    >
                  <a className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Découvrir les vidéos
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default PilgrimVirgin;
