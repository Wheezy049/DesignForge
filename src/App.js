import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Verification from "./pages/Verification";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const projects = [
  {
    id: 1,
    title: "AdVista",
    author: "Frianisnisu Doe",
    description:
      "In today’s fast-paced business environment, companies rely on real-time data to optimize operations, track key performance indicators (KPIs), and stay ahead of market trends. This project focuses on designing a modern SaaS analytics dashboard that simplifies complex data visualization, making it easier for businesses to extract valuable insights without information overload. The goal is to create a clean, user-friendly dashboard UI that balances aesthetics with functionality. Users should be able to seamlessly navigate between multiple data views, customize their reports, and interact with visualized metrics such as revenue growth, customer retention, and operational efficiency. Your contributions will help shape a data-driven experience for B2B companies, enabling them to gain real-time insights through interactive graphs, trend analysis, and KPI monitoring.",
    date: "Jan 15, 2024",
    projectImage: [
      "/images/Frame 3 (1).png",
      "/images/Frame 3 (1).png"
    ],
    profilePicture: "/images/Ellipse 2.svg",
    contributors: 29,
    contributorImages: [
      "/images/Ellipse 2 (1).svg",
      "/images/Ellipse 2 (2).svg",
      "/images/Ellipse 4.svg",
    ],
    tags: ["Dashboard", "Brand Design", "Sass Dashboard", "UI Library", "Design Systems"],
  },
  {
    id: 2,
    title: "EventHive",
    author: "Oluwadamilare Eze",
    description:
      "Create an event discovery and ticketing app that allows users to browse events, book tickets, and network with attendees through in-app messaging.",
    date: "Jan 15, 2024",
    projectImage: [
      "/images/Frame 3 (7).png",
      "/images/Frame 3 (7).png"
    ],
  
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
    projectImage: [
      "/images/Frame 3 (3).png",
      "/images/Frame 3 (3).png"
    ],
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
    projectImage: [
      "/images/Frame 3 (4).png",
      "/images/Frame 3 (4).png"
    ],
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
    projectImage: [
      "/images/Frame 3 (5).png",
      "/images/Frame 3 (5).png"
    ],
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
    projectImage: [
      "/images/Frame 3 (8).png",
      "/images/Frame 3 (8).png"
    ],
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
    author: "Adeyemi Chukwu",
    description:
      "Develop a stock market dashboard that provides real-time financial data, trend analysis, and personalized watchlists for investors.",
    date: "Jan 15, 2024",
    projectImage: [
      "/images/Frame 3 (6).png",
      "/images/Frame 3 (6).png"
    ],
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
    projectImage: [
      "/images/Frame 3 (4).png",
      "/images/Frame 3 (4).png"
    ],
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
    projectImage: [
      "/images/Frame 3 (2).png",
      "/images/Frame 3 (2).png"
    ],
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
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route
          path="/project/:id"
          element={<ProjectDetail projects={projects} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/profile" element={ <Profile />} />       
        <Route path="/dashboard" element={<DashBoard projects={projects} />} />
      </Routes>
      </>
  );
}

export default App;
