import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Header = () => {
  let navigate = useNavigate();
  const signOut = () =>{
    localStorage.setItem("authenticated",null);
    navigate("/EmployeeManagement/");
  }
  return (
    <div>
      <Nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 mb-3 d-flex ">
        <a className="navbar-brand col-sm-6 col-md-10 mr-0" href="#">
          We2Code
        </a>
        {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> */}
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
          <button className="btn btn-md btn-outline-dark text-light" onClick={signOut} >
          Sign out </button>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

export default Header;
