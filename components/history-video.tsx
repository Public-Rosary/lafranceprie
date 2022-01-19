import type { NextPage } from "next";

const HistoryVideo: NextPage = () => {
  return (
    <div className="mt-8 flex flex-wrap place-content-center">
      

      <div className="max-w-[560px] p-4 text-base text-gray-500 text-lg">
        <p className="p-4">L&apos;initiative &ldquo;La France Prie&ldquo; reprend ainsi en France une initiative lancée en Autriche le 29 novembre 2021 et qui s&apos;est très rapidement développée dans plusieurs pays comptant après six semaines plusieurs milliers de lieux de récitations de chapelets publics chaque mercredi dans le monde entier.</p>

        <p  className="p-4">Chaque personne de bonne volonté est ainsi appelée à prévoir puis inscrire un chapelet devant un calvaire, une croix, une statue près de chez elle et ainsi rassembler toujours plus de monde à la récitation du chapelet.</p>
      </div>

      <div className="text-center text-gray-500">
        <iframe 
          className="w-full aspect-video max-w-[560px] max-h-[315px]"
          width="560" height="315"
          src="https://www.youtube-nocookie.com/embed/bXNH4nr4q-g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        Vidéo de présentation par Louis-Pierre, initiateur
      </div>
    </div>
  );
};

export default HistoryVideo;


