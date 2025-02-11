import React from "react";

function ProjectDetailCard({ project }) {
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

  function formatParagraphs(text) {
    const words = text.split(" ");
    let paragraphs = [];
    let currentParagraph = [];

    words.forEach((word) => {
      currentParagraph.push(word);

      // Check if current paragraph is around 65 words and ends with a period
      if (currentParagraph.length >= 40 && /[.!?]$/.test(word)) {
        paragraphs.push(currentParagraph.join(" "));
        currentParagraph = [];
      }
    });

    // Push any remaining text as a final paragraph
    if (currentParagraph.length) {
      paragraphs.push(currentParagraph.join(" "));
    }

    return paragraphs;
  }

  return (
    <div className="flex flex-col p-6 justify-center items-start gap-8 rounded-[16px] border border-[#E9E9E9]">
      <h1 className="text-[40px] font-bold font-inter text-[#25292E] leading-[54px] tracking-[-1.6px]">
        {title}
      </h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center mt-1">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={profilePicture}
                alt={author}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[18px] font-semibold font-inter text-[#25292E] leading-[26px]">
              {author}
            </h3>
          </div>
          <p className="text-[18px] font-medium font-inter text-[#25292E] mt-1">
            Posted on {date}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center -space-x-3">
            {contributorImages.slice(0, 3).map((image, i) => (
              <img
                key={i}
                src={image}
                alt="Contributor"
                className="w-7 h-7 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-[18px] text-[#25292E] font-semibold leading-[26px] font-inter">
            {contributors} Contributors
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-[24px] font-semibold font-inter leading-[28px] tracking-[-0.48px] text-[#25292E]">
          Summary
        </h1>
        <div className="gap-3 flex flex-col">
          {formatParagraphs(description).map((para, index) => (
            <p
              key={index}
              className="text-[18px] font-inter leading-[26px] text-[#25292E]"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        {projectImage.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.title}
            className="w-full md:w-auto rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetailCard;
