// Packages required for the application to run
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { log } = require("console");

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
    name: "installation",
    message: "enter an installation guide for this project",
  },

  {
    type: "input",
    name: "usage",
    message: "State the technologies or languages being used for this project",
  },

  {
    type: "list",
    name: "license",
    message: "Select a license to be used for this project",
    choices: ["MIT", "Apache 2.0", "ISC", "BSD 3-Clause", "BSD 2-Clause", "none"],
  },

  {
    type: "input",
    name: "contributing",
    message: "List any contributors who have worked on this project",
  },


  {
    type: "input",
    name: "tests",
    message: "enter a guide on tests if neccesary",
  },

  {
    type: "input",
    name: "questions",
    message: "enter your GitHub username",
  },


];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Generating README.md file...");
    writeToFile("./dist/README.md", generateMarkdown({...responses}));
  });
}


// function call to initialize program
init();
