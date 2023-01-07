const fs = require('fs');
const path = require('path');

const PROJECTS_FOLDER = './projects';
const PAGES_FOLDER = './pages';

// Read all JSON files in the projects folder
const projectFiles = fs.readdirSync(PROJECTS_FOLDER).filter((file) => file.endsWith('.json'));

// Parse the JSON files and create an array of project objects
const projects = projectFiles.map((file) => {
  const filePath = path.join(PROJECTS_FOLDER, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
});

// Generate the required import calls
const importCalls = projects.map((project) => {
  let temp = project.title.toLowerCase().replace(/\s/g, '');
  let route = temp.charAt(0).toUpperCase() + temp.slice(1);
  return `import ${route}Page from "./pages/${route}Page"; `
}).join('\n');

// Generate the required <Router /> calls
const routerCalls = projects.map((project) => {
  let temp = project.title.toLowerCase().replace(/\s/g, '');
  let route = temp.charAt(0).toUpperCase() + temp.slice(1);
  return `<Route path="/portfolio/${route}" element={<${route}Page />} />`;
}).join('\n');

// Generate the required page templates and save them to separate files
projects.forEach((project) => {
  let temp = project.title.toLowerCase().replace(/\s/g, '');
  let route = temp.charAt(0).toUpperCase() + temp.slice(1);
  const filePath = path.join(PAGES_FOLDER, `${route}Page.js`);

  if (!fs.existsSync(filePath)) {
    const pageTemplate = `export default function ${route}Page() {
    return <div>
        <h1 className="projectTitle">${project.title}</h1>
        <h2 className="projectIntro">${project.intro}</h2>
      </div>
      
    }`;
    fs.writeFileSync(filePath, pageTemplate, 'utf8');
  }
});

// Generate the required project info array
const projectInfoArray = JSON.stringify(projects, null, 2);

// Output the generated code
console.log(importCalls);
console.log(routerCalls);
console.log(projectInfoArray);
