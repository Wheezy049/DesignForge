import React from "react";
import Tag from "./Tag";

function FormCard() {
  return (
    <div className="bg-white py-8 px-12 flex flex-col gap-6 rounded-[24px] w-full">
      <h1 className="text-[#1A1B1C] text-[20px] md:text-[40px]  font-semibold font-darkerGrotesque leading-[50px]">
        Collaborate with experts, contribute to real projects, and level up your
        skills
      </h1>
      <p className="text-[#8A8A8B] text-base font-medium font-inter leading-[23px]">
        Turn your designs into impact. Collaborate, contribute, and showcase
        your work.
      </p>
      <div className="flex flex-wrap gap-3">
        <Tag text="Design System" bgColor="#E9E9E9" textColor="#25292E" />
        <Tag text="Dashboard Design" bgColor="#FBE6EA" textColor="#25292E" />
        <Tag
          text="Information Architecture"
          bgColor="#1A1B1C"
          textColor="#FFFFFF"
        />
        <Tag text="UI Library" bgColor="#DBEFE2" textColor="#25292E" />
        <Tag text="Saas Dashboard" bgColor="#FEF2DE" textColor="#25292E" />
      </div>
    </div>
  );
}

export default FormCard;
