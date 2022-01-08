const Intern = require('../lib/intern');

describe('Intern sub class of employee', () => {
  it('Should create an intern object', () => {
    const intern = new Intern(
      'Stephen',
      40,
      'judo2000@comcast.net',
      'University of Denver'
    );

    expect(intern.name).toEqual(expect.stringContaining('Stephen'));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(
      expect.stringContaining('judo2000@comcast.net')
    );
    expect(intern.school).toEqual(
      expect.stringContaining('University of Denver')
    );
  });

  it("Should return the intern's school with the getSchool() method", () => {
    const intern = new Intern(
      'Stephen',
      40,
      'judo2000@comcast.net',
      'University of Denver'
    );

    expect(intern.getSchool()).toEqual('University of Denver');
  });

  it('Should return the role of Intern with the getRole() method', () => {
    const intern = new Intern(
      'Stephen',
      40,
      'judo2000@comcast.net',
      'University of Denver'
    );

    expect(intern.getRole()).toEqual('Intern');
  });
});
