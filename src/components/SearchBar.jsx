import React from "react";
import { Search, X } from "lucide-react";

function SearchBar({ searchQuery, setSearchQuery, selectedTags, clearFilters }) {

  const shouldShowClear = searchQuery.length > 0 || selectedTags.length > 0; 

  return (
    <div className="w-full rounded-[100px] border border-[#D0D5DD] bg-white py-5 px-4 flex justify-between items-center">
      <div className=" w-full flex gap-3 items-center">
      <Search size={24} color="#667185" />
      <input
        type="text"
        placeholder="Browse design projects from professionals"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-transparent w-full outline-none text-[#98A2B3] text-base font-normal"
      />
      </div>
      {shouldShowClear && (
        <div
          onClick={clearFilters}
          className="flex gap-2 items-center whitespace-nowrap cursor-pointer text-gray-600 hover:text-gray-800 transition"
        >
          <X size={24} />
          <span>Clear Filters</span>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
