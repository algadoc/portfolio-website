import "./About.css"
import HeadshotImage from "../assets/headshot.JPG"
import ProjectList from "../components/ProjectList.js";

let AIprojectList = [
  {
    "title": "AneurAI",
    "intro": "A machine learning algorithm that proposes the best course of treatment for patients with subarrachnoid brain haemmorage",
    "imageUrl": "./project_images/LogoAneurisma.png"
  },
  {
    "title": "SamurAI",
    "intro": "A reinforcement learning algorithm that optimizes the use of first responder resources while minimizing time-to-accident for the city of Madrid.",
    "imageUrl": "./project_images/LogoSamurai.png"
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
    <ProjectList projects={AIprojectList} />

    </div>
  )
}
