/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout";

const LegalsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>La France prie | Mentions légales | RGDP</title>
        <meta
          name="description"
          content="une initiative de laïcs catholiques pour promouvoir et multiplier la récitation du chapelet pour la France dans l'espace public pour ainsi confier cet espace à la Sainte Vierge et obtenir d'elle le retour de la paix et de la liberté dans le respect du droit naturel dans la société française"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.lafranceprie.org/rgdp"
        ></meta>
      </Head>
      <Layout>
        <main className="mx-auto my-8 max-w-7xl px-4 sm:px-6 md:my-8 lg:my-12 lg:px-8 xl:my-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl ">
              Mentions légales | Politique RGPD
            </h3>
          </div>
          <div className="prose my-12 mx-auto w-full p-1 text-justify prose-h3:relative prose-h3:-left-2 lg:prose-lg lg:my-24">
            <h3>Champs d'application</h3>
            <p>
              Cette politique s'applique à l'ensemble des traitements de données
              à caractère personnel réalisés par la France Prie, quels que
              soient les supports sur lesquels les données ont été collectées.
            </p>
            <h3>Les données collectées</h3>
            <p>
              Nous collectons des informations lorsque vous remplissez un
              formulaire pour une participation à une activité, pour une demande
              d'information, pour faire un don ou vous abonner à une liste de
              diffusion. Nous recueillons les informations que vous saisissez :
              votre nom, prénom, adresse postale ou e-mail, vos coordonnées
              téléphoniques, date de naissance... Les informations bancaires de
              votre participation aux frais d'accueil ou aux activités, de vos
              dons... sont conservées aussi par notre établissement bancaire.
            </p>
            <p>
              Lorsque vous naviguez sur notre site Internet, nous récoltons
              également des informations techniques sur votre appareil (adresse
              IP) ou des statistiques de navigation.
            </p>
            <h3>La finalité de la collecte de données</h3>
            <p>
              Toutes les informations que nous collectons auprès de vous peuvent
              être utilisées par la France Prie pour différentes finalités : la
              gestion des envois de nos programmes d'activités, des informations
              sur l'actualité de la communauté ou informations diverses, la
              gestion et l'organisation de nos activités, la gestion de la
              relation donateurs, l'émission de reçus fiscaux, la gestion de vos
              abonnements à nos listes de diffusion.
            </p>
            <h3>Durée de conservation</h3>
            <p>
              La France Prie conserve vos données pendant la durée strictement
              nécessaire à la réalisation des finalités mentionnées ci-dessus;
              cependant certaines données peuvent être conservées sans limite
              pour l'historique de la communauté.
            </p>
            <h3>Stockage et sécurisation des données</h3>
            <p>
              La France Prie prend toute mesure utile pour préserver la sécurité
              des données à caractère personnel qui lui sont confiées. Pour
              cela, elle met en place les mesures techniques et
              organisationnelles nécessaires afin d'éviter, dans la mesure du
              possible, toute altération, perte ou accès non autorisé à vos
              données.
            </p>
            <p>
              La France Prie travaille également avec des prestataires qui
              agissent en conformité avec la loi Informatique et Libertés et le
              Règlement Général de Protection des Données (RGPD).
            </p>
            <p>
              Les données à caractère personnel sont stockées dans l'Union
              Européenne, sur papier ou dans nos logiciels ou ceux de nos
              prestataires.
            </p>
            <h3>Droit d'accès</h3>
            <p>
              Conformément à la Loi Informatique et Libertés N°78-17 du 16
              janvier 1978 et au Règlement Général sur la protection des données
              2016/679 du 25 mai 2018, vous disposez d'un droit d'accès, de
              rectification, de limitation et de suppression, des données vous
              concernant. Vous pouvez adresser vos demandes par courrier postale
              à l'adresse suivante : Association La France Prie, chez Myriam
              Nakad, 53 route de Rennes, 44700 Orvault, en joignant une copie de
              votre carte d'identité et en précisant le Foyer concerné par vos
              données. Vous pouvez également vous désabonner de tout envoi par
              mail grâce aux liens de désinscription qui y sont présents.
            </p>
            <h3>Consentement</h3>
            <p>
              En utilisant notre site internet, vous consentez à notre politique
              de confidentialité. Pour les autres supports, des mentions sont
              portées sur chaque document pour vous éclairer sur l'utilisation
              que nous faisons de vos données personnelles et sur vos droits en
              la matière.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default LegalsPage;
