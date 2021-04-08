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
  });
});
