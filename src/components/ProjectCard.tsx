import { useAnimation, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FC, useEffect } from "react";
import { Project } from "./sections/Projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const { name, github, link, linkTitle, stack, description } = project;

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div
      className={`flex ${
        index % 2 === 1 ? "flex-row-reverse" : ""
      } portrait:flex-col-reverse portrait:justify-around mx-auto rounded-xl border-2 border-black w-card lg:h-card portrait:h-card-mobile max-w-8xl`}
    >
      <div className="m-4 max-w-full max-h-full portrait:h-1/2 landscape:w-1/2">
        <div className="relative w-full h-full">
          <Image src={`/${name}.png`} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex flex-col justify-around px-6 landscape:py-4 portrait:py-2 landscape:w-1/2 landscape:h-full">
        <div className="">
          <h3 className="pb-2 text-xl font-extrabold text-center md:text-4xl">
            {name}
          </h3>
          <p className="pb-2 italic font-light text-center">{stack}</p>
        </div>
        <div className="text-center lg:mx-auto 2xl:w-2/3">
          <p className="text-sm lg:text-xl">{description}</p>
        </div>
        <div className="">
          <div className="flex justify-between mx-auto w-4/5 lg:w-2/5 md:text-lg">
            <a
              href={link}
              rel="noopener noreferrer"
              target="blank"
              className="font-serif font-medium underline rounded-sm outline-2 hover:outline outline-offset-8"
            >
              {linkTitle}
            </a>
            <a
              href={github}
              rel="noopener noreferrer"
              target="_blank"
              className="font-mono font-bold tracking-tighter underline rounded-sm outline-2 hover:outline outline-offset-8"
            >
              SOURCE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
