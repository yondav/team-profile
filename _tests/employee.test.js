const Employee = require('../lib/employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id and email', () => {
      const employee = new Employee('Francisco Lindor', 12, 'mrsmile@mets.com');

      expect(employee.name).toEqual('Francisco Lindor');
      expect(employee.id).toEqual(12);
      expect(employee.email).toEqual('mrsmile@mets.com');
    });
  });
});
