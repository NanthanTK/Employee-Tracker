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


