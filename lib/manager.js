const Employee = require('./employee');

// Manager subclass adds office number and overrides role from employee to manager. Adds method getOfficeNumber()
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = 'Manager';
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
