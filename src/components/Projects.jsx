import React from 'react'
import SearchBar from './SearchBar'
import ProjectCard from './ProjectCard'

const projects = [
    {
        id: 1,
        title: "E-commerce Dashboard",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "E-commerce",
        contributors: 29,
        tags: ["Wireframe", "UI Research"]
      },
      {
        id: 2,
        title: "Banking App Interface",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Finance",
        contributors: 24,
        tags: ["Mobile Design", "UI Research"]
      },
      {
        id: 3,
        title: "Healthcare Portal",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Healthcare",
        contributors: 18,
        tags: ["Design Systems", "UX Research"]
      },
      {
        id: 4,
        title: "Learning Management System",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Education",
        contributors: 15,
        tags: ["Information Architecture", "UI Design"]
      },
      {
        id: 5,
        title: "Social Media Analytics",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Social Media",
        contributors: 22,
        tags: ["Dashboard", "Data Visualization"]
      },
      {
        id: 6,
        title: "Social Media Analytics",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Social Media",
        contributors: 22,
        tags: ["Dashboard", "Data Visualization"]
      },
      {
        id: 7,
        title: "Social Media Analytics",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Social Media",
        contributors: 22,
        tags: ["Dashboard", "Data Visualization"]
      },
      {
        id: 8,
        title: "Social Media Analytics",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Social Media",
        contributors: 22,
        tags: ["Dashboard", "Data Visualization"]
      },
      {
        id: 9,
        title: "Social Media Analytics",
        author: "Jane Doe",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "Jan 15, 2024",
        projectImage: "/images/frame.png",
        profilePicture: "/images/image.jpg",
        category: "Social Media",
        contributors: 22,
        tags: ["Dashboard", "Data Visualization"]
      },
    ]

function Projects() {

  return (
    <div className='flex justify-center gap-4 flex-col items-center w-full max-w-[1200px] mt-[73px] mb-20'>
        <SearchBar />

        <div className='container mx-auto px-4 py-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    )) 
                }
            </div>
        </div>
    </div>
  )
}

export default Projects