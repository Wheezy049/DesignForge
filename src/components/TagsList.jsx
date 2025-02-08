import React from "react";

const tags = [
  "Wireframe",
  "Fintech Design",
  "Design Systems",
  "Brand Design",
  "Mobile Design",
  "Information Architecture",
  "UI Library",
  "Saas Dashboard",
  "E-commerce",
];

function TagsList({ selectedTags, toggleTag }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide mb-[32px]">
      <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 py-2 whitespace-nowrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-[100px] text-sm font-medium font-inter text-[#25292E] transition ${
              selectedTags.includes(tag)
                ? "bg-black text-white shadow-sm"
                : "bg-[#E9E9E9] hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TagsList;
