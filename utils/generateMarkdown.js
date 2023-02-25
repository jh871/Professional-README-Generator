// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description
${data.description}

## Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under a ${data.license} license. Please see the repo for full license.

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
If you have any questions about this application please see my repo at https://github.com/${data.questions_github} or email me at ${data.questions_email}

`;
}

module.exports = { generateMarkdown };

