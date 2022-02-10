import type { NextPage } from "next";
import Link from "next/link";

const Faq: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:p-16">
      <div className="text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-indigo-400 md:text-3xl lg:text-4xl">
          Foire aux questions
        </h3>
      </div>
      <div className="mt-8 grid md:grid-cols-2">
        <div className="text-lg text-gray-500 md:p-4">
          <ul className="list-inside list-disc">
            <li className="hover:text-black hover:underline">
              <Link href="/faq/comment-prier-le-chapelet">
                Comment prier le chapelet ?
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
