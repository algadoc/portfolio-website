import ProjectList from "../components/ProjectList.js";
let massivelist = [
  {
    "title": "AneurAI",
    "intro": "A machine learning algorithm that proposes the best course of treatment for patients with SBH",
    "imageUrl": "./project_images/LogoAneurisma.png"
  },
  {
    "title": "Astrobee Project Proposal",
    "intro": "A project proposal for a robotic mission destined to aid astronauts inside the ISS with their daily tasks.",
    "imageUrl": "./project_images/astrobeegraph.png"
  },
  {
    "title": "Fester Avionics",
    "intro": "Designed and operated the avionics system for a supersonic experimental rocket.",
    "imageUrl": "./project_images/festerflight.jpeg"
  },
  {
    "title": "Ignition Board",
    "intro": "Designed an ignition board capable of safely lighting an O-class solid rocket motor.",
    "imageUrl": "./project_images/pyroprotoboard.png"
  },
  {
    "title": "LUMIA",
    "intro": "A mission optimization tool for lunar surface missions.",
    "imageUrl": "./project_images/lumiafoto.png"
  },
  {
    "title": "Material Girl Flight Computer",
    "intro": "Designing and building a custom flight computer for a space-shot rocket.",
    "imageUrl": "./project_images/flightcomputeraltium.png"
  },
  {
    "title": "Mister Blue Sky",
    "intro": "Built the ground systems for a 2-stage solid rocket and operated them under stressful conditions in the Mohave Desert.",
    "imageUrl": "./project_images/mbslaunch.jpg"
  },
  {
    "title": "Motor Manufacturing",
    "intro": "My experience machining parts for high-power solid rocket motors.",
    "imageUrl": "./project_images/motormanufacturing.jpeg"
  },
  {
    "title": "Agile Architectures Final Report",
    "intro": "An analysis of techniques and approximations to the use of channel state information to estimate time-of-flight in OFDM communications for localization.",
    "imageUrl": "./project_images/ofdmsimulation.png"
  },
  {
    "title": "SamurAI",
    "intro": "A reinforcement learning algorithm that optimizes the use of first responder resources while minimizing time-to-accident.",
    "imageUrl": "./project_images/LogoSamurai.png"
  },
  {
    "title": "Sustainer Bay Design",
    "intro": "Designed and manufactured the sustainer avionics bay of a 30k feet 2-stage rocket.",
    "imageUrl": "./project_images/sustainerbay.png"
  },
  {
    "title": "Torsion Testing Jig",
    "intro": "Designing, manufacturing and operating an experimental stand to measure the shear modulus of composite fins.",
    "imageUrl": "./project_images/instrontest3.jpeg"
  }
]

let rocketProjects = [  
  {
    "title": "Material Girl Flight Computer",
    "intro": "Designing and building a custom flight computer for a space-shot rocket.",
    "imageUrl": "./project_images/flightcomputeraltium.png"
  },  
  {
    "title": "Ignition Board",
    "intro": "Designed an ignition board capable of safely lighting an O-class solid rocket motor.",
    "imageUrl": "./project_images/pyroprotoboard.png"
  },
  {
    "title": "Mister Blue Sky",
    "intro": "Built the ground systems for a 2-stage solid rocket and operated them under stressful conditions in the Mohave Desert.",
    "imageUrl": "./project_images/mbslaunch.jpg"
  },
  {
  "title": "Fester Avionics",
  "intro": "Designed and operated the avionics system for a supersonic experimental rocket.",
  "imageUrl": "./project_images/festerflight.jpeg"
  },  
  {
    "title": "Torsion Testing Jig",
    "intro": "Designing, manufacturing and operating an experimental stand to measure the shear modulus of composite fins.",
    "imageUrl": "./project_images/instrontest3.jpeg"
  },  
  {
    "title": "Motor Manufacturing",
    "intro": "My experience machining parts for high-power solid rocket motors.",
    "imageUrl": "./project_images/motormanufacturing.jpeg"
  }

]

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

let writtingSamples = [
  {
    "title": "Astrobee Project Proposal",
    "intro": "A project proposal for a robotic mission destined to aid astronauts inside the ISS with their daily tasks.",
    "imageUrl": "./project_images/astrobeegraph.png"
  },
  {
    "title": "Agile Architectures Report",
    "intro": "An analysis of techniques and approximations to the use of channel state information to estimate time-of-flight in OFDM communications for localization.",
    "imageUrl": "./project_images/ofdmsimulation.png"
  }

]

export default function Portfolio() {
    return <div>
      <h1>Portfolio</h1>
      <p>These are some of the project I have worked on over the last few years.</p>
      <hr style={{borders: "none", borderBottom: " 3px solid black", borderTop: " 0px solid black", width: "80%", margin: "10px auto", borderColor:"gray"}}/>
        <h2>Made at the Georgia Tech Experimental Rocketry team</h2>
        <ProjectList projects={rocketProjects} />
      <hr style={{borders: "none", borderBottom: " 3px solid black", borderTop: " 0px solid black", width: "80%", margin: "10px auto", borderColor:"gray"}}/>
        <h2>Made at AI Saturdays Madrid</h2>
        <ProjectList projects={AIprojectList} />
      <hr style={{borders: "none", borderBottom: " 3px solid black", borderTop: " 0px solid black", width: "80%", margin: "10px auto", borderColor:"gray"}}/>
        <h2>Writting Samples</h2>
        <ProjectList projects={writtingSamples} />
    </div>
  }
  