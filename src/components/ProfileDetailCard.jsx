import React from "react";

function ProfileDetailCard({ project, handleContributeClick}) {
  const {
    author,
    profilePicture,
    contributors,
    contributorImages,
    tags,
  } = project;
  return (
    <div className="flex flex-col p-6 justify-center items-start gap-8 rounded-[16px] border border-[#E9E9E9]">
      {/* profile */}
      <div className="flex gap-6 justify-center items-start w-full">
        <div className="w-[144px] h-[144px] rounded-full overflow-hidden">
          <img
            src={profilePicture}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[28px] font-medium font-inter leading-[33.6px] tracking-[-0.56px] text-[#25292E] whitespace-nowrap">
            {author}
          </h1>
          <p className="text-[18px] font-inter leading-[26px] text-[#25292E] whitespace-nowrap">
            Senior Designer @ Ruwe
          </p>
          <p className="text-[18px] font-inter leading-[26px] text-[#25292E] whitespace-nowrap">
            Berlin, Germany
          </p>
        </div>
      </div>
      {/* about author */}
      <div className="flex flex-col gap-4">
        <h1 className="text-[#666667] text-sm font-medium font-inter leading-[20px]">
          About Author
        </h1>
        <p className="text-[#25292E] text-base font-medium font-inter leading-[23px]">
          UX/UI designer with 5+ years of open-source experience, specializing
          in accessible, user-focused designs.
        </p>
      </div>
      {/* project tags */}
      <div className="flex flex-col gap-4">
        <h1 className="text-[#666667] text-sm font-medium font-inter leading-[20px]">
          Project tags
        </h1>
        <div className="flex gap-3 flex-wrap">
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
      </div>
      {/* project contibutors */}
      <div className="flex items-center gap-1">
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
        <span className="text-[18px] text-[#25292E] font-medium leading-[26px] font-inter">
          + {contributors} Contributors
        </span>
      </div>
      {/* project buttons */}
      <div className="flex justify-between items-center w-full">
        <button className="px-4 py-6 flex justify-center items-center border border-[#1A1B1C] text-[#1A1B1C] rounded-lg text-base font-bold font-manrope leading-[23px] hover:bg-[#F0F0F0] cursor-pointer transition-all duration-300 whitespace-nowrap">
          Show Licence
        </button>
        <button onClick={handleContributeClick} className="px-4 py-6 flex justify-center items-center bg-[#1A1B1C] text-white rounded-lg text-base font-bold font-manrope leading-[23px] hover:bg-[#333333] cursor-pointer transition-all duration-300 whitespace-nowrap">
          Contribute Now
        </button>
      </div>
    </div>
  );
}

export default ProfileDetailCard;
