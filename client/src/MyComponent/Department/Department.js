import React, { useState,useEffect } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";
import Axios from 'axios';
import DataTable from 'react-data-table-component';

const Department = () => {
  const [Departmentdata, setDepartmentdata] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/department").then((response) => {
        setDepartmentdata(response.data);
    });
},[]);
//   console.log("dsdsdsd"+Departmentdata[0].id)
//   useEffect(() => {
//     getDepartment();
//   },[]);
const editClick =(id)=>{
    localStorage.setItem('departmentid',`${id}`)
}
const DelClick =(id)=>{
 const delid= localStorage.setItem("departmentid",`${id}`)
    // Axios.delete(`http://localhost:3001/departmentdelete/${delid}`).then((response) => {
    //     setDepartmentdata(response.data);
    // });
}
const addDEpartment = () =>{
<input type={'text'}/>
}
const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        sortable: true,
       
    },
    {
        name: 'Department',
        selector: row => row.department_name,
        sortable: true,
        
    },
    {
        name: "Actions",
        cell: (row) =>( [
            <i
              key={row.title}
              onClick={editClick.bind(this, row.id)}
              className="first fas fa-pen"
            ></i>
            ,
            <i
            onClick={DelClick.bind(this, row.id)}
              className="fas fa-trash-alt"
            ></i>
     
    ]   ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
      },
    
];
    return (
        <>
            <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
{/*  */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <Link to="/department" className="nav-link">
                    <button className="btn btn-sm btn-outline-secondary">
                      Attendance History
                    </button>
                  </Link>
                
                </div>
              </div>
            </div>


{/* main section */}
{/* <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                {Departmentdata.map((depdata)=>{<h1>{depdata}</h1>})}
                    <div class="col-sm-8"><h1><b>Department Details</b></h1></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered table-hover departtable">
                <thead class='tablehead bg-info'>
                    <tr>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody class='departtable_body'>
                {Departmentdata.map((depdata)=>{
                    <tr>
                        <td>{'depdata.department_name'}</td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    
                })}
                </tbody>
            </table>
        </div>
    </div>      */}
    <div class="row">
    <div class="col-sm-8"><h1><b>Department Details</b></h1></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new" onClick={addDEpartment}><i class="fa fa-plus"></i> Add New</button>
 </div>
      </div>             
                
    <DataTable
                highlightOnHover
		        pointerOnHover
            pagination
            columns={columns}
            data={Departmentdata}
            subHeader
        />
{/*  */}
            {/*  */}
            </main>
        </div>
      </div>
        </>
    );
}

export default Department;
