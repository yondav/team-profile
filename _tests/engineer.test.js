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
    it('should have methods: getName, getId, getEmail, getRole, getGithub', () => {
      const engineer = new Engineer('Jacob Degrom', 48, 'thegoat@mets.com', 'cygrom');
      expect(engineer.getName).toBeDefined();
      expect(engineer.getId).toBeDefined();
      expect(engineer.getEmail).toBeDefined();
      expect(engineer.getRole).toBeDefined();
      expect(engineer.getGithub).toBeDefined();
    });
    it('should return values for name, id, email, role and github username when methods are called', () => {
      const engineer = new Engineer('Jacob Degrom', 48, 'thegoat@mets.com', 'cygrom');
      expect(engineer.getName()).toEqual('Jacob Degrom');
      expect(engineer.getId()).toEqual(48);
      expect(engineer.getEmail()).toEqual('thegoat@mets.com');
      expect(engineer.getRole()).toEqual('Engineer');
      expect(engineer.getGithub()).toEqual('cygrom');
    });
  });
});
