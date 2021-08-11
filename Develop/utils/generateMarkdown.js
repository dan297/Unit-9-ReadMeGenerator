
function generateMarkdown(Projectinfo) {
  return `
  # ${Projectinfo.name}

  Table of Contents:
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [License](#License)
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Further Questions](#Questions)


  ## Description 
  ${Projectinfo.description}

  ## Installation
  ${Projectinfo.installation}

  ## Usage
  ${Projectinfo.usage}

  ## License
  ${Projectinfo.license}
  
  ## Contributing
  ${Projectinfo.contributing}

  ## Tests
  ${Projectinfo.tests}

  ## Questions
  For any questions use the following contact information:
  - [${Projectinfo.github}](https://github.com/${Projectinfo.github})
  - ${Projectinfo.email}

`;
}

module.exports = generateMarkdown;
