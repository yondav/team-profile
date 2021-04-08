const fs = require('fs');
const path = require('path');

function renderEmployeeCard(x, filePath) {
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
      <link rel="stylesheet" href="./style.css" />
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
        ${getIcon(Employee)}
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

function getIcon(employee) {
  switch (employee.role) {
    case 'Manager':
      return `<h3>${employee.role} <i class="fas fa-user-secret fa-lg"></i></h3>`;
    case 'Engineer':
      return `<h3>${employee.role} <i class="fas fa-laptop-code fa-lg"></i></h3>`;
    case 'Intern':
      return `<h3>${employee.role} <i class="fas fa-user-graduate fa-lg"></i></i></h3>`;
  }
}
function getExtra(employee) {
  switch (employee.role) {
    case 'Manager':
      return `
      <span><i class="fas fa-phone fa-lg"></i></span>
      <span><a href="tel:+${employee.officeNumber}">${employee.officeNumber}</a></span>
      `;
    case 'Engineer':
      return `
      <span><i class="fab fa-github fa-lg"></i></span>
      <span><a href="https://github.com/${employee.github}">github.com/${employee.github}</a></span>
      `;
    case 'Intern':
      return `
      <span><i class="fas fa-university fa-lg"></i></span>
      <span>${employee.school}</span>
      `;
  }
}

function writeHTML(html, filePath) {
  const dir = path.join(filePath, 'dist');
  fs.mkdir(dir, { recursive: true }, (err) => {
    err ? console.error(err) : process.chdir(dir);
    fs.writeFileSync('team.html', html);
    fs.writeFileSync('style.css', CSS);
  });
}

module.exports = renderEmployeeCard;
