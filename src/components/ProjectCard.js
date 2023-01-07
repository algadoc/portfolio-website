import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, useMatch, useResolvedPath, useNavigate} from "react-router-dom";

function ProjectCard({ project }) {
  const defaultImage = "project_images/test1.jpg";
  const navigate = useNavigate();

  const handleClick = () => {
    const path = '/portfolio/' + project.title.toLowerCase().replace(/\s/g, '');
    navigate(path, { replace: true });
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

  let imageStyles = {
    width: '50%',
    height: '100%',
    backgroundImage: `url(${project.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '5px 0 0 5px',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
  }

  let textStyles = {
      width: '50%',
      height: '100%',
      padding: '10px',
      margin: '0 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
  }

  let titleSize = 'min(2.6vw, 40px)';
  let introSize = 'max(0.8vw, 12px)';

  if (window.innerWidth < 700) {
    topStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '70vw',
    height: 'auto',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '5px',
    margin: '10px',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    overflow: 'hidden',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    alignItems: 'center',
    justifyContent: 'center'
    }

    imageStyles = {
      width: '100%',
      height: '30vh',
      backgroundImage: `url(${project.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '5px 0 0 5px',
      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
      alignSelf: 'center',
      justifyContent: 'center'
    }

    textStyles ={
      width: '100%',
      height: 'auto',
      padding: '10px',
      margin: '0 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center'
    }

    titleSize = '24px';
    introSize = '14px';
}
  return (
    <div style={topStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div style={imageStyles}  
      onError={(e) => {
        e.target.backgroundImage = defaultImage
      }} 
      />
      <div style={textStyles}>
        <h3 style={{ margin: 0, fontSize: titleSize, alignSelf:'center' }}>{project.title}</h3>
        <p style={{
          fontSize: introSize,
          lineHeight: '1.2',
          margin: '10px 0',
          overflow: 'show',
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