const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, role and school', () => {
      const intern = new Intern('Luis Rojas', 19, 'ro@mets.com', '7-Line University');

      expect(intern.name).toEqual('Luis Rojas');
      expect(intern.id).toEqual(19);
      expect(intern.email).toEqual('ro@mets.com');
      expect(intern.role).toEqual('Intern');
      expect(intern.school).toEqual('7-Line University');
    });
    it('should have methods: getName, getId, getEmail, getRole, getSchool', () => {
      const intern = new Intern('Luis Rojas', 19, 'ro@mets.com', '7-Line University');
      expect(intern.getName).toBeDefined();
      expect(intern.getId).toBeDefined();
      expect(intern.getEmail).toBeDefined();
      expect(intern.getRole).toBeDefined();
      expect(intern.getSchool).toBeDefined();
    });
    it('should return values for name, id, email, role and github username when methods are called', () => {
      const intern = new Intern('Luis Rojas', 19, 'ro@mets.com', '7-Line University');
      expect(intern.getName()).toEqual('Luis Rojas');
      expect(intern.getId()).toEqual(19);
      expect(intern.getEmail()).toEqual('ro@mets.com');
      expect(intern.getRole()).toEqual('Intern');
      expect(intern.getSchool()).toEqual('7-Line University');
    });
  });
});
