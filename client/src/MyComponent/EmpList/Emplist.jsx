import React,{useEffect, useState,useMemo} from 'react';
import Axios from 'axios';
import moment from 'moment';
import DataTable , { createTheme }  from 'react-data-table-component';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Summarycard from '../common/Summarycard';
import SearchSection from "../common/SearchSection";

const Emplist = () => {
  const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
      false
    );
    let navigate = useNavigate();  
    const [employeeList, setEmployeeList] = useState([]);
   

    const getEmployees = () => {
        Axios.get("http://localhost:3001/employees").then((response) => {
          setEmployeeList(response.data);
        });
      };
      useEffect(() => {
        getEmployees();
      },[]);

  const HandleClick =(e)=>{
  let staffidd = e.target.value;
  localStorage.setItem('staffid',staffidd);
navigate('/EmployeeDetail')
  }  
  
      const columns = [
        {
            name: 'Id',
            selector: row => row.id,
           sortable: true,

        },
        {
            name: 'Name',
            selector: row => row.staff_name,
        sortable: true,

        },
        {
            name: 'Gender',
            selector: row => row.gender,
        sortable: true,

        },
        {
            name: 'email',
            selector: row => row.email,
        sortable: true,

        },
        {
            name: 'mobile',
            selector: row => row.mobile,
        sortable: true,

        },
        {
            name: 'Date of Joining',
            selector: row => moment(row.doj).format("YYYY-MM-DD"),
        sortable: true,

        },
        {
            name: 'City',
        sortable: true,
            selector: row => row.city,
        },
        {
            name: 'State',
            selector: row => row.state,
        sortable: true,

        },
        {
            name: 'Country',
            selector: row => row.country,
        sortable: true,

        },
        {
          name: "Actions",
          cell: (row) =>( <button  onClick={HandleClick} value={row.id}>Detail</button> ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
          
        },
    ];


     // search function
     const filteredItems = employeeList.filter(
      item =>
        JSON.stringify(item)
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) !== -1
    );
    
    const   handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
// 
    
    
 
    
      
   return (
    <div className='empList_page'>
    <Header/>
    <div className="container-fluid">
        <div className="row">
    <Sidebar/>
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                <button className="btn btn-sm btn-outline-secondary" onClick={()=> {navigate("/AddEmployee");}}>
                Add employee
                    </button>
                  <Link to="/AttendanceHistory" className="nav-link">
                    <button className="btn btn-sm btn-outline-secondary">
                      Attendance History
                    </button>
                  </Link>
                  <button className="btn btn-sm btn-outline-secondary">
                    Salary History
                  </button>
                </div>
              </div>
            </div>
            <Summarycard/>
   
            <div className="dailyattendance_table">
              <h2>Employee List</h2>

              {/* table */}
              <div className="dailyattendance_table_box">
                {/* searchsection */}
                <div class="row">
                  <div class="col-lg-12 card-margin">
                    <div class="card search-form">
                      <div class="card-body p-0">
                        <form id="search-form">
                          <div class="row">
                            <div class="col-12">
                              <div className="search_section_top">
                                <h5 className="search_heading">Search</h5>
                                <div className="attendance_pagesearch_section">
                                  <SearchSection
                                    labeltext={"StaffName"}
                                    inputtype={"text"}
                                    id="search"
                                    value={filterText}
                                    onMonthChange={e => setFilterText(e.target.value)}
                                  />
                                 <button onClick={handleClear} className={'btn btn-primary mx-auto py-3 px-5 w-50'}>Reset</button>
                                </div>
                                
                              </div>
                              <div class="row no-gutters">
                                <div class="col-lg-8 col-md-6 col-sm-12 p-0"></div>
                                <div class="col-lg-1 col-md-3 col-sm-12 p-0"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              
    <DataTable
            pagination
            highlightOnHover
		        pointerOnHover
            defaultSortField="name"
            columns={columns}
            data={filteredItems}
            subHeader
      
      />  
          </div>
            </div>
          </main>
        </div>
      </div>
      </div>
    );
}

export default Emplist;
