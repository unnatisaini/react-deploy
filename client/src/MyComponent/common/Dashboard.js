import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AttendanceDetail from "../Attendance/AttendanceDetail";
import AttendanceHistory from "../Attendance/AttendanceHistory";
import Emplist from "../EmpList/Emplist"
import AddEmployee from "../EmpList/add_emp"
import EmployeeDetail from "../EmpList/EmployeeDetail"
import Salary_list from "../Salary/Salary_list";
import Salary_slip from "../Salary/Salary_slip";
import Generatesalary from "../Salary/Generatesalary";
import Salary_history from "../Salary/Salary_history";
import Department from "../Department/Department";
import Login from "../login/login";
import Bankdetails from "../EmpList/bankdetails";
import { useNavigate } from "react-router-dom";
import CurrentLeaves from "../ManageLeaves/current_leaves";
import ManageLeaves from "../ManageLeaves/leaves_history";
import Dashboardd from "../Dashboard/dashboard";
import DailyAttendance from "../Attendance/DailyAttendance";
import Holidays from "../Holidays/holiday";
import IncrementLog from "../EmpList/increment_log";
import UpdateEmp from "../EmpList/updateEmployee";

function Dashboard(props) {
  let navigate = useNavigate();
  let Auth =  localStorage.getItem("authenticated");
  console.log("local chala -- > "+Auth)
  return (
    <div>
      <Routes>
      <Route path="/EmployeeManagement/" element={<Login/>} />
{Auth != 'success' ? navigate("/") :
<>

<Route path="/EmployeeManagement/dashboard" element={<Dashboardd/>} />
      <Route path="/EmployeeManagement/Emplist" element={<Emplist/>} />
      <Route path="/EmployeeManagement/login" element={<Login/>} />
      <Route path="/EmployeeManagement/AddEmployee" element={<AddEmployee/>} />
      <Route path="/EmployeeManagement/UpdateEmployee" element={<UpdateEmp/>} />
      <Route path="/EmployeeManagement/EmployeeDetail" element={<EmployeeDetail/>} />
      <Route path="/EmployeeManagement/department" element={<Department/>} />
      <Route path="/EmployeeManagement/Bankdetails" element={<Bankdetails/>} />
      <Route path="/EmployeeManagement/IncrementLog" element={<IncrementLog/>} />
      <Route path="/EmployeeManagement/Attendance" element={<DailyAttendance />} />
      <Route path="/EmployeeManagement/AttendanceDetail" element={<AttendanceDetail />} />
      <Route path="/EmployeeManagement/AttendanceHistory" element={<AttendanceHistory />} />
       <Route path="/EmployeeManagement/Salary_list" element={<Salary_list />} />

<Route path="/EmployeeManagement/Salary_slip" element={<Salary_slip />} />
<Route path="/EmployeeManagement/Generatesalary" element={<Generatesalary/>} />
<Route path="/EmployeeManagement/Salary_history" element={<Salary_history/>} />
<Route path="/EmployeeManagement/leaves" element={<CurrentLeaves/>} />
<Route path="/EmployeeManagement/all_leaves" element={<ManageLeaves/>} />
<Route path="/EmployeeManagement/holiday" element={<Holidays/>} />

</>
}
      </Routes>
    </div>
  );
}

export default Dashboard;