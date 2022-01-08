const Manager = require('../lib/manager');

describe('Manager', () => {
  it('Should create a manager object', () => {
    const manager = new Manager('Stephen', 40, 'judo2000@comcast.net', 102);

    expect(manager.name).toEqual(expect.stringContaining('Stephen'));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(
      expect.stringContaining('judo2000@comcast.net')
    );
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  it("Should get the manager's office number with the getOffice() method", () => {
    const manager = new Manager('Stephen', 40, 'judo2000@comcast.net', 102);

    expect(manager.getOfficeNumber()).toEqual(102);
  });

  it('Should get the role of Manager with the getRole() method', () => {
    const manager = new Manager('Stephen', 40, 'judo2000@comcast.net', 102);

    expect(manager.getRole()).toEqual('Manager');
  });
});
