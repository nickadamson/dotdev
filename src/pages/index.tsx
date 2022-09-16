import type { NextPage } from "next";
import Layout from "../components/Layout";
import About from "../components/sections/About";
import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";

const LandingPage: NextPage = () => {
  return (
    <Layout>
      <div className="fixed top-0 right-0 left-0 w-screen h-screen">
        <main className="flex overflow-x-hidden overflow-y-scroll z-50 flex-col mx-auto font-serif border-2 border-black my-h-safe-action scrollbar-hidden w-center-title h-center-action scroll-smooth">
          <Landing />
          <Projects />
          <About />
        </main>
      </div>
    </Layout>
  );
};

export default LandingPage;
