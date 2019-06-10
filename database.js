const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.dotenv.DB_HOST,
  user: process.dotenv.DB_,
  password: process.dotenv.DB_PASSWORD
  database: process.dotenv.DB_DATABASE
});

connetion.connect((error) => {
  if (error) throw error;
  console.log("Connected!");
});