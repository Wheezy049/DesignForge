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

  const tagStyles = [
    { text: "text-[#9747FF]", bg: "bg-[#F4EBFE]" },
    { text: "text-[#379811]", bg: "bg-[#F1FEE9]" },
    { text: "text-[#A77A00]", bg: "bg-[#FBF9E3]" },
  ];

  // Function to shuffle the tag styles
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle styles and slice to the number of tags
  const shuffledTagStyles = shuffleArray(tagStyles).slice(0, tags.length);

  return (
    <Link to={`/project/${project.id}`}>
      <div className="w-full h-auto bg-[#F4F4F4] rounded-[16px] flex flex-col items-center gap-4 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer">
        {/* Project Image */}
        <div className="w-full h-[200px] rounded-t-[16px] overflow-hidden">
          <img
            src={projectImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="py-6 md:py-8 px-4 w-full flex flex-col gap-4">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={profilePicture}
                  alt={author}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-medium font-manrope text-[#79818B] leading-[20px] whitespace-nowrap">
                {author}
              </h3>
            </div>
            <p className="text-xs font-medium font-inter text-[#25292E] whitespace-nowrap mt-1">
              Posted on {date}
            </p>
          </div>

          {/* Project Title */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-[20px] font-medium font-inter leading-[24px] text-[#25292E]">
              {title}
            </h2>
            <p className="text-sm font-normal font-inter leading-[20px] text-[#79818B]">
              {`${description.slice(0, 100)}...`}
            </p>
          </div>

          {/* Contributors */}
          <div className="flex items-center justify-between whitespace-nowrap w-full">
            <div className="flex gap-2 items-center">
              <div className="flex items-center -space-x-3 mt-1 md:mt-2">
                {[...Array(3)].map((_, i) => (
                  <img
                    key={i}
                    src={profilePicture}
                    alt="Contributor"
                    className="w-7 h-7 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <span className="text-[12px] font-medium font-inter text-[#79818B] mt-1">
                  +{contributors} Contributors
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 items-center mt-2">
              {tags.map((tag, index) => {
                const style = shuffledTagStyles[index % shuffledTagStyles.length];

                return (
                  <span
                    key={index}
                    className={`px-2 py-1 ${style.bg} ${style.text} text-[10px] font-semibold font-manrope rounded-[100px]`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
