import React from 'react';
import './Experience.css'

function Experience(props) {
  return (
    <div className="experience">
        <div className='title-column'>      
            <div className="experience-name">{props.name || 'Experience Name'}</div>
            <div className="experience-title">{props.title || 'Experience Title'}</div>
        </div>
      <div className="experience-dates">{props.dates || 'Experience Dates'}</div>
    </div>
  );
}

export default Experience;
