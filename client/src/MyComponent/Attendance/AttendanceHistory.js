import React, { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import moment from "moment";
import DataTable from 'react-data-table-component';
import SearchSection from "../common/SearchSection";

   const status='present';
    const EmployeeName ='Ritu';
    const City = 'webdeveloper';
    const gender = 'male';
    const mobile = '9898989898';
    const doj = '12-01-22';
  
const ExpandedComponent = ({ dataa }) => <div className="dropdown_detail">
<div className="dropdown_personaldet">
<h6>{EmployeeName}</h6>
<h6>{City}</h6>
<h6>{gender}</h6>
</div>
<div className="dropdown_personaldetail">
<h6>{mobile}</h6>
<h6>{doj}</h6>
</div>
</div>;
const AttendanceHistory = () => {
  const [monthval,setmonthval] = useState(moment().format("MMMM-YYYY"));
  const [nameval,setnameval] = useState();

  const onMonthChange=(e)=>{
    let formonth =e.target.value;
    setmonthval(moment(formonth).format("MMMM-YYYY"))
  } 
  const onNAmeChange=(e)=>{
    setnameval(e.target.value)
  } 
    const columns = [
      {
        name: '#',
        selector: row => row.title,
       
    },
    {
        name: 'EmployeeName',
        selector: row => row.EmployeeName,
        sortable: true,
        
    },
    {
      name: 'Present',
      selector: row => row.Present,
      sortable: true,
  },
  {
    name: 'Absent',
    selector: row => row.Absent,
    sortable: true,
},
{
  name: 'HalfDay',
  selector: row => row.HalfDay,
  sortable: true,
},
{
  name: 'Latecoming',
  selector: row => row.Latecoming,
  sortable: true,
},
{
  name: 'Emergency Leave',
  selector: row => row.EmergencyLeave,
  sortable: true,
},
{
  name: 'Causal Leave',
  selector: row => row.CausalLeave,
  sortable: true,
},
{
  name: 'Leave',
  selector: row => row.Leave,
  sortable: true,
}
    ];
    
  
    const data = [
        {
          id: 1,
          title: <div class="widget-26-job-emp-img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"
          alt="Company" /></div>,
           EmployeeName:"ritu",
           Present:'2',
           Absent:'2',
           HalfDay:'2',
           Latecoming:'2',
           CausalLeave:'2',
           EmergencyLeave:'2',
          Leave:'2'
        },
        {
          id: 2,
          title: <div class="widget-26-job-emp-img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"
          alt="Company" /></div>,
           EmployeeName:"ritu",
          Present:'2',
          Absent:'2',
          HalfDay:'2',
          Latecoming:'2',
          CausalLeave:'2',
          EmergencyLeave:'2',
         Leave:'2'
        },
       
    ]


    
      let decmonth;
      const PreviousmonthChange = () => {
        decmonth = moment(monthval, "MMMM-YYYY")
          .subtract(1, "month")
          .format("MMMM-YYYY");
        setmonthval(decmonth);
      };
      const NextmonthChange = () => {
        decmonth = moment(monthval, "MMMM-YYYY")
          .add(1, "month")
          .format("MMMM-YYYY");
        setmonthval(decmonth);
      };
    return (
        <div>
             <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          {/* right side */}
          <div className="dashboard_rightside col-md-10">
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-12 pt-3 px-4"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-5 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  {/* <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      Attendance History
                    </button>

                    <button className="btn btn-sm btn-outline-secondary">
                      Salary History
                    </button>
                  </div> */}
                </div>
              </div>

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
                                    value={nameval}
                                    onMonthChange={onNAmeChange}
                                  />
                                  <SearchSection
                                    labeltext={"Date"}
                                    inputtype={"month"}
                                    value={monthval}
                                    onMonthChange={onMonthChange}
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
                </div></div>
                {/*  */}
 {/* bottom secrtion */}
 <div className="attendancehistory_list">
            {/* month sorting */}
            <div className="monthname_sort">
                  <BsFillCaretLeftFill onClick={PreviousmonthChange} />
                  <h4 className="monthname_text">{monthval}</h4>
                  <BsFillCaretRightFill onClick={NextmonthChange} />
                </div>
 
 
            {/*  */}
{/* history */}

<DataTable
pagination
            columns={columns}
            data={data}
            highlightOnHover
		pointerOnHover
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />




{/* historyend */}
            </div>
            </main>
        </div>
        </div>

            {/*  */}
          </div>

          {/* end */}
        </div>
    );
}

export default AttendanceHistory;
