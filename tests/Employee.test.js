const Employee = require('../lib/employee');

describe('Employee', () => {
  it('should create a new employee and return the employee info by calling getEmail, getId, and getEmail', () => {
    const employee = new Employee('Stephen', 40, 'judo2000@comcast.net');

    expect(employee.getName()).toEqual('Stephen');
    expect(employee.getId()).toEqual(40);
    expect(employee.getEmail()).toEqual('judo2000@comcast.net');
  });
});
