import type { NextPage } from "next";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

const DynamicAbout = dynamic(() => import("../components/sections/About"), {
  suspense: true,
});
const DynamicLanding = dynamic(() => import("../components/sections/Landing"), {
  suspense: true,
});

const DynamicProjects = dynamic(
  () => import("../components/sections/Projects"),
  {
    suspense: true,
  }
);

const LandingPage: NextPage = () => {
  return (
    <LazyMotion strict features={domAnimation}>
      <Layout>
        <main className="flex overflow-x-hidden overflow-y-scroll fixed top-0 right-0 bottom-0 left-0 z-10 flex-col mx-auto mb-44 max-h-full font-serif border border-black my-h-safe-action scrollbar-hidden w-center-title h-center-action scroll-smooth">
          <Suspense fallback={"hi :)"}>
            <DynamicLanding />
            <DynamicProjects />
            <DynamicAbout />
          </Suspense>
        </main>
      </Layout>
    </LazyMotion>
  );
};

export default LandingPage;
