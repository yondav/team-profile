// imported modules
const inquirer = require('inquirer');

// imported modules from ./lib
const questionsModule = require('./src/questions');
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

// mock array of employees to run app without having to go through the inquirer prompts
// function test() {
//   const mockTeam = [
//     new Manager('John Doe', '01', 'john@company.com', '1.800.MAN.AGER'),
//     new Manager('Jane Smith', '02', 'jane@company.com', '1.800.CAL.JANE'),
//     new Manager('Nora Lopez', '03', 'nora@company.com', '1.800.CAL.NORA'),
//     new Engineer('Joe Russo', '04', 'joe@company.com', 'yondav'),
//     new Engineer('Craig Grizzly', '05', 'craig@company.com', 'yondav'),
//     new Engineer('Michelle Jackson', '06', 'michelle@company.com', 'yondav'),
//     new Engineer('Samantha Herk', '07', 'sammantha@company.com', 'yondav'),
//     new Engineer('Emily Wallace', '08', 'emily@company.com', 'yondav'),
//     new Engineer('Sarah Grey', '09', 'sarah@company.com', 'yondav'),
//     new Engineer('Richard Lilly', '10', 'richard@company.com', 'yondav'),
//     new Engineer('Francis Loizik', '11', 'francis@company.com', 'yondav'),
//     new Intern('Albert Ronson', '12', 'albert@company.com', 'Harvard University'),
//     new Intern('Sally Lindstar', '20', 'nora@company.com', 'Harvard University'),
//   ];
//   renderEmployeeCard(mockTeam, __dirname);
// }

// test();
