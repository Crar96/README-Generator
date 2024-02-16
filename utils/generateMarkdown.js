
function generateLicenseBadge(license) {
  if (license !== 'none') {
    return '';
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${generateLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
