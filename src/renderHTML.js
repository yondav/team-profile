const { Employee } = require('../lib/classes');

function renderHTML() {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <link rel="stylesheet" href="styles.css" />
    </head>
    `;
}

function renderEmployeeCard() {
  let displayEmployee = team.map((Employee) => {
    return `
    <article class="team-member">
      <header>
        <h4>${res.name}</h4>
        <h5>${res.role}</h5>
      </header>
      <ul>
      <li>${res.id}</li>
      <li>${res.email}</li>
      <li></li>
      </ul>
  </article>`;
  });
}

// module.exports = renderEmployeeCard;
