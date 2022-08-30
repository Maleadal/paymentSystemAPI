const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "payment_system",
});

connection.connect(() => {
  console.log("Database Connected");
});

// * Home Page
app.listen(port, () => {
  console.log("Server Listening at port " + port);
});

app.get("/", (req, res) => {
  res.send(`
        <a href="/api/student">List all students</a>
    `);
});

// * Get all students
app.get("/api/student", (req, res) => {
  connection.query(`SELECT * FROM student`, (err, rows, fields) => {
    if (!err) {
      return res.json(rows);
    } else {
      console.log(err);
      return res.send("An error occured. Please check the logs");
    }
  });
});

// * Search for specific student
app.get("/api/student/query", (req, res) => {
  const { name, code, sex } = req.query;
  if(name && code && sex){
    connection.query(
        `SELECT * FROM student WHERE (lower(full_name) LIKE '%${name}%') AND (lower(sex) LIKE '%${sex}%') AND (lower(code) LIKE '%${code}%')`,
        (err, rows, fields) => {
          if (!err) {
            return res.json(rows);
          } else {
            console.log(err);
            return res.send("An error occured. Please check the logs");
          }
        }
      );
  }
  else if(code && sex){
    connection.query(
        `SELECT * FROM student WHERE (lower(code) LIKE '%${code}%') AND (lower(sex) LIKE '%${sex}%')`,
        (err, rows, fields) => {
          if (!err) {
            return res.json(rows);
          } else {
            console.log(err);
            return res.send("An error occured. Please check the logs");
          }
        }
      );
  }
  else if(name && sex){
    connection.query(
        `SELECT * FROM student WHERE (lower(full_name) LIKE '%${name}%') AND (lower(sex) LIKE '%${sex}%')`,
        (err, rows, fields) => {
          if (!err) {
            return res.json(rows);
          } else {
            console.log(err);
            return res.send("An error occured. Please check the logs");
          }
        }
      );
  }
  else if (name && code) {
    connection.query(
      `SELECT * FROM student WHERE (lower(full_name) LIKE '%${name}%') AND (lower(code) LIKE '%${code}%')`,
      (err, rows, fields) => {
        if (!err) {
          return res.json(rows);
        } else {
          console.log(err);
          return res.send("An error occured. Please check the logs");
        }
      }
    );
  } else if (name) {
    connection.query(
      `SELECT * FROM student WHERE (lower(full_name) LIKE '%${name}%')`,
      (err, rows, fields) => {
        if (!err) {
          return res.json(rows);
        } else {
          console.log(err);
          return res.send("An error occured. Please check the logs");
        }
      }
    );
  } else if (code) {
    connection.query(
      `SELECT * FROM student WHERE (lower(code) LIKE '%${code}%')`,
      (err, rows, fields) => {
        if (!err) {
          return res.json(rows);
        } else {
          console.log(err);
          return res.send("An error occured. Please check the logs");
        }
      }
    );
  } else if (sex) {
    connection.query(
      `SELECT * FROM student WHERE (lower(sex) LIKE '%${sex}%')`,
      (err, rows, fields) => {
        if (!err) {
          return res.json(rows);
        } else {
          console.log(err);
          return res.send("An error occured. Please check the logs");
        }
      }
    );
  }
});
