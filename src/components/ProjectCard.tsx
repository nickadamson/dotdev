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
    <div className="flex flex-col p-2 m-2 w-full border-2 h-max max-w-1/3">
      <div className="flex justify-between w-full h-full">
        <div className="flex flex-col justify-between h-full text-xl font-semibold text-left">
          <h3 className="flex space-x-1">
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
          </h3>
          <p className="text-sm italic font-light tracking-wide">{stack}</p>
        </div>
        <div className="w-1/2 max-w-3/4">
          <p className="text-right break-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
