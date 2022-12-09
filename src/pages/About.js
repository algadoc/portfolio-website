import "./About.css"
import HeadshotImage from "../assets/headshot.JPG"
export default function About() {
  return (
    <div className="main-div">

      <div className="bio-div">
        <img className = "headshot-img" src={HeadshotImage} />
        <p className = "bio-p"> 
        Hi! I am Alfonso Lagares <br/>
        I study Aerospace Engineering &#x1f680;<br/> at the Georgia Institute of Technology 🐝<br/>
        I also
        <ul className="bio-list">
          <li>Design and build avionics for rockets</li>
          <li>Research cislunar mission planning & optimization &#127761;</li>
          <li>Tinker with AI and Systems Engineering</li>
        </ul>
        </p>
      </div>

    <hr style={{borders: "none", borderBottom: " 3px solid black", width: "80%", margin: "0 auto", borderColor:"gray"}}/>
    <h1>Latest Projects:</h1>
    
    </div>
  )
}
