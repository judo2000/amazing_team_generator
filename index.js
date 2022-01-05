const generateHTML = require('./src/generatePage');

// import file system package
const fs = require('fs');

// import inquirer package
const inquirer = require('inquirer');

// import team sub classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// create empty team array
let teamArray = [];

function buildHTML() {
  fs.writeFile('./dist/index.html', generateHTML(teamArray.join('')), err => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log(
        'Your team profile has been successfully created! Please check out the index.html'
      );
    }
  });
}

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
            console.log("Please enter the manager's name!");
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
            console.log('Please enter employee id');
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
            console.log('Please enter an email!');
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
            console.log("Please enter and manager's office number");
            return false;
          }
        },
      },
    ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(teamArray);
      console.log(manager.getRole());
      console.log(manager.getName());
    });
};

const addEmployee = () => {
  console.log('Add an employee to the team');
  inquirer
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
            console.log("Please enter the employee's name!");
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
            console.log('Please enter employee id');
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
            console.log('Please enter an email!');
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
            console.log("Please enter and manager's office number");
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
            console.log("Please enter and manager's office number");
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
    .then(employeeInput => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeInput;
      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, school);
        console.log(employee);
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
  //.then(console.log(teamArray))

  //   fs.writeFile('./dist/index.html', generateHTML(teamArray), err => {
  //     // if there is an error
  //     if (err) {
  //       console.log(err);
  //       return;
  //       // when the profile has been created
  //     } else {
  //       console.log(
  //         'Your team profile has been successfully created! Please check out the index.html'
  //       );
  //     }
  //   });
  // })

  .catch(err => {
    console.log(err);
  });
