import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>


             <nav className="col-md-2 d-none d-md-block bg-light sidebar">

            <div class="profile-card">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="user" class="profile-photo"/>
            	<h5><a href="#" class="text-white">Sarah Cruiz</a></h5>
            	<a href="#" class="text-white"><i class="fa fa-user"></i> 1,299 followers</a>
            </div>
            <ul class="nav-news-feed">
              <li><i class="fa fa-list-alt icon1"></i><div><Link to="/" className="nav-link">
                    <span data-feather="shopping-cart"></span>
                    Dashboard
                  </Link></div></li>
              <li><i class="fa fa-users icon2"></i><div> <Link to="/Department" className="nav-link">
                    <span data-feather="users"></span>
                    Department
                  </Link></div></li>
                  <li><i class="fa fa-users icon2"></i><div> <Link to="/Attendance" className="nav-link">
                    <span data-feather="users"></span>
                    Attendance
                  </Link></div></li>
              <li><i class="fa fa-user icon3"></i><div><Link to="/Salary_list" className="nav-link">
                    <span data-feather="users"></span>
                    Salary
                  </Link></div></li>
              
            </ul>
        
  </nav>
             
        </>
    );
}

export default Sidebar;
