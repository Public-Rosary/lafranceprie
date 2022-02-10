import type { NextPage } from "next";

const SocialMedias: NextPage = () => {
  return (
    <div className="pb-24">
      <div className="px-8 py-16 text-center sm:p-16">
        <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl">
          Partagez votre chapelet au monde entier !
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-12 px-12 lg:px-32">
        <div className="col-span-3 text-center sm:col-span-1">
          <a href="https://t.me/lafranceprie">
            <span className="text-xl font-extrabold sm:block">
              Notre groupe Telegram
            </span>

            <img
              className="m-6 inline h-8 w-auto sm:h-32"
              src="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,q_auto/telegram.png"
              alt="Groupe Telegram"
              loading="lazy"
              srcSet="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_16,q_auto/telegram 16w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_32,q_auto/telegram 32w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_64,q_auto/telegram 64w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_120,q_auto/telegram 120w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_240,q_auto/telegram 240w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_480,q_auto/telegram 480w"
            />
            <span className="block text-gray-600">
              pour les discussions, demander de l&apos;aide, contacter les
              bénévoles et pour nous envoyer les photos de vos chapelets
            </span>
          </a>
        </div>
        <div className="col-span-3 text-center sm:col-span-1">
          <a href="https://instagram.com/lafranceprie">
            <span className="text-xl font-extrabold sm:block">
              Notre profil Instagram
            </span>

            <img
              className="m-6 inline h-8 w-auto sm:h-32"
              src="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,q_auto/instagram.png"
              alt="Page Instagram"
              loading="lazy"
              srcSet="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_16,q_auto/instagram 16w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_32,q_auto/instagram 32w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_64,q_auto/instagram 64w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_120,q_auto/instagram 120w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_240,q_auto/instagram 240w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_480,q_auto/instagram 480w"
            />
            <span className="block text-gray-600">
              sur lequel nous publions les photos de vos chapelets
            </span>
          </a>
        </div>
        <div className="col-span-3 text-center sm:col-span-1">
          <a href="https://www.facebook.com/LaFrancePrie2022/">
            <span className="text-xl font-extrabold sm:block">
              Notre page Facebook
            </span>

            <img
              className="m-6 inline h-8 w-auto sm:h-32"
              src="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,q_auto/facebook.png"
              alt="Page Facebook"
              loading="lazy"
              srcSet="https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_16,q_auto/facebook 16w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_32,q_auto/facebook 32w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_64,q_auto/facebook 64w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_120,q_auto/facebook 120w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_240,q_auto/facebook 240w,
                      https://res.cloudinary.com/lafranceprie/f_auto,c_limit,w_480,q_auto/facebook 480w"
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
