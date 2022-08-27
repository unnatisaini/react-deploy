import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AttendanceDetail from "../Attendance/AttendanceDetail";
import AttendanceHistory from "../Attendance/AttendanceHistory";
import DailyAttendance from "../Attendance/DailyAttendance";
import Emplist from "../EmpList/Emplist"
import AddEmployee from "../EmpList/add_edit_emp"
import EmployeeDetail from "../EmpList/EmployeeDetail"
import Salary_list from "../Salary/Salary_list";
import Salary_slip from "../Salary/Salary_slip";
import Generatesalary from "../Salary/Generatesalary";
import Salary_history from "../Salary/Salary_history";
import Department from "../Department/Department";
import Login from "../login/login";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  let navigate = useNavigate();
  let Auth =  localStorage.getItem("authenticated");
  console.log("local chala -- > "+Auth)
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} />
{Auth != 'success' ? navigate("/") :
<>
      <Route path="/emplist" element={<Emplist/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/AddEmployee" element={<AddEmployee/>} />
      <Route path="/UpdateEmployee" element={<AddEmployee/>} />
      <Route path="/EmployeeDetail" element={<EmployeeDetail/>} />
      <Route path="/department" element={<Department/>} />

      <Route path="/Attendance" element={<DailyAttendance />} />
        <Route path="/AttendanceDetail" element={<AttendanceDetail />} />
        <Route path="/AttendanceHistory" element={<AttendanceHistory />} />
        <Route path="/Salary_list" element={<Salary_list />} />

<Route path="/Salary_slip" element={<Salary_slip />} />
<Route path="/Generatesalary" element={<Generatesalary/>} />
<Route path="/Salary_history" element={<Salary_history/>} />
</>
}
      </Routes>
    </div>
  );
}

export default Dashboard;