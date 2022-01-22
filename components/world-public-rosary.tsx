import type { NextPage } from "next";

const WorldPublicRosary: NextPage = () => {
  return (
    <div id="carte">
      <div className="text-center p-8">
        <h3 className="text-2xl tracking-tight font-extrabold text-indigo-400 md:text-3xl lg:text-4xl">
          Et plus de 3000 lieux de chapelets dans le monde entier !
        </h3>
      </div>
      <div className="container mx-auto w-full pb-16 text-center">
        <div className="flex flex-wrap justify-center p-10 gap-4">
          <img
            src="/flags/at.svg"
            alt="Austria flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/be.svg"
            alt="Belgium flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/ca.svg"
            alt="Canada flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/cz.svg"
            alt="Czech Republic flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/cr.svg"
            alt="Croatia flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/de.svg"
            alt="Germany flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/ie.svg"
            alt="Ireland flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/it.svg"
            alt="Italy flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/lb.svg"
            alt="Lebanon flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/pt.svg"
            alt="Portugal flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/ro.svg"
            alt="Romania flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/ch.svg"
            alt="Switzerland flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/ug.svg"
            alt="Uganda flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
          <img
            src="/flags/us.svg"
            alt="United States of America flag"
            className="max-h-12 rounded-md"
            loading="lazy"
          />
        </div>
        <p className="text-base text-gray-500 sm:text-lg sm:mx-auto md:text-xl p-4">
          Découvrez l&apos;initiative dans les autres pays du monde
          sur&nbsp;le&nbsp;site&nbsp;international&nbsp;:{" "}
          <a href="https://public-rosary.org/" className="text-blue-500">
            <span className="whitespace-nowrap">public-rosary.org</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default WorldPublicRosary;
