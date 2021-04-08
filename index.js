// imported modules
const fs = require('fs');
const inquirer = require('inquirer');

// imported modules from ./lib
const questionsModule = require('./lib/questions');
const renderEmployeeCard = require('./src/renderHTML');
const renderCSS = require('./src/renderCSS');

// imported variables
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const team = [];

function ask() {
  inquirer.prompt(questionsModule.addEmployee).then(({ addEmployee }) => {
    if (addEmployee === true) {
      inquirer.prompt(questionsModule.questions).then((res) => {
        switch (res.role) {
          case 'Manager':
            inquirer
              .prompt(questionsModule.managerQuestion)
              .then((man) => {
                let manager = new Manager(res.name, res.id, res.email, man.officeNumber);
                team.push(manager);
                ask();
              })
              .catch((err) => {
                if (err) throw err;
              });
            break;
          case 'Engineer':
            inquirer
              .prompt(questionsModule.engineerQuestion)
              .then((eng) => {
                let engineer = new Engineer(res.name, res.id, res.email, eng.github);
                team.push(engineer);
                ask();
              })
              .catch((err) => {
                if (err) throw err;
              });
            break;
          case 'Intern':
            inquirer.prompt(questionsModule.internQuestion).then((int) => {
              let intern = new Intern(res.name, res.id, res.email, int.school);
              team.push(intern);
              ask();
            });
        }
      });
    } else {
      renderEmployeeCard(team, __dirname);
    }
  });
}

ask();

// function init() {
//   ask();
// }

// init();

// function test() {
//   const mockTeam = [
//     new Manager('john', '10', 'email@email.com', '111.111.1111'),
//     new Engineer('Jane', '15', 'jane@email.com', 'jane'),
//     new Intern('Nora', '20', 'nora@gmail.com', 'university'),
//   ];
//   renderEmployeeCard(mockTeam, __dirname);
// }

// test();
