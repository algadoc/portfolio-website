import React, { useEffect, useRef } from 'react';
import PDFJS from 'pdfjs-dist';
import Paper from '../components/Paper'
import './Resume.css'

export default function Resume() {
  
  return <div style={{display:'flex', justifyContent:'center'}} >
    <Paper>
    <header>
      <h1>Your Name</h1>
      <h2>Title</h2>
      <p>Contact information goes here</p>
    </header>
    <section>
      <h3>Summary</h3>
      <p>A summary of your skills and experiences goes here</p>
    </section>
    <section>
      <h3>Experience</h3>
      <h4>Company Name</h4>
      <h5>Title</h5>
      <p>A description of your responsibilities and achievements goes here</p>
    </section>
    <section>
      <h3>Education</h3>
      <h4>Degree</h4>
      <p>A description of your education goes here</p>
    </section>
    <section>
      <h3>Skills</h3>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    </section>
    </Paper>
    </div> 
    }