var express = require("express");
var router = express.Router();
var db = require("../database");
async function salary(req, res) {
  db.query("SELECT * FROM salary1_tbl", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

async function salarydetail(req, res) {
  const id = req.params.idd;
  db.query(
    "SELECT * FROM salary_tbl WHERE staff_id='" + id + "'",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}

async function salarycreate(req, res) {
  const staff_id = req.body.staff_id;
  const basic_salary = req.body.basic_salary;
  const allowance = req.body.allowance;
  const total = req.body.total;
  const added_by = req.body.added_by;
  const updated_on = req.body.updated_on;
  const tax = req.body.tax;

  db.query(
    "INSERT INTO salary_tbl(staff_id,	basic_salary,allowance, total,added_by,	updated_on,tax) VALUES ( '" +
      staff_id +
      "','" +
      basic_salary +
      "', '" +
      allowance +
      "','" +
      total +
      "','" +
      added_by +
      "', '" +
      updated_on +
      "','" +
      tax +
      "')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
}

module.exports = { salary, salarydetail, salarycreate };
