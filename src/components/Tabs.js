import React, { useState } from "react";
import "./Tabs.css";
import ProjectsList from "./Project";
const Tabs = () => {
  const [selected, setSelected] = useState("landing");
  const [style, setStyle] = useState("dark");
  const [showAnimation, setShowAnimation] = useState(true);

  const handleClick = (e) => {
    setShowAnimation(false);
    setTimeout(() => {
      setSelected(e.target.innerText.toLowerCase());
      setShowAnimation(true);
    }, 300);
  };

  const handleChange = (e) => {
    setStyle(e.target.value);
  };

  return (
    <div>
      <h2>Tabs:</h2>
      <ul>
        <li
          onClick={handleClick}
          className={`${style} ${selected === "landing" ? "selected" : ""}`}
        >
          Landing Page
        </li>
        <li
          onClick={handleClick}
          className={`${style} ${selected === "resume" ? "selected" : ""}`}
        >
          Resume
        </li>
        <li
          onClick={handleClick}
          className={`${style} ${selected === "projects" ? "selected" : ""}`}
        >
          Projects
        </li>
        <li
          onClick={handleClick}
          className={`${style} ${
            selected === "contact information" ? "selected" : ""
          }`}
        >
          Contact Information
        </li>
      </ul>
      <div>
        <label>
          Style:
          <select value={style} onChange={handleChange}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="blue">Blue</option>
          </select>
        </label>
      </div>
      <div className={`fade-in-out ${showAnimation ? "show" : ""}`}>
        {selected === "landing" && (
          <div>
            <h3>Landing Page</h3>
            <p>Welcome to my portfolio website!</p>
          </div>
        )}
        {selected === "resume" && (
          <div>
            <h3>Resume</h3>
            <p>Here is my resume.</p>
          </div>
        )}
        {selected === "projects" && (
          <div>
            <h3>Projects</h3>
            <p>Here are some of my projects.</p>
            <ProjectsList />
          </div>
        )}
        {selected === "contact information" && (
          <div>
            <h3>Contact Information</h3>
            <p>You can reach me at john.doe@gmail.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;