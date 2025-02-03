import React from "react";

function Hero() {
  return (
    <div className="flex justify-center gap-4 flex-col items-center font-darkerGrotesque w-full max-w-[1200px] text-[#25292E]">
      <div className="text-center text-[64px] leading-[68px] font-bold w-[556px]">
        <h1>Open-Source <span className=" font-extrabold">Designer</span>-Focused</h1>
      </div>
      <div className="text-center text-[32px] leading-[40px] font-medium w-[556px]">
        <p>
          Contribute to open-source projects and showcase your skills globally.
        </p>
      </div>
    </div>
  );
}

export default Hero;
