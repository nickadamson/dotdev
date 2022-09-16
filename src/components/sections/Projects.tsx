import { useAnimation, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../ProjectCard";

export interface Project {
  name: string;
  github: string;
  link: string;
  linkTitle: string;
  stack: string;
  description: string;
}

const styleRepeater = ["-z-50", "-z-40", "-z-30", "-z-20", "-z-10", "z-0"];

const projects: Project[] = [
  {
    name: "Loudverse",
    github: "https://github.com/neodaoist/loudverse/",
    link: "https://loudverse.com/",
    linkTitle: "SITE",
    stack: "Solidity, TypeScript, NextJS, TheGraph",
    description:
      "Loudverse is a 2 sided marketplace for funding hard to quantify public goods, like music, poetry, and theater. Smart contracts are deployed on Polygon.",
  },
  {
    name: "Messonry",
    github: "https://github.com/nickadamson/messonry/",
    link: "https://nickadamson.github.io/messonry/?path=/story/example-introduction--page",
    linkTitle: "DOCS",
    stack: "npm, React",
    description:
      "messonry is a npm package for React. It creates a 'messy' grid layout for displaying media. While respecting each work's original aspect ratio.",
  },
  {
    name: "Ourz",
    github: "https://github.com/ourz-network/",
    link: "https://www.ourz.network/1/nft/5938",
    linkTitle: "SITE",
    stack: "Solidity, TypeScript, NextJS, TheGraph",
    description:
      "ourz.network is a platform that enables creators, builders, and collaborators of all kind, to receive split royalties for their work. Forever. Smart contracts are deployed on Ethereum Mainnet, built on top of Zora Protocol.",
  },
  {
    name: "FFunky Calc",
    github: "https://github.com/nickadamson/ffunky-calc",
    link: "https://nickadamson.github.io/ffunky-calc/",
    linkTitle: "DEMO",
    stack: "JavaScript, Github Pages",
    description: "Four Function Calculator; a favorite from The Odin Project.",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col">
        <div className="relative top-0 mx-auto text-5xl font-black lg:text-8xl -z-10">
          {/* <h2 className="top-0 -mx-6 -mb-6 ml-6 outline-font">Projects</h2> */}
          {styleRepeater.map((style, index) => {
            return index === 0 ? (
              <h2
                key={index}
                className={`sticky top-0 -mx-9 lg:-mb-12 outline-font ${style}`}
              >
                PROJECTS
              </h2>
            ) : (
              <p
                key={index}
                className={`sticky top-0 -mx-9 lg:-mb-12 outline-font ${style}`}
              >
                PROJECTS
              </p>
            );
          })}
        </div>
        <div className="flex flex-col justify-evenly space-y-2 w-full lg:pt-16 landscape:space-y-4">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
