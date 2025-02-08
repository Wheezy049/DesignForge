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
    contributorImages,
    tags,
    description,
  } = project;

  const tagStyles = [
    { text: "text-[#9747FF]", bg: "bg-[#F4EBFE]" },
    { text: "text-[#379811]", bg: "bg-[#F1FEE9]" },
    { text: "text-[#A77A00]", bg: "bg-[#FBF9E3]" },
    { text: "text-[#1C1B1F]", bg: "bg-[#EAEAEA]" },
    { text: "text-[#F418E5]", bg: "bg-[#F4EBFE]" },
    { text: "text-[#0B6670]", bg: "bg-[#E0FEFD]" },
    { text: "text-[#FF4747]", bg: "bg-[#FDF1EA]" },
    { text: "text-[#023691]", bg: "bg-[#E8EAF7]" },
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
              <h3 className="text-sm font-bold font-manrope text-[#1A1B1C] leading-[20px] whitespace-nowrap">
                {author}
              </h3>
            </div>
            <p className="text-xs font-medium font-inter text-[#25292E] whitespace-nowrap mt-1">
              Posted on {date}
            </p>
          </div>

          {/* Project Title */}
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-[20px] font-semibold font-inter leading-[24px] text-[#25292E]">
              {title}
            </h2>
            <p className="text-sm font-normal font-inter leading-[20px] text-[#79818B]">
              {`${description.slice(0, 90)}...`}
            </p>
          </div>

          {/* Contributors */}
          <div className="flex items-center justify-between whitespace-nowrap w-full">
            <div className="flex items-center">
              <div className="flex items-center -space-x-2 mt-1">
                {contributorImages.slice(0, 3).map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt="Contributor"
                    className="w-7 h-7 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <div className="flex -ml-3 items-center">
                <span className="text-[12px] font-medium leading-[14px] font-inter mt-1 bg-[#1A1B1C] text-white w-7 h-7 rounded-full flex items-center justify-center">
                  +{contributors}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 items-center mt-2">
              {tags.map((tag, index) => {
                const style =
                  shuffledTagStyles[index % shuffledTagStyles.length];

                return (
                  <span
                    key={index}
                    className={`px-2 py-1 ${style.bg} ${style.text} text-[12px] font-medium font-inter leadng-[15px] rounded-[100px]`}
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
