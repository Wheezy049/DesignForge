import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import NavSidebar from "../components/NavSidebar";
import Explore from "../components/Explore";
import { toast } from "react-toastify";

function DashBoard({ projects}) {
  const [activeComponent, setActiveComponent] = useState("Explore");
  const { user, logout } = useAuth();

  const handleLogout = () => {
     logout(); 
     toast.success("Logged out successfully.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      style: {
        backgroundColor: "#4CAF50",
        color: "white",
        fontSize: "14px",
        textAlign: "center",
        borderRadius: "8px",
      },
    });
  };

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
      <NavSidebar handleNavClick={handleNavClick} projects={projects} activeComponent={activeComponent} handleLogout={handleLogout} />
      <div className="flex-1 ml-[270px] px-8 py-10 overflow-y-auto">
      <h1>{user?.email || 'email' }</h1>
        <div className="">{renderComponent()}</div>
      </div>
    </div>
  );
}

export default DashBoard;
