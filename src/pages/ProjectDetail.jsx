import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetails;
