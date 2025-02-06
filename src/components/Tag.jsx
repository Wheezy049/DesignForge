import React from "react";

const Tag = ({ text, bgColor = "bg-gray-200", textColor = "text-black" }) => {
  return (
    <span
      className={`p-3 rounded-[100px] flex justify-center items-center text-sm font-medium font-inter`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {text}
    </span>
  );
};

export default Tag;
