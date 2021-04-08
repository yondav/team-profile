const Employee = require('./employee');

// Engineer subclass adds github and overrides role from employee to engineer. Adds method getGithub()
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = 'Engineer';
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
