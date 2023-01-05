import { setLayerDimensions } from 'pdfjs-dist';
import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
    let styles={
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      };
    if (window.innerWidth < 700) {
        styles={
            ...styles,
            flexWrap: 'wrap'
          };
    }

    
  return (
    <div style={styles}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
