import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Verification from "./pages/Verification";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    author: "Ikenna Afolayan",
    description:
      "Create an intuitive user interface for an e-learning platform, focusing on improving course navigation and student engagement.",
    date: "Jan 15, 2024",
    projectImage: "/images/frame.png",
    profilePicture: "/images/image.jpg",
    category: "E-commerce",
    contributors: 29,
    tags: ["Wireframe", "UI Research"],
  },
  {
    id: 2,
    title: "Banking App Interface",
    author: "Oluwadamilare Eze",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (1).png",
    profilePicture: "/images/image.jpg",
    category: "Finance",
    contributors: 24,
    tags: ["UX Design", "UI Research"],
  },
  {
    id: 3,
    title: "Healthcare Portal",
    author: "Emeka Nnamani",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (2).png",
    profilePicture: "/images/image.jpg",
    category: "Healthcare",
    contributors: 18,
    tags: ["Design Systems", "UX Research"],
  },
  {
    id: 4,
    title: "Learning Management System",
    author: "Babatunde Oludare",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (3).png",
    profilePicture: "/images/image.jpg",
    category: "Education",
    contributors: 15,
    tags: ["information Architecture", "UI Design"],
  },
  {
    id: 5,
    title: "Social Media Analytics",
    author: "Adebayo Nwosu",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (4).png",
    profilePicture: "/images/image.jpg",
    category: "Social Media",
    contributors: 22,
    tags: ["Dashboard", "Mobile Design"],
  },
  {
    id: 6,
    title: "LearnSphere",
    author: "Chukwu Adeyemi",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (5).png",
    profilePicture: "/images/image.jpg",
    category: "Social Media",
    contributors: 22,
    tags: ["UI Library", "Design Systems"],
  },
  {
    id: 7,
    title: "Social Media Dashboard",
    author:  "Adeyemi Chukwu",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (6).png",
    profilePicture: "/images/image.jpg",
    category: "Social Media",
    contributors: 22,
    tags: ["Dashboard", "Data Visualization"],
  },
  {
    id: 8,
    title: "LedgerLink",
    author: "Ibrahim Damilare",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (4).png",
    profilePicture: "/images/image.jpg",
    category: "Social Media",
    contributors: 22,
    tags: ["Wireframe", "Mobile Design"],
  },
  {
    id: 9,
    title: "Shopfront UI Redesign",
    author: "Tobi Joshua",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (2).png",
    profilePicture: "/images/image.jpg",
    category: "Social Media",
    contributors: 22,
    tags: ["Dashboard", "Data Visualization"],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route
          path="/project/:id"
          element={<ProjectDetail projects={projects} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verification-code" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;
