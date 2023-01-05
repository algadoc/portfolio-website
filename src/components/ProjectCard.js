import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const path = project.title.toLowerCase().replace(/\s/g, '');
    navigate(path);
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'scale(1)';
  };

  let topStyles = {
    display: 'flex',
    width: '40vw',
    height: '23vh',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '5px',
    margin: '10px',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis'
  };

  if (window.innerWidth < 700) {
    topStyles={
        ...topStyles,
        width: '70vw'
      };
}
  return (
    <div style={topStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div style={{
        width: '50%',
        height: '100%',
        backgroundImage: `url(${project.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px 0 0 5px',
        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
      }} />
      <div style={{
        width: '50%',
        height: '100%',
        padding: '10px',
        margin: '0 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'start'
      }}>
        <h3 style={{ margin: 0, fontSize: 'large' }}>{project.title}</h3>
        <p style={{
          fontSize: 'xsmall',
          lineHeight: '1.2',
          margin: '10px 0',
          overflow: 'hidden',
          whiteSpace: 'normal',
          textOverflow: 'ellipsis',
          zIndex: 1
        }}>
          {project.intro}
        </p>
        </div>
    </div>
  );
}



export default ProjectCard;