// function to generate markdown for README
function generateMarkdown(data) {
    let license = data.license;
    if (license === 'MIT') {
        license =  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === 'Apache') {
        license =  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'GPL v3') {
        license =  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'IBM') {
        license =  '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
    } else if (license === 'Mozilla') {
        license =  '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else if (license === 'SIL') {
        license =  '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
    };


return `# ${data.title}
${license}


## Description
${data.description}.


## Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)


-------
## Installation
${data.installation}.

-------
## Usage
${data.usage}.

-------
## License
This application is covered under ${data.license} license. Please see the repo for full license.

-------
## Contributing
Current contributors:

${data.contributors}

If you wish to contribute to this product please see contact information in Questions section below.

-------
## Tests
${data.tests}.

-------
## Questions
If you have any questions about this application please see my repo at https://github.com/${data.questions_github} or email me at ${data.questions_email}.

`;
};

module.exports = { generateMarkdown };