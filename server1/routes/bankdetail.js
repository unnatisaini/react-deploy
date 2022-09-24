var express = require('express');
var router = express.Router();
var db = require('../database');


async function BankDetail(req, res) {
  db.query("SELECT * FROM bankdetail_tbll", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}
async function bankdetails(req, res) {
  const id = req.params.idd;
  db.query("SELECT * FROM bankdetail_tbll WHERE staff_id ='" + id + "'", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result)
    }
  });
};

async function Bankdetailcreate(req, res) {
  const staff_id = req.body.staff_id;
  const staff_name = req.body.staff_name;
  const acc_holder = req.body.acc_holder;
  const bank_name = req.body.bank_name;
  const branch_name = req.body.branch_name;
  const ifsc_code = req.body.ifsc_code;
  const account_no = req.body.account_no;



  db.query(
    "INSERT INTO bankdetail_tbll(staff_id,staff_name,acc_holder,bank_name,branch_name,ifsc_code,account_no) VALUES ('" + staff_id + "','" + staff_name + "','" + acc_holder + "','" + bank_name + "','" + branch_name + "','" + ifsc_code + "','" + account_no + "')",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);

      }
    }
  );
}
async function Bankdetailupdate(req, res) {
  const id = req.body.staff_id;
  const staff_name = req.body.staff_name;
  const acc_holder = req.body.acc_holder;
  const ifsc_code = req.body.ifsc_code;
  const account_no = req.body.account_no;
  const bank_name = req.body.bank_name;
  const branch_name = req.body.branch_name;
  db.query(
    "UPDATE bankdetail_tbll SET staff_name='" + staff_name + "',acc_holder='" + acc_holder + "', ifsc_code='" + ifsc_code + "',account_no='" + account_no + "',bank_name='"+bank_name+"',branch_name='"+branch_name+"' WHERE staff_id = '" + id + "'",
    [id,
      staff_name,
      acc_holder,
      ifsc_code,
      account_no,
      bank_name,
      branch_name,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}

module.exports = { BankDetail, Bankdetailcreate, Bankdetailupdate, bankdetails };