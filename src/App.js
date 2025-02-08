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
    title: "AdVista",
    author: "Frianisnisu Doe",
    description:
      "Develop a powerful ad performance dashboard where marketers can track campaign metrics, analyze engagement, and optimize ad spend in real time.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (1).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 29,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Dashboard", "Brand Design"],
  },
  {
    id: 2,
    title: "EventHive",
    author: "Oluwadamilare Eze",
    description:
      "Create an event discovery and ticketing app that allows users to browse events, book tickets, and network with attendees through in-app messaging.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (7).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 24,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Mobile Design", "UserFlow"],
  },
  {
    id: 3,
    title: "InsightHub",
    author: "Emeka Nnamani",
    description:
      "Develop a modern analytics dashboard for businesses to track KPIs, user behavior, and performance insights through interactive charts and reports.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (3).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 18,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Dashboard", "Information Architecture"],
  },
  {
    id: 4,
    title: "LedgerLink",
    author: "Babatunde Oludare",
    description:
      "Design a seamless personal finance app that helps users track expenses, set budgets, and visualize spending patterns with intuitive graphs.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (4).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 15,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Web Design", "UI Library"],
  },
  {
    id: 5,
    title: "Edusphere",
    author: "Adebayo Nwosu",
    description:
      "Craft an engaging, accessible website for an online learning platform that simplifies course discovery, enrollment, and interactive learning experiences.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (2).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 35,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Wireframe", "SAAS Design"],
  },
  {
    id: 6,
    title: "LearnSphere",
    author: "Chukwu Adeyemi",
    description:
      "Create an intuitive user interface for an e-learning platform, focusing on improving course navigation and student engagement.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (8).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 27,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Dashboard", "Design Systems"],
  },
  {
    id: 7,
    title: "StockPulse",
    author:  "Adeyemi Chukwu",
    description:
      "Develop a stock market dashboard that provides real-time financial data, trend analysis, and personalized watchlists for investors.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (6).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 22,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Web Design", "UI Library"],
  },
  {
    id: 8,
    title: "VentureLunch",
    author: "Ibrahim Damilare",
    description:
      "Create a startup landing page template that highlights product features, investor details, and a compelling call to action for early adopters.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (4).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 17,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Dashboard", "Design Systems"],
  },
  {
    id: 9,
    title: "RecruitEase",
    author: "Tobi Joshua",
    description:
      "Design a recruitment management dashboard for HR teams to track job applications, schedule interviews, and manage candidate pipelines efficiently.",
    date: "Jan 15, 2024",
    projectImage: "/images/Frame 3 (2).png",
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 12,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Wireframe", "SAAS Design"],
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
