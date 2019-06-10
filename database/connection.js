const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

console.log(process.env.DB_USER);

connection.connect(
 );