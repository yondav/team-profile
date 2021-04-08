const Employee = require('./employee');

// Intern subclass adds school and overrides role from employee to intern. Adds method getSchool()
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = 'Intern';
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
