import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfileDetailCard from "../components/ProfileDetailCard";
import ProjectDetailCard from "../components/ProjectDetailCard";
import SignInForm from "../components/SignInForm";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  const [showSignIn, setShowSignIn] = useState(false);

  const handleContributeClick = () => {
    setShowSignIn(true);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="relative">
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <div
        className={`flex flex-col items-center bg-[#FCFCFC] min-h-screen relative z-10 p-6 ${
          showSignIn ? "opacity-30" : ""
        }`}
      >
        <NavBar />

        <div className="w-full max-w-[1200px] mx-auto px-4 mt-28 md:mt-36 flex flex-col md:flex-row items-start justify-between gap-4 mb-20">
          <div className="w-auto">
            <ProjectDetailCard
              project={project}
              handleContributeClick={handleContributeClick}
            />
          </div>
          <div className="w-auto hidden md:block">
            <ProfileDetailCard
              project={project}
              handleContributeClick={handleContributeClick}
            />
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center z-[999] h-screen max-h-[600px] top-1/2 transform -translate-y-1/2 overflow-auto">
          <div className="">
            <button
              className="absolute top-0 right-4 text-lg font-bold"
              onClick={closeSignIn}
            >
              ✖
            </button>
            <SignInForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
