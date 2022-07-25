import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { Project } from "../pages/projects";

interface ProjectCardProps {
  project: Project;
  setActive: Dispatch<SetStateAction<string>>;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { name, github, link, stack, description } = project;

  return (
    <div className="flex flex-col p-2 w-full h-24 border-2 max-w-1/3">
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-between h-full text-left">
          <h3 className="text-xl font-semibold">
            <div className="flex space-x-1">
              <a href={link}>&#128279; {name}</a>
              <a className="self-end" href={github}>
                <div className="text-base font-normal">
                  {" - "}
                  <Image
                    src="/github.svg"
                    alt="Github Repo"
                    width={16}
                    height={16}
                  />{" "}
                  Source
                </div>
              </a>
            </div>
          </h3>
          <p className="text-sm italic font-light tracking-wide">{stack}</p>
        </div>
        <div className="w-1/2">
          <p className="text-right">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
