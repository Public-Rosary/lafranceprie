import type { NextPage } from "next";

const HistoryVideo: NextPage = () => {
  return (
    <div className="flex flex-wrap place-content-center">
      <div className="container max-w-4xl p-4 text-lg text-gray-500">
        <p className="p-4">
          L&apos;initiative &ldquo;La France Prie&ldquo; reprend en France une
          initiative lancée en Autriche le 29 novembre 2021 et qui s&apos;est
          très rapidement développée dans plusieurs pays comptant après six
          semaines plusieurs milliers de lieux de récitations de chapelets
          publics chaque mercredi dans le monde entier.
        </p>

        <p className="p-4">
          Chaque personne de bonne volonté est appelée à prévoir puis inscrire
          un chapelet devant un calvaire, une croix, une statue près de chez
          elle pour ainsi multiplier le nombre de lieu de récitation du chapelet
          dans l&apos;espace public.
        </p>
      </div>
    </div>
  );
};

export default HistoryVideo;
