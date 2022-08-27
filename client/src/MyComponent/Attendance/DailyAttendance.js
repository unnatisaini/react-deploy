import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import moment from "moment";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import SearchSection from "../common/SearchSection";
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import Summarycard from "../common/Summarycard";
import Axios from 'axios';


function DailyAttendance(props) {
  const [employeedata, setEmployeedata] = useState([]);
  const [statusdata,setstatusdata] = useState([]);
  const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
      false
    );

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeedata(response.data);
    });
    

  };
  useEffect(() => {
    getEmployees();
  },[]);

  const onstatuschange = (e)=>{
    setstatusdata(e.target.value)
  }
  const onHandleClick =(staff_name,e) =>{
    console.log(e.target.value+`${staff_name}`)
    Axios.post("http://localhost:3001/attendance/create", {
      staff_id:e.target.value,
      staff_name:`${staff_name}`,
      Status:statusdata,
     
  }).then((response) => {
    console.log(response.data);
   
  });
      // navigator("/AttendanceDetail");
  }
  const columns = [
    {
        name: 'id',
        selector: row => row.id,
       
    },
    {
        name: 'staff_name',
        selector: row => row.staff_name,
        sortable: true,
        
    },
    {
      name: 'Present',
      cell: (row) =>( <input value={'Present'} onChange={onstatuschange} name={filterText} type={'radio'}/> ),
      sortable: true,
  },
  {
    name: 'Absent',
    cell: (row) =>( <input value={'Absent'} onChange={onstatuschange} name={filterText} type={'radio'}/> ),
    sortable: true,
},
{
  name: 'HalfDay',
  cell: (row) =>( <input value={'HalfDay'} onChange={onstatuschange} name={filterText} type={'radio'}/> ),
  sortable: true,
},
{
  name: 'LC',
  cell: (row) =>( <input value={'LateComing'} onChange={onstatuschange} name={filterText} type={'radio'}/> ),
  sortable: true,
},
{
  name: 'EL',
  cell: (row) =>( <input value={'EmergencyLeave'} onChange={onstatuschange} name={filterText} type={'radio'}/> ),
  sortable: true,
},
{
  name: 'CL',
  cell: (row) =>( <input value={'CausalLeave'} onChange={onstatuschange} name={filterText} type={'radio'}/> ),
  sortable: true,
},
{
  name: 'Leave',
  cell: (row) =>( <input value={'Leave'} onChange={onstatuschange} name={filterText} type={'radio'}/> ),
  sortable: true,
},
{
  name: "Actions",
  cell: (row) =>( <button  onClick={onHandleClick.bind(this, row.staff_name)} value={row.id}>Action</button> ),
  ignoreRowClick: true,
  allowOverflow: true,
  button: true,
  
},

  ]
// search function
const filteredItems = employeedata.filter(
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
const navigator = useNavigate();

  const [attendmonth, setattendmonth] = useState(
    moment().format("DD-MMMM-YYYY")
  );

  let decmonth;
  const PreviousmonthChange = () => {
    decmonth = moment(attendmonth, "DD-MMMM-YYYY")
      .subtract(1, "day")
      .format("DD-MMMM-YYYY");
    setattendmonth(decmonth);
  };
  const NextmonthChange = () => {
    decmonth = moment(attendmonth, "DD-MMMM-YYYY")
      .add(1, "day")
      .format("DD-MMMM-YYYY");
    setattendmonth(decmonth);
  };

  //     let sMonth = moment(attendmonth).format('YYYY-MM-DD');

  //   let firstdate = moment(attendmonth, 'YYYYMMMM')
  //     .startOf('month')
  //     .format('DD-MM-YYYY');
  //   let lastdate = moment(attendmonth, 'YYYYMMMM')
  //     .endOf('month')
  //     .format('DD-MM-YYYY');
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <Link to="/AttendanceHistory" className="nav-link">
                    <button className="btn btn-sm btn-outline-secondary">
                      Attendance History
                    </button>
                  </Link>
                
                </div>
              </div>
            </div>


           <Summarycard/>

            <div className="dailyattendance_table">
              <h2>Daily Attendance</h2>

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
                                    value={filterText}
                                    onMonthChange={e => setFilterText(e.target.value)}
                                  />
                                  <SearchSection
                                    labeltext={"Date"}
                                    inputtype={"date"}
                                  />
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
                <div className="monthname_sort">
                  <BsFillCaretLeftFill onClick={PreviousmonthChange} />
                  <h4 className="monthname_text">{attendmonth}</h4>
                  <BsFillCaretRightFill onClick={NextmonthChange} />
                </div>

                <DataTable
                highlightOnHover
		        pointerOnHover
            pagination
            columns={columns}
            data={filteredItems}
            subHeader
        />

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DailyAttendance;
