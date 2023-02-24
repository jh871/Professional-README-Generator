// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${description}





`;
}

module.exports = generateMarkdown;

// ## Installation
// ${installation}
