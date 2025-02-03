import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const {
    title,
    author,
    date,
    projectImage,
    profilePicture,
    contributors,
    tags,
    description,
  } = project;

  return (
    <Link to={`/project/${project.id}`}>
      <div className="w-full h-auto bg-[#F5F5F5] rounded-[16px] flex flex-col items-center gap-4 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer">
        {/* project image */}
        <div className="w-full h-[200px] rounded-t-[16px] overflow-hidden">
          <img
            src={projectImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* project info */}
        <div className="py-8 px-4 w-full flex flex-col gap-4">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={profilePicture}
                  alt={author}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-medium font-manrope text-[#79818B]">
                {author}
              </h3>
            </div>
            <p className="text-sm font-semibold font-manrope text-[#25292E]">
              Posted on {date}
            </p>
          </div>
          {/* project title */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-[24px] font-bold font-manrope text-[#25292E]">
              {title}
            </h2>
            <p className="text-base font-medium font-manrope text-[#79818B]">{`${description.slice(
              0,
              40
            )}...`}</p>
          </div>

          {/* contributor */}
          <div className="flex items-center gap-2 whitespace-nowrap w-full">
            {/* Contributors iamge*/}
            <div className="flex gap-2 items-center">
              <div className="flex items-center -space-x-3">
                <img
                  src={profilePicture}
                  alt="Contributor"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src={profilePicture}
                  alt="Contributor"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
                <img
                  src={profilePicture}
                  alt="Contributor"
                  className="w-7 h-7 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <span className="text-[10px] font-semibold font-manrope text-[#79818B]">
                  {" "}
                  +{contributors} Contributors
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 items-center mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#EFEFEF] text-[#25292E] text-[10px] font-semibold font-manrope rounded-[100px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
