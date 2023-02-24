const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
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
    message: 'Please select the license for you application:'
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
function writeToFile(`${title}.md`, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
