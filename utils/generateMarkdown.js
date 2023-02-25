// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}

`;
}

module.exports = { generateMarkdown };

// ## Installation
// ${installation}
//
// ## Usage
// ${usage}
//
// ## License
// ${license}
//
// ## Contributors
// ${contributors}
//
// ## Tests
// ${tests}
//
// ## Questions
// If you have any questions about this application 
// please see my repo at https://github.com/${questions_github}
// or email me at ${questions_email}