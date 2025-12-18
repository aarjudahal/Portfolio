import React, { useState } from "react";
import ProjectList from "./ProjectList.jsx";
import { projectsData } from "../data/ProjectsData.jsx";

export default function Projects() {
  // Track if "View More" is clicked
  const [showAll, setShowAll] = useState(false);

  // Slice first 4 projects or all projects
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  const handleViewMore = () => {
    setShowAll(true);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 text-white font-clash">
        My Projects
      </h1>

      <ProjectList 
        projects={visibleProjects} 
        handleViewMore={handleViewMore} 
        allVisible={showAll}
      />
    </section>
  );
}
