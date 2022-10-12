import DataTable from 'react-data-table-component';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import {  useState } from 'react';
import Axios from 'axios';
import moment from "moment";
import React,{useEffect} from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";


const ExpandedComponent = ({ data }) =>
//  <div className="dropdown_detail">
{/* <div className="dropdown_personaldet">
<h6 className="datastaffname">{data.staff_name}</h6>
<h6 className="mx-3">{data.gender}</h6>
<h6>{data.city}</h6>
</div> */}
{/* <div className="dropdown_personaldetail">
<h6 className="datastaffname">{data.address}</h6>
<h6>{moment(data.dob).format('DD-MMMM-YYYY')}</h6>
</div> */}
// </div>;
function SalaryHistory(props) {
  const [employeeList, setEmployeeList] = useState([]);
  const [salaryList, setsalaryList] = useState([]);
  const [attendmonth, setattendmonth] = useState(
    moment().format(`YYYY-MM-DDT00:00:00+00:00`)
  );
  const PreviousmonthChange = () => {
    let decmonth = moment(attendmonth)
      .subtract(1, "month")
      .format(`YYYY-MM-DDT00:00:00+00:00`);
    getEmployees();
    setattendmonth(decmonth);
   
  };

  const NextmonthChange = () => {
    let decmonth = moment(attendmonth)
      .add(1, "month")
      .format(`YYYY-MM-DDT00:00:00+00:00`);

    getEmployees();
    setattendmonth(decmonth);
 
  };

  // date
 
  let momentmonth = moment(attendmonth, "YYYY-MM").daysInMonth();

  let firstdate = moment(attendmonth, "YYYY-MM")
    .startOf("month")
    .format(`YYYY-MM-DDT00:00:00+00:00`);
  let lastdate = moment(attendmonth, "YYYY-MM")
    .endOf("month")
    .format(`YYYY-MM-DDT00:00:00+00:00`);
  const getEmployees = () => {
   
    Axios.get(`https://apnaorganicstore.in/index/salary/${firstdate}/${lastdate}`).then((response) => {
      setsalaryList(response.data);
    });
  
  };
  useEffect(() => {
    getEmployees();
  }, [attendmonth]);
  const salarygenerate =(e)=>{
    // let arr = e.target.value.split(',')
  let staffidd = e.target.value;
  localStorage.setItem('staffid',staffidd);
  navigator('/GenerateSalary')
  }
const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
  },
 
    {
        name: 'Staff Name',
        selector: row => row.staff_name,
        sortable: true,
      
    },
    {
      
        name: 'Salary',
        selector: row => row.salary,
        sortable: true,
    },
    {
      name: 'Current Salary',
      selector: row => row.total,
      sortable: true,
  },
   
];
const navigator=useNavigate();



  return (

    <>
        <Header/>
      <div className="container-fluid">

        <div className="row">
          <Sidebar/>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 salarylistbox_table">
          <div className="emp_table">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-5">
              <h1 className="h1"><b>Salary History</b></h1>
             
            </div>
           
            

            <div className="monthname_sort ">
                  <BsFillCaretLeftFill onClick={PreviousmonthChange} />
                  <h4 className="monthname_text">
                    {moment(attendmonth).format("MMMM-YYYY")}
                  </h4>
                  <BsFillCaretRightFill onClick={NextmonthChange} />
                </div>
            <DataTable
            columns={columns}
            data={salaryList}
            pagination
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          
        />
          </div>
          </main>

        </div>

      </div>

    </>
  );
}

export default SalaryHistory;