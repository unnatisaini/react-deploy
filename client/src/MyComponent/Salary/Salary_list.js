/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../styles/salary/Salary_list.css';
import { Link, useNavigate } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import {  useState } from 'react';
import Axios from 'axios';
import moment from "moment";


const ExpandedComponent = ({ data }) => <div className="dropdown_detail">
<div className="dropdown_personaldet">
<h6 className="datastaffname">{data.staff_name}</h6>
<h6 className="mx-3">{data.gender}</h6>
<h6>{data.city}</h6>
</div>
<div className="dropdown_personaldetail">
<h6 className="datastaffname">{data.address}</h6>
<h6>{moment(data.dob).format('DD-MMMM-YYYY')}</h6>
</div>
</div>;
function Salary_list(props) {
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  getEmployees();
  const salarygenereate =(e)=>{
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
  //   {
  //     name: 'Current Salary',
  //     selector: row => row.salary,
  //     sortable: true,
  // },
    {
      name: 'Action',
      selector: row => <button className="btn btn-sm btn-outline-secondary" value={row.id} onClick={salarygenereate}>Generate salary</button>,
      sortable: false,

  },
];
const navigator=useNavigate();
// const data = [
//   {
//       id: 1,
//       profile:<div class="emp_profile_img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"
//       alt="Company" className='emp_profile' /></div>,
//       title: 'Beetlejuice',
//       director:'Developer',
//       salary: '120000',
//   },
//   {
//       id: 2,
//       profile:<div class="emp_profile_img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png"
//       alt="Company" className='emp_profile'/></div>,
//       title: 'Ghostbusters',
//       director:'Developer',
//       salary: '120000',

//   },
// ]

  return (

    <>
        <Header/>
      <div className="container-fluid">

        <div className="row">
          <Sidebar/>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                <Link to='/Salary_history' className="nav-link">

                  <button className="btn btn-sm btn-outline-secondary">Salary Summary</button>
                </Link>
                 
                </div>
                
              </div>
            </div>
            <h5>Search</h5>

            <div className='Search_box'>
              <label>Staff Name</label>
              <input className="form-control form-control-dark w-50" type="text" placeholder="Search" aria-label="Search" onChange={props.onNameChange}
              value={props.searchvalue} />
             
              <label placeholder="Search">Month</label>
             
           <select>Select
            <option>Select</option>
            <option></option>
            <option></option>

           </select>
           <label placeholder="Search">Year</label>

           <select>Select
            <option>Select</option>
            <option></option>
            <option></option>

           </select>
            </div>

            <div className='search_btn'>
              <button className='btn-btn-search'>Search</button>
              <button className='btn-btn-search'>Reset</button>
            </div>
            <h2 className='text-center mt-5'>Salary Management</h2>
            <DataTable
            columns={columns}
            data={employeeList}
            pagination
            expandableRows
            expandableRowsComponent={ExpandedComponent}
          
        />
          </main>

        </div>

      </div>

    </>
  );
}

export default Salary_list;