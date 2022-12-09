import React, { useState, useEffect } from "react";
import Project from "./Project";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // read the project folder and generate an array of projects
    const projectFolder = "./projectinfo";
    const files = fs.readdirSync(projectFolder);
    const projects = files.map((file) => {
      const project = fs.readFileSync(`${projectFolder}/${file}`, "utf8");
      return JSON.parse(project);
      
    });
    console.log(project)
    setProjects(projects);
  }, []);

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;
