const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, role and github username', () => {
      const engineer = new Engineer('Jacob Degrom', 48, 'thegoat@mets.com', 'cygrom');

      expect(engineer.name).toEqual('Jacob Degrom');
      expect(engineer.id).toEqual(48);
      expect(engineer.email).toEqual('thegoat@mets.com');
      expect(engineer.role).toEqual('Engineer');
      expect(engineer.github).toEqual('cygrom');
    });
  });
});
