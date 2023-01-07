import "./About.css"
import HeadshotImage from "../assets/headshot.JPG"
import ProjectList from "../components/ProjectList.js";

let latestProjects = [
  {
    "title": "Material Girl Flight Computer",
    "intro": "Designing and building a custom flight computer for a space-shot rocket.",
    "imageUrl": "./project_images/flightcomputeraltium.png"
  },
  {
    "title": "Mister Blue Sky",
    "intro": "Built the ground systems for a 2-stage solid rocket and operated them under stressful conditions in the Mohave Desert.",
    "imageUrl": "./project_images/mbslaunch.jpg"
  }
]

export default function About() {
  return (
    <div className="main-div">

      <div className="bio-div">
        <img className = "headshot-img" src={HeadshotImage} />
        <p className = "bio-p"> 
        Hi! I am Alfonso Lagares <br/>
        I study Aerospace Engineering at the Georgia Institute of Technology<br/>
        My main interests are:

        <ul className="bio-list">
          <li>Avionics & Embedded systems design</li>
          <li>Systems Engineering & Optimization</li>
          <li>AI & Telecommunications</li> 
        </ul>
        </p>
      </div>

    <hr style={{borders: "none", borderBottom: " 3px solid black", borderTop: " 1px solid black", width: "80%", margin: "0 auto", borderColor:"gray"}}/>
    <h1>Latest Projects:</h1>
    <ProjectList projects={latestProjects} />

    </div>
  )
}
