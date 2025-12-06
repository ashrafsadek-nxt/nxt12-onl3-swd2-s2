import React from "react";

const Projects = () => {
  const projects = [
    { title: "Project One", description: "Simple React app", link: "#" },
    { title: "Project Two", description: "Portfolio website", link: "#" },
  ];
  
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src="https://via.placeholder.com/300x200" alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
