const fs = require('fs');
const path = require('path');

function renderEmployeeCard(x, filePath) {
  // let displayEmployee = x.map((Employee) => {
  let HTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <link rel="stylesheet" href="./src/template.css" />
    </head>
  
    <body>
      <header>
        <h1>The Team</h1>
      </header>
      <div class="cards">`;

  x.forEach((Employee) => {
    HTML += `

    
    <article class="team-member">
      <div class="card-header">
        <h2>${Employee.name}</h2>
        <h3>${Employee.role}</h3>
      </div>
      <div class="card-content">
        <div class="id">
          <span>ID:</span>
          <span>${Employee.id}</span>
        </div>
        <div class="email">
          <span>Email:</span>
          <span><a href="mailto:${Employee.email}">${Employee.email}</a></span>
        </div>
        <div class="extra">
          ${getExtra(Employee)}
        </div>
      </div>
    </article>
  `;
  });

  HTML += `</div>
  </body>
  </html>`;

  writeHTML(HTML, filePath);
}

function getExtra(employee) {
  switch (employee.role) {
    case 'Manager':
      return `
      <span>Office Number:</span>
      <span><a href="tel:+${employee.officeNumber}">${employee.officeNumber}</a></span>
      `;
    case 'Engineer':
      return `
      <span>Github:</span>
      <span><a href="https://github.com/${employee.github}">${employee.github}</a></span>
      `;
    case 'Intern':
      return `
      <span>School:</span>
      <span>${employee.school}</span>
      `;
  }
}

function writeHTML(html, filePath) {
  fs.writeFileSync(path.join(filePath, 'team.html'), html);
}

module.exports = renderEmployeeCard;
