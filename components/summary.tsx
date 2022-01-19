import type { NextPage } from "next";

const summaries = [
    { question: "De quoi s’agit-il ?",
    answer: "Récitation du chapelet sur la place publique, au mieux avec des cierges bénis laissés sur place." }
,
{
    question: "Quand ?",
    answer: "De préférence le mercredi soir à 18 heures, en union avec de nombreux groupes à travers le monde.",
},
{
    question: "Où ?",
    answer: "Dans chaque quartier de nos villes, dans chaque village de France, devant un calvaire, une église, une statue dont notre pays est parsemé.",
},
{ 
  question: "Qui ?",
  answer: "Toutes les personnes de bonne volonté qui souhaitent réciter le chapelet. Que l’on soit seul, en famille, avec des amis, avec ou sans prêtre, chacun dans son village ou son quartier.",
},
{
  question: "Comment ?",
  answer: "Debout, à genoux, chacun comme il le souhaite et comme la météo le permet, à voix haute sans haut-parleur. Si un prêtre est présent, il lui est réservé de faire une petite intervention à caractère purement religieux et de bénir les participants en fin de chapelet. On peut aussi chanter quelques chants et prier Saint-Joseph. Durée conseillé : au total environ 30 minutes.",
},
{
  question: "Pourquoi ?",
  answer: "Pour confier notre pays qui subit actuellement une crise sociétale des plus graves de son histoire à la Très Sainte Vierge Marie et l’implorer pour qu’elle vienne en aide à ses habitants.",
},
{
  question: "Dans quel but ?",
  answer: "Il s’agit de poser un acte public de prière et de témoignage de notre Foi et donc de réciter ce chapelet en public partout en France pour ainsi mettre le domaine public sous la protection de la Sainte Vierge.",
},
{
  question: "Jusqu’à quand ?",
  answer: "Jusqu’à ce que la crise actuelle se soit résolue de manière pacifique et que la paix et la liberté soient revenues dans notre société",
}
]

const Summary: NextPage = () => {
  return (
    <div className="mx-auto py-16 px-4 md:p-16" id="decouvrir">
        { summaries.map(({ question, answer }) => (
          <div className="grid grid-cols-4 p-2 hover:text-indigo-600" key={question}>
            <div className="col-span-4 sm:col-span-1 font-bold sm:text-right text-lg p-4">{question}</div>
            <div className="col-span-4 sm:col-span-3 text-gray-600 hover:text-black pb-4 sm:p-4">{answer}</div>
          </div>
        ))}
    </div>
  );
};

export default Summary;
