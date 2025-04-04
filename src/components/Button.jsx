import React from "react";

const Button = ({
  text,
  bgColor = "#181919",
  iconSrc,
  iconAlt = "icon",
  onClick,
  type = "button"
}) => {
  const isDefaultBg = bgColor === "#181919";

  return (
    <button
      type={type}
      className="flex items-center justify-center gap-2 px-6 py-4 text-base font-bold font-manrope rounded-lg hover:opacity-80 transition"
      style={{
        backgroundColor: bgColor,
        color: isDefaultBg ? "white" : "#1A1B1C",
      }}
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className="w-5 h-5" />}
      {text}
    </button>
  );
};

export default Button;
