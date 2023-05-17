
const inquirer = require('inquirer');
const queries = require('./queries');
const promptUser = ()=>{
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'
      ]
    })
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          // function to view departments
          queries.viewDepartments();
          break;

        case 'View all roles':
          // function to view roles
          viewRoles();
          break;
        case 'View all employees':
          // functions to view employees
          view(employees)
          break;
        case 'Add a department':
          inquirer
            .prompt({
              type: 'input',
              name: 'name',
              message: 'What is the name of the department?'
            })
            .then((answers) => {
              //function to add department with the department name given
              addDepartment(answers.name);
            });
          break;
        case 'Add a role':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'title',
                message: 'What is the title of the role?'
              },
              {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
              },
              {
                type: 'input',
                name: 'department',
                message: 'What is the department ID of the role?'
              }
            ])
            .then((answers) => {
              // function to add role with 
              //answers.title, answers.salary, and answers.department
              addRole(answers.title, answers.salary, answers.department);
            });
          break;
        case 'Add an employee':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'first_name',
                message: 'What is the first name of the employee?'
              },
              {
                type: 'input',
                name: 'last_name',
                message: 'What is the last name of the employee?'
              },
              {
                type: 'input',
                name: 'role_id',
                message: 'What is the role ID of the employee?'
              },
              {
                type: 'input',
                name: 'manager_id',
                message: 'What is the manager ID of the employee?'
              }
            ])
            .then((answers) => {
              // function to add employee with 
              //answers.first_name, answers.last_name, answers.role_id, and answers.manager_id
              addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id);
            });
          break;
        case 'Update an employee role':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'employee_id',
                message: 'What is the ID of the employee whose role you want to update?'
              },
              {
                type: 'input',
                name: 'new_role_id',
                message: 'What is the ID of the employee\'s new role?'
              }
            ])
            .then((answers) => {
              // function to update employee role with answers.employee_id and answers.new_role_id
              updateEmployeeRole(answers.employee_id,answers.new_role_id)
              });
          break;
      }
    });
};

module.exports = {
  promptUser,
};
