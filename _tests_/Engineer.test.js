const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  it('Should create an engineer object', () => {
    const engineer = new Engineer(
      'Stephen',
      40,
      'judo2000@comcast.net',
      'judo2000'
    );

    expect(engineer.name).toEqual(expect.stringContaining('Stephen'));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(
      expect.stringContaining('judo2000@comcast.net')
    );
    expect(engineer.github).toEqual(expect.stringContaining('judo2000'));
  });

  it("Should get the engineer's github username wi the getGibhub() method", () => {
    const engineer = new Engineer(
      'Stephen',
      40,
      'judo2000@comcast.net',
      'judo2000'
    );

    expect(engineer.getGithub()).toEqual('judo2000');
  });

  it('Should get the role of Engineer with the getRole() method', () => {
    const engineer = new Engineer(
      'Stephen',
      40,
      'judo2000@comcast.net',
      'judo2000'
    );

    expect(engineer.getRole()).toEqual('Engineer');
  });
});
