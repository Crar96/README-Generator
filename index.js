// Packages required for the application to run
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [ 
  {
    type: "input",
    name: "title",
    message: "What will you name your project?",
  },
  
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of the functionality and purpose of the project",
  },

  {
    type: "input",
    name: "GitHub",
    message: "add the github username associated with this project",
  },
  
  {
    type: "input",
    name: "contributors",
    message: "List any contributors who have worked on this project",
  },

  {
    type: "input",
    name: "license",
    message: "Select a license to be used for this project",
    licenses: ["MIT", "Apache 2.0", "ISC", "BSD 3-Clause", "BSD 2-Clause", "None"],
  },

  {
    type: "input",
    name: "technologies",
    message: "State the technologies or languages being used for this project",
  },

];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then

}

// function call to initialize program
init();
