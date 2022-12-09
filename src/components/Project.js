import React from "react";

const Project = (props) => {
  const { title, location, dateRange, summary, description, pictures } = props;

  return (
    <div>
      <h4>{title}</h4>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Date Range:</strong> {dateRange}
      </p>
      <p>
        <strong>Summary:</strong> {summary}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <div>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${title} picture`} />
        ))}
      </div>
    </div>
  );
};

export default Project;
