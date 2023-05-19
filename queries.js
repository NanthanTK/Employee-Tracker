//const express = require('express');
const mysql = require('mysql2/promise');

// Connect to database
const db = {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'hr_db'
    };

  // Function to view all departments
  const viewDepartments = async () => {
    const connection = await mysql.createConnection(db);
    const [selection] = await connection.query('SELECT name as "Department Name", id as "Department ID" FROM departments');
    return selection;
  connection.end();
  };
  
  // Function to view all roles
  const viewRoles = async () => {
    const connection = await mysql.createConnection(db);
    const [selection] = await connection.query('SELECT title AS "job title",' +
    ' roles.id AS "role_id", departments.name AS "Department", salary ' +
    'FROM roles ' +
    'JOIN departments ON roles.department_id = departments.id');
    return selection;
  connection.end();
  };
  
  // Function to view all employees
  const viewEmployees = async () => {
    const connection = await mysql.createConnection(db);
    const [selection] = await connection.query('SELECT employees.id AS "Employee ID", first_name AS "First Name", ' +
    'last_name AS "Last Name", title AS "Job Title", ' +
    'departments.name AS "Department", salary, manager_id as "Manager ID" ' +
    'FROM employees ' +
    'JOIN roles ON employees.role_id = roles.id ' +
    'JOIN departments ON roles.department_id = departments.id');
    return selection;
  connection.end();
  };
  
  // Function to add a department
  const addDepartment = async (name) => {
    const connection = await mysql.createConnection(db);
    await connection.query('INSERT INTO departments (name) VALUES (?)', [name]);
    console.log('New department added successfully.');
    connection.end();
  };
  
  // Function to add a role
  const addRole = async (title, salary, departmentId) => {
    const connection = await mysql.createConnection(db);
    await connection.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    console.log('New role added successfully.');
    connection.end();
  };
  
  // Function to add an employee
  const addEmployee = async (firstName, lastName, roleId, managerId) => {
    const connection = await mysql.createConnection(db);
    await connection.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    console.log('New Employee added successfully.');
    connection.end();
  };
  
  // Function to update an employee's role
  const updateEmployee = async (employeeId, newRoleId) => {
    const connection = await mysql.createConnection(db);
    await connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    console.log('Employee role updated successfully.');
    connection.end();
  };
  
  // Export all functions
  module.exports = {
    viewDepartments,
    viewRoles,  
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee,
  
   // list of the functions here
  };