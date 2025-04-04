import React from "react";

function ProjectDetailCard({ project, handleContributeClick }) {
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
    <div className="flex flex-col p-0 md:p-6 justify-center items-start gap-6 md:gap-8 rounded-[0px] md:rounded-[16px] md:border md:border-[#E9E9E9]">
      <h1 className="text-[20px] md:text-[40px] font-semibold md:font-bold font-inter text-[#25292E] leading-[24px] md:leading-[54px] tracking-[-0.4px] md:tracking-[-1.6px]">
        {title}
      </h1>
      {/* profile */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-0 md:gap-4 justify-between md:justify-normal items-center w-full md:w-auto">
            <div className="flex gap-2 items-center mt-1">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={profilePicture}
                  alt={author}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className=" text-base md:text-[18px] font-normal md:font-semibold font-inter text-[#25292E] leading-[23px] md:leading-[26px]">
                {author}
              </h3>
            </div>
            <p className="text-sm md:text-[18px] font-medium font-inter text-[#25292E] mt-1">
              Posted on {date}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
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
        <div className="flex md:hidden gap-3 flex-wrap">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className={
                  "px-[10px] py-1 rounded-[100px] flex justify-center items-center text-xs font-semibold font-manrope leading-[15px] bg-[#EFEFEF] text-[#25292E]"
                }
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="flex md:hidden items-center gap-1">
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
          <span className="text-[16px] text-[#25292E] font-medium leading-[26px] font-inter">
            + {contributors} Contributors
          </span>
        </div>
        <div className="flex md:hidden justify-between items-center w-full">
          <button className="px-4 py-2 md:py-6 flex justify-center items-center border border-[#1A1B1C] text-[#1A1B1C] rounded-lg text-sm font-semibold font-manrope leading-[20px] hover:bg-[#F0F0F0] cursor-pointer transition-all duration-300 whitespace-nowrap">
            Show Licence
          </button>
          <button className="px-4 py-2 md:py-6 flex justify-center items-center bg-[#1A1B1C] text-white rounded-lg text-sm font-semibold font-manrope leading-[20px] hover:bg-[#333333] cursor-pointer transition-all duration-300 whitespace-nowrap">
            Contribute Now
          </button>
        </div>
      </div>
      {/* project summary */}
      <div className="block md:hidden w-full h-[230px] rounded-lg overflow-hidden">
        <img
          src={projectImage[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
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
      {/* project image */}
      <div className="block md:hidden w-full h-[230px] rounded-lg overflow-hidden">
        <img
          src={projectImage[1]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:flex flex-col gap-8 w-full">
        {projectImage.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.title}
            className="w-full h-[400px] md:w-auto rounded-lg"
          />
        ))}
      </div>
      {/* area of contributio */}
      <div className="flex flex-col gap-6">
        <h1 className="text-[24px] font-semibold font-inter leading-[28.8px] tracking-[-0.48px] text-[#25292E]">
          📌 Key Areas for Contribution:
        </h1>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Dashboard UI & Layout:
              </span>
              Design clear and structured pages that display important business
              metrics at a glance.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Navigation & User Flow:
              </span>
              Create an intuitive structure that allows users to move seamlessly
              between different reports and views.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Data Visualization Components:
              </span>
              Develop charts, graphs, tables, and heatmaps that effectively
              present data without overwhelming the user.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Customizable Widgets & Filters:
              </span>
              Design interactive elements that allow users to personalize their
              dashboard and refine their data display.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Dark & Light Mode UI:
              </span>
              Ensure that the dashboard maintains a consistent and accessible
              experience across different themes.
            </p>
          </li>
        </ul>
      </div>
      {/* contribution guildlines */}
      <div className="flex flex-col gap-6">
        <h1 className="text-[24px] font-semibold font-inter leading-[28.8px] tracking-[-0.48px] text-[#25292E]">
          📌 Contribution Guildlines:
        </h1>
        <ol className=" list-decimal pl-5 space-y-2">
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Apply to Contribute -
              </span>
              Submit a request to join the project and specify your area of
              interest.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Review Project Details -
              </span>
              Go through the project brief, existing designs, and contribution
              guidelines.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Claim a Task -
              </span>
              Select an available design task or propose improvements to
              existing work.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Start Designing -
              </span>
              Use Figma to create your design, following the provided design
              system and accessibility standards.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Submit for Review -
              </span>
              Share your work via a Figma link with notes explaining your design
              choices.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Get Feedback & Iterate -
              </span>
              Receive constructive feedback from the project maintainer and
              refine your submission.
            </p>
          </li>
          <li className="text-[18px] font-inter leading-[26px] text-[#25292E]">
            <p>
              <span className="font-semibold capitalize whitespace-nowrap mr-1">
                Approval & Merge -
              </span>
              Once approved, your design is added to the project, and you're
              credited for your contribution.
            </p>
          </li>
        </ol>
      </div>
      {/* button */}
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between w-full">
        <p className="text-[18px] font-medium font-inter text-[#25292E] leading-[26px]">
          🚀 Ready to contribute? Apply now and start designing!
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleContributeClick}
            className="px-4 py-2 md:py-6 flex justify-center items-center bg-[#1A1B1C] text-white rounded-lg text-base font-bold font-manrope leading-[23px] hover:bg-[#333333] cursor-pointer transition-all duration-300 whitespace-nowrap"
          >
            Contribute Now
          </button>
          <button className="px-4 py-2 md:py-6 flex md:hidden justify-center items-center border border-[#1A1B1C] text-[#1A1B1C] rounded-lg text-sm font-semibold font-manrope leading-[20px] hover:bg-[#F0F0F0] cursor-pointer transition-all duration-300 whitespace-nowrap">
            Show Licence
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailCard;
