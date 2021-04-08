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
  });
});
