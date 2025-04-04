import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
import NavSidebar from "../components/NavSidebar";
import Explore from "../components/Explore";

function DashBoard({ projects}) {
  const [activeComponent, setActiveComponent] = useState("Explore");

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Explore":
        return <Explore projects={projects} />;
      case "My Contributions":
        return "My Contributions";
      case "Published Projects":
        return "Published Projects";
      case "My Profile":
        return "My Profile";
      default:
        return <Explore projects={projects} />;
    }
  };

  return (
    <div className="flex w-full h-screen bg-[#F8F8F8] relative">
      <NavSidebar handleNavClick={handleNavClick} projects={projects} activeComponent={activeComponent} />
      <div className="flex-1 ml-[270px] px-8 py-10 overflow-y-auto">
        <div className="">{renderComponent()}</div>
      </div>
    </div>
  );
}

export default DashBoard;
