// array of questions for user
const questions = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt(questions).then((response) => {

     fs.writeFile("README2.md", `## Title

${response.title}

## Description

${response.description}

## Installation

\`\`\`${response.installation}\`\`\`

## Usage

${response.usage}

## Contribution

${response.contribution}

## Project Testing

${response.test}

## License

![License](https://img.shields.io/badge/License-${response.license}-blue)

## Gihub Username

<strong><em>[Github Profile](https://github.com/${response.github})</em></strong>

## Email Contact

${response.email}


    `,(err) =>
    err ? console.log(err) : console.log("Success!") ) 
    })



    



// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
