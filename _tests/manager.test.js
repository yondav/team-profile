const Manager = require('../lib/manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, role and officeNumber', () => {
      const manager = new Manager('Terry Collins', 10, 'terry@mets.com', '1-800-TER-RY10');
      expect(manager.name).toEqual('Terry Collins');
      expect(manager.id).toEqual(10);
      expect(manager.email).toEqual('terry@mets.com');
      expect(manager.role).toEqual('Manager');
      expect(manager.officeNumber).toEqual('1-800-TER-RY10');
    });
    it('should have methods: getName, getId, getEmail, getRole, getOfficeNumber', () => {
      const manager = new Manager('Terry Collins', 10, 'terry@mets.com', '1-800-TER-RY10');
      expect(manager.getName).toBeDefined();
      expect(manager.getId).toBeDefined();
      expect(manager.getEmail).toBeDefined();
      expect(manager.getRole).toBeDefined();
      expect(manager.getOfficeNumber).toBeDefined();
    });
    it('should return values for name, id, email, role and github username when methods are called', () => {
      const manager = new Manager('Terry Collins', 10, 'terry@mets.com', '1-800-TER-RY10');
      expect(manager.getName()).toEqual('Terry Collins');
      expect(manager.getId()).toEqual(10);
      expect(manager.getEmail()).toEqual('terry@mets.com');
      expect(manager.getRole()).toEqual('Manager');
      expect(manager.getOfficeNumber()).toEqual('1-800-TER-RY10');
    });
  });
});
