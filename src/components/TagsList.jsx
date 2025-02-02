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

function TagsList({ selectedTag, handleTagClick }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 px-4 py-2 whitespace-nowrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 rounded-[100px] text-sm font-medium font-inter text-[#25292E] transition ${
              selectedTag === tag
                ? "bg-blue-500 text-white shadow-sm"
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
