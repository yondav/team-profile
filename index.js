// imported modules
const fs = require('fs');
const inquirer = require('inquirer');
const questionsModule = require('./lib/questions');
const classesModule = require('./lib/classes');
const questions = require('./lib/questions');

function ask() {
  inquirer
    .prompt(questionsModule.addEmployee)
    .then(({ addEmployee }) => {
      if (addEmployee === true) {
        inquirer.prompt(questionsModule.questions);
      } else {
        return;
      }
    })
    .then(({ role }) => {
      if (role === 'Manager') {
        inquirer.prompt(questionsModule.managerQuestion);
      }
      if (role === 'Engineer') {
        inquirer.prompt(questionsModule.engineerQuestion);
      }
      if (role === 'Intern') {
        inquirer.prompt(questionsModule.internQuestion);
      }
    });
}

ask();
