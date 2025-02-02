import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function HomePage({ projects}) {
  return (
    <div className="flex flex-col items-center bg-[#FCFCFC] min-h-screen">

      <NavBar />

      <div className="w-full max-w-[1200px] mx-auto px-4 mt-36">
        <Hero />
        <Projects projects={projects}/>
      </div>

      <div className="w-full">
        <Footer />
      </div>
      
    </div>
  );
}

export default HomePage;
