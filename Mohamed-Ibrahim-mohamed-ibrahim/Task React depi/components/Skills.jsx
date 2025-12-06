import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
