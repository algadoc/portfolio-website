import React, { useEffect, useRef } from 'react';
import PDFJS from 'pdfjs-dist';
import Paper from '../components/Paper'
import Experience from '../components/Experience';
import './Resume.css'

export default function Resume() {
  
  return <div style={{display:'flex', justifyContent:'center'}} >
    <Paper>
    <header>
      <h1>Alfonso Lagares de Toledo</h1>
      <p>Atlanta, GA 30332 ● (845) 776 1341 ● alagares@gatech.edu ● Spanish Citizen</p>
    </header>
    <main>
        <h3>Education</h3>
        <hr />
        <Experience name="Georgia Institute of Technology" dates="Expected - May 2025" title="Bachelor of Science in Aerospace Engineering" />
        <ul>
          <li>Relevant courses on Avionics integration, Guidance and Control & Dynamics </li>
        </ul>
        <h3>Technical Skills</h3>
        <hr />
        <p>Software: Simulink, Autodesk Inventor & CFD, SolidWorks, Altium, Ansys Fluid, LaTeX</p>
        <p>Languages/Tools: Python, MATLAB, JavaScript, C, Java, Git </p>
        <p>Other skills: Machine/Deep/Reinforcement Learning (Sklearn & Keras in Python), Lathe & Mill machining</p>
        <h3>Experience</h3>
        <hr />
        <Experience name="Georgia Tech Experimental Rocketry" dates="August 2021 - Present" title="Avionics Lead" />
        <ul>
          <li>Lead a team of 15 students and $60,000 budget to build the complete avionics stack for a two-stage rocket</li>
          <li>Designed, built, and programmed a custom flight computer to control the vehicle and record attitude and position data</li>
          <li>Managed the integration of avionics systems with the rest of the vehicle, ensuring system requirements were met</li>
          <li>Interfaced with over 20 external part providers to ensure ICs were procured at a timeline manner</li>
          <li>Wrote FAA COA application to establish a no-fly zone over our launch zone in the Mohave Desert </li>
          <li>Ensured system resilience and safety in the event of sensor or mechanical failures using Kalman filters</li>
          <li>Mentored students in the use of Altium and C to build their own avionics systems</li>
        </ul>						     			       

        <Experience name="Intro to MATLAB (CS1371)" dates="January 2022 - January 2023" title="Teacher Assistant" />
        <ul>
        <li>Prepared material and lead recitation sessions, providing students with 1-on-1 help  </li>            
        <li>Proctored and grade exam sessions of ~250 students</li>
        <li>Wrote aid packages and documentation for students to understand the class material</li>
        </ul>

        <Experience name="AI Saturdays" dates="September 2018 - May 2022" title="Lecturer" />				    
        <ul>
          <li>Gave lectures on Data Analysis, Random Forests and Neural Networks to post-graduate students</li>
          <li>Mentored student projects where AI was applied to medicine, engineering, and other related fields</li>
        </ul>

        <h3>Research</h3>
        <hr />

        <Experience name="Advanced Systems Design Laboratory" dates="January 2022 – Present" title="Undergraduate Research Assistant" />				    
        <ul>
          <li>Developed systems engineering approach to the establishment of long-term lunar outposts</li>
          <li>Analyzed requirements for future lunar missions, created database system to store capabilities and stakeholder profiles</li>
          <li>Built a data-powered dashboard for geo-located scenario visualization, enabling war-gaming at the mission event level</li>
        </ul>

        <Experience name="Agile Communication Architectures" dates="August 2022 – January 2023" title="Research Fellow" />				    
        <ul>
          <li>Designed localization system based on time-of-flight measurements of Wi-Fi packets</li>
          <li>Developed methods to reduce noise from multi pathing and interference using OFDM properties</li>
          <li>Proposed simulation method to collect channel-state data, saved $15,000 and 50 work hours by eliminating the use of high-end software defined radios</li>
        </ul>
        
    </main>
    </Paper>
    </div> 
    }
