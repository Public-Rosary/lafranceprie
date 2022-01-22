import type { NextPage } from "next";

const SocialMedias: NextPage = () => {
  return (
    <div className="pb-24">
      <div className="text-center px-8 py-16 sm:p-16">
        <h3 className="text-2xl tracking-tight font-extrabold text-indigo-400 md:text-3xl lg:text-4xl">
          Partagez votre chapelet au monde entier !
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-12 px-12 lg:px-32">
        <div className="col-span-3 sm:col-span-1 text-center">
          <a href="https://t.me/lafranceprie">
            <span className="sm:block font-extrabold text-xl">
              Notre groupe Telegram
            </span>

            <img
              className="inline h-8 w-auto sm:h-32 m-6"
              src="/telegram.png"
              loading="lazy"
            />
            <span className="block text-gray-600">
              pour les discussions, demander de l&apos;aide, contacter les
              bénévoles et pour nous envoyer les photos de vos chapelets
            </span>
          </a>
        </div>
        <div className="col-span-3 sm:col-span-1 text-center">
          <a href="https://instagram.com/lafranceprie">
            <span className="sm:block font-extrabold text-xl">
              Notre profil Instagram
            </span>

            <img
              className="inline h-8 w-auto sm:h-32 m-6"
              src="/instagram.jpeg"
              loading="lazy"
            />
            <span className="block text-gray-600">
              sur lequel nous publions les photos de vos chapelets
            </span>
          </a>
        </div>
        <div className="col-span-3 sm:col-span-1 text-center">
          <a href="https://www.facebook.com/LaFrancePrie2022/">
            <span className="sm:block font-extrabold text-xl">
              Notre page Facebook
            </span>

            <img
              className="inline h-8 w-auto sm:h-32 m-6"
              src="/facebook.png"
              loading="lazy"
            />
            <span className="block text-gray-600">
              sur lequel nous publions les photos de vos chapelets
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
