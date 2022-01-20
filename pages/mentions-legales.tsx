/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";

import Layout from "../components/layout";

const Charter: NextPage = () => {
  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 my-8 md:my-8 lg:my-12 lg:px-8 xl:my-12">
        <div className="text-center">
          <h3 className="text-2xl tracking-tight font-extrabold text-indigo-400 md:text-3xl lg:text-4xl ">
            Mentions légales
          </h3>
        </div>
        <div className="text-justify prose lg:prose-lg p-1 my-12 lg:my-24 w-full mx-auto prose-h3:relative prose-h3:-left-2">
          <h3>Qui sommes-nous ?</h3>
          <p>Une équipe de laïcs catholiques bénévoles</p>
          <p>
            Directeur de publication : Julien Le Page<br/>
            Responsable technique : Joseph Page
          </p>

          <h3>Notre hébergeur</h3>
          <p>
            <b>Cloudflare, Inc.</b>
            <br />
            Attn: Legal Department
            <br />
            101 Townsend St,
            <br />
            San Francisco, CA 94107
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Charter;
