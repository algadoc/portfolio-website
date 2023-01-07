import ProjectList from "../components/ProjectList.js";

let projectList = [
  {
    "title": "Test 1",
    "intro": "This is my test 1!    ",
    "imageUrl": "./project_images/test1.jpg"
  },
  {
    "title": "Test 2",
    "intro": "This is my test 2!    ",
    "imageUrl": "./project_images/test2.jpg"
  },
  {
    "title": "Test 3",
    "intro": "This is my test 3!    ",
    "imageUrl": "./project_images/test3.jpg"
  }
];

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

export default function Portfolio() {
    return <div>
      <h1>Portfolio</h1>
      <hr style={{borders: "none", borderBottom: " 3px solid black", borderTop: " 0px solid black", width: "80%", margin: "10px auto", borderColor:"gray"}}/>
        <h2>AI Saturdays</h2>
        <ProjectList projects={AIprojectList} />
      <hr style={{borders: "none", borderBottom: " 3px solid black", borderTop: " 0px solid black", width: "80%", margin: "10px auto", borderColor:"gray"}}/>
        <h2>Georgia Tech Experimental Rocketry</h2>
        <ProjectList projects={projectList} />
      <hr style={{borders: "none", borderBottom: " 3px solid black", borderTop: " 0px solid black", width: "80%", margin: "10px auto", borderColor:"gray"}}/>
        <h2>Advanced System Design Laboratory</h2>
        <ProjectList projects={projectList} />
    </div>
  }
  