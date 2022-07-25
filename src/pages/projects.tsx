import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export interface Project {
  name: string;
  github: string;
  link: string;
  stack: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Loudverse",
    github: "https://github.com/neodaoist/loudverse/",
    link: "https://loudverse.com/",
    stack: "Solidity, TypeScript, NextJS, TheGraph",
    description:
      "Loudverse is a 2 sided marketplace for funding hard to quantify public goods, like music, poetry, and theater.",
  },
  {
    name: "ourz.network",
    github: "https://github.com/ourz-network/",
    link: "https://ourz.network/",
    stack: "Solidity, TypeScript, NextJS, TheGraph",
    description:
      "ourz is a platform that enables creators, builders, and collaborators of all kind, to receive fairly split royalties for their work. Forever.",
  },
  {
    name: "messonry",
    github: "https://github.com/nickadamson/messonry/",
    link: "https://nickadamson.github.io/messonry/?path=/story/example-introduction--page",
    stack: "npm, React",
    description:
      "messonry is a npm package for React. Like a masonry layout... that actually respects images' original aspect ratio.",
  },
];

const ProjectsPage: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);

  const [active, setActive] = useState((query[`""`] as string) ?? "");

  return (
    <Layout>
      <section id="about">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="flex flex-col justify-evenly space-y-4 w-full">
            {active === "" ? (
              projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    setActive={setActive}
                  />
                );
              })
            ) : (
              <>{/* <FullProject /> */}</>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
