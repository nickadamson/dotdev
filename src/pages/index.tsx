import type { NextPage } from "next";
import Layout from "../components/Layout";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <section id="about">
        <div className="flex flex-col">
          <h2 className="mb-2 text-xl font-semibold">About</h2>
          <div className="space-y-2 text-lg">
            <p>
              Nick is a developer who particularly <i>loves</i> open-source and
              decentralized technology.
            </p>
            <p>
              Before discovering this interest in programming, it was instead in
              photo + video production -- working as a digital tech on fashion
              shoots.
            </p>
            <p>
              That creative experience serves as a source of inspiration for the
              projects being built now.
            </p>
    </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
