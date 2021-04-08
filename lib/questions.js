const chalk = require('chalk');

// questions for all employees
const questions = [
  {
    name: 'role',
    type: 'list',
    message: "Please select employee's role",
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    name: 'name',
    type: 'input',
    message: 'Employee Full Name',
  },
  {
    name: 'id',
    type: 'input',
    message: 'Employee ID number',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Employee Email Address',
  },
];

// Additional question for manager
const managerQuestion = {
  name: 'officeNumber',
  type: 'input',
  message: 'Office Number',
};

// Additional question for engineer
const engineerQuestion = {
  name: 'github',
  type: 'input',
  message: 'Github Username',
};

// Additional question for intern
const internQuestion = {
  name: 'school',
  type: 'input',
  message: "Intern's current school",
};

// Add another employee
const addEmployee = {
  name: 'addEmployee',
  type: 'confirm',
  message: 'Add Employee?',
  default: true,
};

chalk.hex('#d07bb3')(questions.message);

module.exports = {
  questions: questions,
  managerQuestion: managerQuestion,
  engineerQuestion: engineerQuestion,
  internQuestion: internQuestion,
  addEmployee: addEmployee,
};
