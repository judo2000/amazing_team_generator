const Employee = require('../lib/employee');

describe('Employee', () => {
  it('should create an employee object', () => {
    const employee = new Employee('Stephen', 40, 'judo2000@comcast.net');

    expect(employee.name).toEqual(expect.stringContaining('Stephen'));
  });

  it("Should get the employee's name with the getName() method ", () => {
    const employee = new Employee('Stephen', 40, 'judo2000@comcast.net');

    expect(employee.getName()).toEqual('Stephen');
  });

  it("Should get the employee's id with the getId() method", () => {
    const employee = new Employee('Stephen', 40, 'judo2000@comcast.net');

    expect(employee.getId()).toEqual(40);
  });

  it("Should get the employee's email address with the getEmail() method", () => {
    const employee = new Employee('Stephen', 40, 'judo2000@comcast.net');

    expect(employee.getEmail()).toEqual('judo2000@comcast.net');
  });
});
