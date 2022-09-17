import type { NextPage } from "next";
import Layout from "../components/Layout";
import About from "../components/sections/About";
import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";

const LandingPage: NextPage = () => {
  return (
    <Layout>
      <main className="flex overflow-x-hidden overflow-y-scroll fixed top-0 right-0 bottom-0 left-0 z-10 flex-col mx-auto mb-44 max-h-full font-serif border border-black my-h-safe-action scrollbar-hidden w-center-title h-center-action scroll-smooth">
        <Landing />
        <Projects />
        <About />
      </main>
    </Layout>
  );
};

export default LandingPage;
