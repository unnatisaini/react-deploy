var express = require('express');
var router = express.Router();
var db=require('../database');

async function employees(req, res) {
  db.query("SELECT * FROM staff_tbl", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
 
}
async function country(req, res) {
  db.query("SELECT * FROM country_tbl", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
async function employeecreate(req, res) {
    const  staff_name=req.body.staff_name;
    const  gender=req.body.gender;
    const  email =req.body.email;
    const  mobile=req.body.mobile;
    const  doj=req.body.doj;
    const  address=req.body.address;
    const  city=req.body.city;
    const  state=req.body.state;
    const  country=req.body.country;
   
  db.query(
    "INSERT INTO staff_tbl(staff_name, gender,email, mobile, dob,doj,last_working_date,address, city, state,country,department_id,pic,added_by,updated_on,added_on,salary) VALUES ('"+staff_name+"', '"+gender+"','"+email+"', '"+mobile+"','','"+doj+"','','','"+city+"', '"+state+"','"+country+"','','','','','','')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
  }
  async function employeesdetail(req, res) {
    const id = req.params.id;
    db.query("SELECT * FROM staff_tbl WHERE id ='"+id+"'",id,(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result)
      }
    });
  };




// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
module.exports = {employees,employeecreate,country,employeesdetail};