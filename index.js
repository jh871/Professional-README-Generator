const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    // {
    // type: 'input',
    // name: 'instructions',
    // message: 'To enter your answers please type the text in the prose you expect it to appear. WARNING: Pressing the Enter key while typing an answer will move to the next question. To generate a new line use <br>. To use bullet points: use "<br> - " with <br> after each point and a space after the hyphen, or use numbered points (1. abc <br>2. def <br>3. xyz) with <br> after each point. To check the existing file structure please view generateMarkdown.js in the utils folder. Press Enter to continue.'
    // },
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your application: '
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Please provide guidance on how the application can be installed: '
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Please provide information on how the application should be used: '
    },
    {
    type: 'list',
    name: 'license',
    message: 'Please select the license for you application:',
    choices: ['MIT', 'Apache', 'GPL v3', 'IBM', 'Mozilla', 'SIL']
    },
    {
    type: 'input',
    name: 'contributors',
    message: 'Please list anyone else who collaborated on this project:'
    },
    {
    type: 'input',
    name: 'tests',
    message: '??????????'
    },
    {
    type: 'input',
    name: 'questions_github',
    message: 'Please enter your gitHub username:'
    },
    {
    type: 'input',
    name: 'questions_email',
    message: 'Please enter your email address:'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Check current directory for file!"));
};


// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        //function to generate badge?

        console.log(data.license);
        console.log(typeof data.license);
        writeToFile('test1.md', generateMarkdown.generateMarkdown(data))
    });
};

// function call to initialize program
init();
