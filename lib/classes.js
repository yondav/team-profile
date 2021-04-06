// Employee class establishes universal properties for all team members
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

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

module.exports = {
  Employee: Employee,
  Manager: Manager,
  Engineer: Engineer,
  Intern: Intern,
};
