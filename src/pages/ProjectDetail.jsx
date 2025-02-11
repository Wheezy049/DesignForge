import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfileDetailCard from "../components/ProfileDetailCard";
import ProjectDetailCard from "../components/ProjectDetailCard";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="flex flex-col items-center bg-[#FCFCFC] min-h-screen">
      <NavBar />

      <div className="w-full max-w-[1200px] mx-auto px-4 mt-36 flex flex-col md:flex-row items-start justify-between gap-4 mb-20">
        <div className="w-auto">
          <ProjectDetailCard project={project} />
        </div>
        <div className="w-auto">
          <ProfileDetailCard project={project} />
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default ProjectDetails;
