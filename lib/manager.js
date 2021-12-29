const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // return office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // return role
  // override default role with Manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
