import ProjectList from "../components/ProjectList.js";

let project1 = {  title: "Test 1",
              intro: "This is my test 1!",
              imageUrl: "./project_images/test1.jpg"
            
};

let project2 = {  title: "Test 2",
intro: "This is my test 2!",
imageUrl: "./project_images/test2.jpg"

};

let projectList = [project1, project2];

export default function Portfolio() {
    return <div>
      <h1>Portfolio lol</h1>
        <ProjectList projects={projectList} />
    </div>
  }
  