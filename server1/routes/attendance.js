var express = require('express');
var router = express.Router();
var db=require('../database');

async function attendance(req, res) {
    db.query("SELECT * FROM attendance_tbl", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
}
  
async function attendancecreate(req, res) {
    const  staff_id=req.body.staff_id;
    const  staff_name=req.body.staff_name;
    const  status=req.body.Status;
    
  db.query(
    "INSERT INTO attendance_tbl(staff_id,staff_name, Status) VALUES ('"+staff_id+"','"+staff_name+"','"+status+"')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
  }

module.exports = {attendance,attendancecreate};
