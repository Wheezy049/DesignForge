import React from "react";

const InputField = ({ label, placeholder, name, type = "text", icon, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-[#404041] font-medium font-inter text-sm">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full border border-[#D0D5DD] bg-white rounded-md p-4 text-sm font-normal font-inter focus:ring-2 focus:ring-gray-800 outline-none ${
            value?.length ? "text-black" : "text-[#98A2B3]"
          }`}
        />
        {icon && (
          <span className="absolute inset-y-4 right-3 flex w-[20px] h-[20px] items-center text-[#667185]">
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
