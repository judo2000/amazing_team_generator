// import file system package
const fs = require('fs');

// import inquirer package
const inquirer = require('inquirer');

// import team sub classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// input the html generator
const generateHTML = require('./src/generatePage');

// create empty team array
let teamArray = [];

// function to build html and write team page
function buildHTML() {
  fs.writeFile('./dist/index.html', generateHTML(teamArray), err => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log(
        'Your team profile page has been created! Please check out the dist/index.html'
      );
    }
  });
}

// fuunction to add team manager
const addManager = function () {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter team manager's name:",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`\n Please enter the manager's name!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter manager's id:",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`\nPlease enter employee id`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter manager's email:",
        validate: email => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log(`\nPlease enter an email!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`\nPlease enter and manager's office number`);
            return false;
          }
        },
      },
    ])
    .then(managerData => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
    });
};

// function to add employees (engineers and interns)
const addEmployee = () => {
  console.log('Add an employee to the team');
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "Chose Employee's role:",
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: employeeInput => `Enter ${employeeInput.role}'s name:`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`\nPlease enter the employee's name!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: employeeInput => `Enter ${employeeInput.role}'s id:`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`\Please enter employee id`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: employeeInput => `Enter ${employeeInput.role}'s email:`,
        validate: email => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log(`\Please enter employee's email!`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: employeeInput =>
          `Enter ${employeeInput.role}'s github username:`,
        when: input => input.role === 'Engineer',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`\nPlease enter engineer's github username`);
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter intern's schoo name:",
        when: input => input.role === 'Intern',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log(`\Please enter intern's school name:`);
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another team member?',
        default: false,
      },
    ])
    .then(employeeData => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee = '';

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee();
      } else {
        return buildHTML();
      }
    });
};

addManager()
  .then(addEmployee)
  .catch(err => {
    console.log(err);
  });
