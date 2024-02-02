// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const questions = require("./data/questions");
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README.md generated successfully!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("output/README.md", markdownContent);
  });
}

// Function call to initialize app
init();
