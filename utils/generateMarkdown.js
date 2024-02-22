
function generateLicenseBadge(license) {
  if (license !== "none") {
    return `[![License: ${license}](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)](https://opensource.org/licenses/${encodeURIComponent(license)})`;
  }
    return '';
  }

function createLicenseSection(license) {
  if (license !== "none") {
    return `## License
      Licensed under the [${license}](https://opensource.org/licenses/${encodeURIComponent(license)}) license`;
  }
  return "";
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${generateLicenseBadge(data.license)}
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Licenses
${data.license}
## Contributors
${data.contributing}
## Tests
${data.tests}
## Questions
* GitHub - [${data.questionsgit}]https://github.com/${data.questionsgit}
* Email - [${data.questionsemail}]
`;
}

module.exports = generateMarkdown;
