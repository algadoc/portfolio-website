import React, { useState, useEffect, useRef } from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {ReactComponent as StyledName} from "./icons/nameStyled.svg";
import {ReactComponent as SquareGithub} from "./icons/square-github.svg";
import {ReactComponent as SquareLinkedin} from "./icons/linkedin.svg";
import "./Navbar.css";

export default function Navbar() {

  return (
    <nav className="header-nav">
      <nav className="top-nav" >
        <Link to="/about" className="name-container">
          <StyledName className="styled-name"/> 
        </Link>
        
        <nav className="icon-nav">
          <a href="https://github.com/algadoc">
            <SquareGithub className="media-icons"/>
          </a>
          <a href="https://www.linkedin.com/in/alagaresdetoledo/">
            <SquareLinkedin className="media-icons" />
          </a>
        </nav>

      </nav>
      <hr style={{borders: "none", borderBottom: " 1px solid black", width: "98%", margin: "0 auto", borderColor:"gray"}}/>
      <ul className="bottom-nav">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : "hover-underline-animation"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
