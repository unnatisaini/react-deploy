var express = require('express');
var router = express.Router();
var db=require('../database');
async function salary (req, res)  {
    db.query("SELECT * FROM salary1_tbl", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };

  // async function empdetail(req, res) {
  //   const id = req.params.id;
  //   db.query("SELECT * FROM staff_tbl WHERE id ='"+id+"'",id,(err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  // }

  async function salarydetail (req, res) {
    const id=req.params.staff_id;
    db.query("SELECT * FROM salary1_tbl WHERE staff_id='"+id+"'",id,(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };
  // router.get("/salary", (req, res) => {

  // db.query(
  //   "INSERT INTO salary1_tbl(basic_salary,staff_name,staff_id) SELECT salary,staff_name,id  FROM staff_tbl",
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send("Values Inserted");
  //     }
  //   }
  //  ) }
  // );

  async function salarycreate (req, res)  {
    const  staff_name=req.body.staff_name;
    const  staff_id=req.body.staff_id;
    const  _leave =req.body._leave;
    const  ML=req.body.ML;
    const  CL=req.body.CL;
    const  absent=req.body.absent;
    const  half_day=req.body.half_day;
    const  basic_salary=req.body.basic_salary;
    const  late_comings=req.body.late_comings;
   
  db.query(
    "INSERT INTO salary1_tbl(staff_name, staff_id,_leave, ML, CL,absent,half_day,basic_salary, late_comings,salary) VALUES ('"+staff_name+"', '"+staff_id+"','"+_leave+"', '"+ML+"','','"+CL+"','','','"+absent+"', '"+half_day+"','"+late_comings+"','"+basic_salary+"','','','','','')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
};
  
module.exports = {salary,salarydetail, salarycreate};
  