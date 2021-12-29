// input Employee class
const Employee = require("./employee");

// Engineer class extends employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // get info from Employee constructor
    super(name, id, email);
    this.github = github;
  }

  // return github
  getGithub() {
    return this.github;
  }

  // return role
  // override default role with Engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
