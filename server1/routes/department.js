var express = require('express');
var router = express.Router();
var db=require('../database');


async function Department(req, res) {
    db.query("SELECT * FROM department_tbl", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
}

// async function Departmentcreate(req, res) {
//     db.query("SELECT * FROM department_tbl", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
// }
// async function Departmentupdate(req, res) {
//     db.query("SELECT * FROM department_tbl", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
// }
async function Departmentdelete(req, res) {
  const id = req.params.id;
    db.query("DELETE FROM table_name WHERE id ='"+id+"'",id,(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
}
module.exports = {Department,Departmentdelete};
