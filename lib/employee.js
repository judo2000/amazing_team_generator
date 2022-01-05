// employee class constructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // return name
  getName() {
    return this.name;
  }

  // return id
  getId() {
    return this.id;
  }

  // return email
  getEmail() {
    return this.email;
  }

  // output role
  // defualt role is Employee
  getRole() {
    return 'Employee';
  }
}

// export Employee
module.exports = Employee;
