
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');

const queries = require('./queries')

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
          queries.viewDepartments()
          .then ((departments) => {
            console.table(departments);
            promptUser();
          });
          break;

        case 'View all roles':
          // function to view roles
          queries.viewRoles()
          .then ((roles) => {
            console.table(roles);
            promptUser();
          });
          break;

        case 'View all employees':
          // functions to view employees
          queries.viewEmployees()
          .then ((employees) => {
            console.table(employees);
            promptUser();
          });          
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
              queries.addDepartment(answers.name)
              .then(()=> promptUser());
            });
          break;

        case 'Add a role':
            queries.viewDepartments()
              .then((departments) => {
                //console.log("departments");
                //console.log(departments);
                const departmentChoices = departments.map((department) => ({
                  name: department['Department Name'], 
                  value: department['Department ID'],
                }));
                //console.log("departmentChoices");
                //console.log(departmentChoices);
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
                      type: 'list',
                      name: 'department_id', 
                      message: 'Select the department for the role',
                      choices: departmentChoices,
                    }
                  ])
                  .then((answers) => {
                    queries.addRole(answers.title, answers.salary, answers.department_id)
                    .then(()=> promptUser());
                  });
              });
          break;

        case 'Add an employee':
          queries.viewRoles()
          .then((roles) => {
            const roleChoices = roles.map((roles) => ({
              name: roles['job title'], 
              value: roles['role_id'],
            }));
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'first_name',
                  message: "What is the employee's first name?"
                },
                {
                  type: 'input',
                  name: 'last_name',
                  message: "What is the employee's last name?"
                },
                {
                  type: 'list',
                  name: 'role_id', 
                  message: 'Select the job title for the employee',
                  choices: roleChoices,
                },
                {
                  type: 'input',
                  name: 'manager_id',
                  message: "What is the employee's manager's ID?"
                }
  
              ])
              .then((answers) => {
                queries.addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id)
                .then(()=> promptUser());
              });
          });
        break;

        case 'Update an employee role':
          queries.viewRoles()
          .then((roles) => {
            const roleChoices = roles.map((roles) => ({
              name: roles['job title'], 
              value: roles['role_id'],
            }));
          queries.viewEmployees()
          .then((employees) => {
            const employeeChoices = employees.map((employees) => ({
              name: employees['First Name'], 
              value: employees['Employee ID'],
            }));
            inquirer
              .prompt([
                {
                  type: 'list',
                  name: 'employee_id', 
                  message: 'Select the employee to change role',
                  choices: employeeChoices,
                },
                {
                  type: 'list',
                  name: 'role_id', 
                  message: 'Select the job title for the employee',
                  choices: roleChoices,
                },
  
              ])
              .then((answers) => {
                queries.updateEmployee(answers.employee_id, answers.role_id)
                .then(()=> promptUser());
              });
            });
          });
          break;      
      }
    });
 };   
  
module.exports = {
  promptUser,
};
