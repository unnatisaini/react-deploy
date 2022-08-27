const express = require("express");
const app = express();
const cors = require("cors");
const {employees,employeecreate,country,employeesdetail} = require("./routes/employees")
const {attendance,attendancecreate} = require("./routes/attendance")
const {Department,Departmentdelete} = require("./routes/department")
const session = require('express-session');
const {login,checklogin} = require('./routes/login/login')
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}
));
app.use(express.json());

app.use(session({
  name: 'session',
  secret: 'crud',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 60 * 30,
      sameSite: 'strict',
  }
}))

app.get('/employees',employees);
app.post('/create',employeecreate);
app.get('/employeedetail/:id',employeesdetail);
app.get('/country_name',country);
app.get('/attendance',attendance);
app.post('/attendance/create',attendancecreate);
app.get('/department',Department);
app.delete('/departmentdelete',Departmentdelete);
app.get('/login',checklogin);
app.post('/login',login);

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
