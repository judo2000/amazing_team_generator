// input Employee class
const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // return school
  getSchool() {
    return this.school;
  }

  // return role
  // override default role with Intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
