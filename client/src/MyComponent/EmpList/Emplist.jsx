import React,{useEffect, useState, useMemo } from 'react';
import Axios from 'axios';
import moment from 'moment';
import DataTable  from 'react-data-table-component';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { useNavigate } from "react-router-dom";
import FilterComponent from "./FilterComponent";
import { confirm } from "react-confirm-box";
import '../../styles/EmpList/emplist.css';


const Emplist = () => {
  const [apicall, setapicall] = useState(false);
  
  const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
      false
    );
    let navigate = useNavigate();  
    const [employeeList, setEmployeeList] = useState([]);

    const filteredItems = employeeList.filter(
      item =>
        JSON.stringify(item)
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) !== -1
    );
  
    const subHeaderComponent = useMemo(() => {
      const handleClear = () => {
        if (filterText) {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText("");
        }
      };

      return (
        <FilterComponent
          onFilter={e => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      );
    }, [filterText, resetPaginationToggle]);


   

    const getEmployees = () => {
        Axios.get("https://apnaorganicstore.in/index/employees").then((response) => {
          setEmployeeList(response.data);
          setapicall(false)
        });
      };
      useEffect(() => {
        getEmployees();
      },[apicall]);

      

  const HandleClick =(e,staff_name)=>{

    let arr = e.target.value.split(',')

  let staffidd = e.target.value;
  localStorage.setItem('staffid',staffidd);
  navigate('/UpdateEmployee')
  }
    
  const onClickdelete =async(e)=>{
    let id = e.target.value;
    const result = await confirm("ARE YOU SURE YOU WANT TO PERFORM THIS OPERATION");
    if (result) {
    Axios.post(`https://apnaorganicstore.in/index/delete/${id}`).then((response) =>{
        setapicall(true)
  })
};
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
            name: 'Email',
            selector: row => row.email,
        sortable: true,

        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
        sortable: true,

        },
        {
            name: 'Date of Joining',
            selector: row => moment(row.doj).format("YYYY-MM-DD"),
        sortable: true,

        },
        {
          name: 'Department',
          selector: row => row.department_id,
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
          cell: (row) =>( <div className='action_btn'> <button  onClick={HandleClick} value={row.id} className="firsticpn fas fa-pen"></button>
          <button  onClick={onClickdelete} value={row.id}   className="fas fa-trash-alt"></button>
          </div> ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
          
        },
    ];

   return (
    <div className='empList_page'>
    <Header/>
    <div className="container-fluid">
        <div className="row">
    <Sidebar/>
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
    <div className="emp_table">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-5">
              <h1 className="h1"><b>Employee List</b></h1>
              <div className="btn-group mr-2 px-5">

              <button className="btn btn-sm btn-outline-secondary px-5 py-2" onClick={()=> {navigate("/AddEmployee");}}>
                  <h3>Add employee</h3>
                    </button>
              </div>
            </div>
           <div className="dailyattendance_table">
              <div className="dailyattendance_table_box"> 
                
               

    <DataTable
    className='emp_data'
            pagination
            highlightOnHover
		        pointerOnHover
            defaultSortField="name"
            columns={columns}
            data={filteredItems}
            subHeader
            subHeaderComponent={subHeaderComponent}
      />  
          </div>
            </div>
            </div>
          </main>
        </div>
      </div>
      </div>
    );
}

export default Emplist;
