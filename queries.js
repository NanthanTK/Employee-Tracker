//const express = require('express');
const mysql = require('mysql2/promise');
const { promptUser } = require('./prompt');

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

// Connect to database
const db = {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Apple2eat@',
      database: 'hr_db'
    };

  // Function to view all departments
  const viewDepartments = async () => {
    // Connect to database
    const connection = await mysql.createConnection(db);
  
    // Query to retrieve all departments
    const [rows] = await connection.query('SELECT name as "Department Name", id as "Department ID" FROM departments');
  
    // Log results to console
    console.table(rows);
    
    // End database connection
    connection.end();
    promptUser();
  };
  
  // Function to view all roles
  const viewAllRoles = async () => {
    // Connect to database
    const connection = await mysql.createConnection(db);
  
    // Query to retrieve all roles
    const [rows] = await connection.query('SELECT * FROM role');
  
    // Log results to console
    console.log(rows);
  
    // End database connection
    connection.end();
  };
  
  // Function to view all employees
  const viewAllEmployees = async () => {
    // Connect to database
    const connection = await mysql.createConnection(db);
  
    // Query to retrieve all employees
    const [rows] = await connection.query('SELECT * FROM employee');
  
    // Log results to console
    console.log(rows);
  
    // End database connection
    connection.end();
  };
  
  // Function to add a department
  const addDepartment = async (name) => {
    // Connect to database
    const connection = await mysql.createConnection(db);
  
    // Query to add department
    await connection.query('INSERT INTO department (name) VALUES (?)', [name]);
  
    // Log success message to console
    console.log('Department added successfully.');
  
    // End database connection
    connection.end();
  };
  
  // Function to add a role
  const addRole = async (title, salary, departmentId) => {
    // Connect to database
    const connection = await mysql.createConnection(db);
  
    // Query to add role
    await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
  
    // Log success message to console
    console.log('Role added successfully.');
  
    // End database connection
    connection.end();
  };
  
  // Function to add an employee
  const addEmployee = async (firstName, lastName, roleId, managerId) => {
    // Connect to database
    const connection = await mysql.createConnection(db);
  
    // Query to add employee
    await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
  
    // Log success message to console
    console.log('Employee added successfully.');
  
    // End database connection
    connection.end();
  };
  
  // Function to update an employee's role
  const updateEmployeeRole = async (employeeId, newRoleId) => {
    // Connect to database
    const connection = await mysql.createConnection(db);
  
    // Query to update employee's role
    await connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
  
    // Log success message to console
    console.log('Employee role updated successfully.');
  
    // End database connection
    connection.end();
  };
  
  // Export all functions
  module.exports = {
    viewDepartments,
   
  



  
  
   // list of the functions here
  };