import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../../styles/Attendance/dashboard.css';
const Header = () => {
  let navigate = useNavigate();
  const signOut = () =>{
    localStorage.setItem("authenticated",null);
    navigate("/EmployeeManagement/");
  }
  return (
    <div>
      <div className="header_box">

        <p className="company_name">
          We2Code Technology
        </p>
         <button className="btn sign_out_btn" onClick={signOut} >
          <p className="sign_out_text">Sign out</p>
           </button>
       
     
      </div>
    </div>
  );
};

export default Header;
