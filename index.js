// imported modules
const fs = require('fs');
const inquirer = require('inquirer');
const questionsModule = require('./lib/questions');
const classesModule = require('./lib/classes');
const { Manager, Engineer, Intern } = require('./lib/classes');

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
    }
  });
}

ask();
