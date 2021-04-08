const Employee = require('../lib/employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id and email', () => {
      const employee = new Employee('Francisco Lindor', 12, 'mrsmile@mets.com');

      expect(employee.name).toEqual('Francisco Lindor');
      expect(employee.id).toEqual(12);
      expect(employee.email).toEqual('mrsmile@mets.com');
      expect(employee.role).toEqual('Employee');
    });
    it('should have methods: getName, getId, getEmail, getRole', () => {
      const employee = new Employee('Francisco Lindor', 12, 'mrsmile@mets.com');
      expect(employee.getName).toBeDefined();
      expect(employee.getId).toBeDefined();
      expect(employee.getEmail).toBeDefined();
      expect(employee.getRole).toBeDefined();
    });
    it('should return values for name, id, email and role when methods are called', () => {
      const employee = new Employee('Francisco Lindor', 12, 'mrsmile@mets.com');
      expect(employee.getName()).toEqual('Francisco Lindor');
      expect(employee.getId()).toEqual(12);
      expect(employee.getEmail()).toEqual('mrsmile@mets.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
