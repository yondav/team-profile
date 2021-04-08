const chalk = require('chalk');

// questions for all employees
const questions = [
  {
    name: 'role',
    type: 'list',
    message: chalk.hex('#d07bb3')("Please select employee's role"),
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    name: 'name',
    type: 'input',
    message: chalk.hex('#d07bb3')('Employee Full Name'),
  },
  {
    name: 'id',
    type: 'input',
    message: chalk.hex('#d07bb3')('Employee ID number'),
  },
  {
    name: 'email',
    type: 'input',
    message: chalk.hex('#d07bb3')('Employee Email Address'),
  },
];

// Additional question for manager
const managerQuestion = {
  name: 'officeNumber',
  type: 'input',
  message: chalk.hex('#7BD097')('Office Number'),
};

// Additional question for engineer
const engineerQuestion = {
  name: 'github',
  type: 'input',
  message: chalk.hex('#E6B462')('Github Username'),
};

// Additional question for intern
const internQuestion = {
  name: 'school',
  type: 'input',
  message: chalk.hex('#74AEE4')("Intern's current school"),
};

// Add another employee
const addEmployee = {
  name: 'addEmployee',
  type: 'confirm',
  message: chalk.hex('#E47474')('Add Employee?'),
  default: true,
};

module.exports = {
  questions: questions,
  managerQuestion: managerQuestion,
  engineerQuestion: engineerQuestion,
  internQuestion: internQuestion,
  addEmployee: addEmployee,
};
