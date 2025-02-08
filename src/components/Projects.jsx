import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";
import TagsList from "./TagsList";

function Projects({ projects }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // Store selected tags

  // Function to toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    // Match search query
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    // Match selected tags (if any tags are selected, filter projects that have at least one matching tag)
    const matchesTags = selectedTags.length === 0 || project.tags.some(tag => selectedTags.includes(tag));

    return matchesSearch && matchesTags;
  });


  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };


  return (
    <div className="flex justify-center gap-4 flex-col items-center w-full max-w-[1200px] mt-[32px] mb-20">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedTags={selectedTags} clearFilters={clearFilters}/>

      <TagsList selectedTags={selectedTags} toggleTag={toggleTag} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
