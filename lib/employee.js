// employee class constructor
class Employee {
  constructor(name, id, email) {
    this.name;
    this.id;
    this.email;
  }

  // output name
  getName() {
    return this.name;
  }

  // output id
  getId() {
    return this.id;
  }

  // out email
  getEmail() {
    return this.email;
  }

  // output role
  // defualt role is Employee
  getRole() {
    return "Employee";
  }
}

// export Employee
module.exports = Employee;
