import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProjectCard from './ProjectCard'
import TagsList from './TagsList';


function Projects({ projects }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);

    // Function to handle tag selection (only one can be active)
    const handleTagClick = (tag) => {
        setSelectedTag(prevTag => (prevTag === tag ? null : tag));
        console.log(tag)
    };

    // Filter projects based on searchQuery and selectedTag
    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.category.toLowerCase().includes(searchQuery.toLowerCase()) || 
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
        const matchesTag = selectedTag ? project.tags.some(tag => tag === selectedTag) : true;
    
        return matchesSearch && matchesTag;
    });
    
  
  return (
    <div className="flex justify-center gap-4 flex-col items-center w-full max-w-[1200px] mt-[73px] mb-20">

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <TagsList selectedTag={selectedTag} handleTagClick={handleTagClick} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3">No projects found.</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Projects