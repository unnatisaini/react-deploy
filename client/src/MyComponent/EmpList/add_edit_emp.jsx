import React,{useState} from 'react';
import Header from '../common/Header';
import Axios from 'axios';
import Sidebar from '../common/Sidebar';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const AddEditEmp = () => {
  let navigate = useNavigate();   
  const [employeeList, setEmployeeList] = useState([]);
  const [EmployeeDetail, setEmployeeDetail] = useState([]);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [doj, setDoj] = useState("");
  const [state, setState] = useState("");

  
  const addEmployee = () => {
   if(!name){
    toast("Please Enter the name",{
      position: "top-center",
      autoClose: 5000,
      })
    return false;
   }
   if(gender.length === 0){
    toast("Please Enter the Gender",{
      position: "top-center",
      autoClose: 5000,
      });
    return false;
   }
   if(email.length === 0){
    toast("Please Enter the email",{
      position: "top-center",
      autoClose: 5000,
      });
    return false;
   }
   if(mobile.length === 0){
    toast("Please Enter the mobile Number",{
      position: "top-center",
      autoClose: 5000,
      });
    return false;
   }
   if(doj.length === 0){
    toast("Please Enter the Date of Joining",{
      position: "top-center",
      autoClose: 5000,
      });
    return false;
   }
   if(city.length === 0){
    toast("Please Enter the city",{
      position: "top-center",
      autoClose: 5000,
      });
    return false;
   }
   if(state.length === 0){
    toast("Please Enter the state",{
      position: "top-center",
      autoClose: 5000,
      });
    return false;
   }
   if(country.length === 0){
    toast("Please Enter the country",{
      position: "top-center",
      autoClose: 5000,
      });
    return false;
   }


    Axios.post("http://localhost:3001/create", {
        staff_name: name,
        gender: gender,
        email:email,
        mobile: mobile,
        doj: doj,
        city: city,
        state: state,
        country: country,
    }).then((response) => {
      navigate("/"); 
    });
  }

const nameOnchange=(e)=>{
setName(e.target.value)
}
const genderOnchange=(e)=>{
  setGender(e.target.value)
}
const cityOnchange=(e)=>{
  setCity(e.target.value)
}
const countryOnchange=(e)=>{
  setCountry(e.target.value)
}
const emailOnchange=(e)=>{
  setEmail(e.target.value)
}
const mobileOnchange=(e)=>{
  setMobile(e.target.value)
}
const dojOnchange=(e)=>{
setDoj(e.target.value)
  }
const stateOnchange=(e)=>{
setState(e.target.value)
  }
const idd = localStorage.getItem('staffid');
 
  if(window.location.pathname === '/UpdateEmployee'){
//     const getEmployees = (id) => {
//     Axios.get(`http://localhost:3001/employeeDetail/${idd}`).then((response) => {
//       setEmployeeDetail(response.data)
//   });

// };

  }
  // useEffect( () =>{
  //   getEmployees();
  
  // },[]);
    return (
        <div className="addemployee_box">
          <ToastContainer />
     <Header/>
     <div className="addemployee_box_row">
    <Sidebar className='sidebar_add_emp'/>
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
                  <button className="btn btn-sm btn-outline-secondary">
                    Salary History
                  </button>
                </div>
              </div>
            </div>

{/*  */}



{/*  */}




    <div className="information col-md-5 mx-auto my-5">
    {window.location.pathname === '/UpdateEmployee' ?<h3 className='text-center my-5'>Update Employee</h3> :
        <h3 className='text-center my-5'>Add Employee</h3>}
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Name" 
  aria-label="Username" aria-describedby="basic-addon1"
  onChange={nameOnchange}   />
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Gender" 
  aria-label="Username" aria-describedby="basic-addon1"
  onChange={genderOnchange}/>
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email" 
  aria-label="email" aria-describedby="basic-addon1"
  onChange={emailOnchange}/>
  
</div>
<div class="input-group mb-3">
  <input type="number" class="form-control" placeholder="Mobile no." 
  aria-label="Mobile no." aria-describedby="basic-addon1"
  onChange={mobileOnchange}/>
</div>
<div class="input-group mb-3">
  <input type="date" class="form-control" placeholder="Date of joining" 
  aria-label="Date of joining" aria-describedby="basic-addon1"
  onChange={dojOnchange} />
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="City" 
  aria-label="City" aria-describedby="basic-addon1"
  onChange={cityOnchange}/> 
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="state" 
  aria-label="state" aria-describedby="basic-addon1"
  onChange={stateOnchange}/>
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Country" 
  aria-label="Country" aria-describedby="basic-addon1"
  onChange={countryOnchange}/>
</div>
<button type="button" class="btn btn-primary w-100" onClick={addEmployee}>Add</button>
 </div>
 </main>
      
   </div>
  </div>
    );
}

export default AddEditEmp;
          