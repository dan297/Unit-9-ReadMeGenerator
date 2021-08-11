//bringing in library
const inquirer = require('inquirer');
//bringing in file system
const fs = require('fs');
// bringing in markdown on local files
const generatePage = require('./Develop/utils/generateMarkdown.js');

//creating questions so the user can input answers 
const promptQuestions = () => {
  return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is the project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project description?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation requirements?'
  },
  { 
    type: 'input',
    name: 'usage',
    message: 'Project usage?'
  },
  {
    type: 'list',
    name: 'license',
    message: "What license covers the app? (Scroll to select different options)",
    choices: ['MIT License', 'The Unlicense', 'Apache License 2.0', 'Boost Software','No License']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Did anyone else contribute?'
  },
  {
    type: 'input',
    name: 'tests',
    message:'Does the project include any tests?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github profile name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }])}


// initializing app
function init() {
  promptQuestions()
  .then(projectInfo => {
    const createFile = generatePage(projectInfo)
    //creating the readMe file
    fs.writeFile('./ReadMe.MD',createFile, err=> {
      console.log('Success!! Page created!! :)')
    })
  })
}
// Function call to initialize app
init();
