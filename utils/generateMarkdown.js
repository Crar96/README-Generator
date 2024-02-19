
function generateLicenseBadge(license) {
  if (license !== 'none') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
    return '';
  }

  




// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${generateLicenseBadge(data.license)}
## table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
