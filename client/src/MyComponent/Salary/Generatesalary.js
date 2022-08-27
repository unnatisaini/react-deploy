/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import '../../styles/salary/Generatesalary.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Generatesalary(props) {
  return (
    <>

      <Nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
        {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> */}
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </Nav>
      <div className="container-fluid">

        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">

              <ul className="nav flex-column">



                <li className="nav-item">

                  <span data-feather="shopping-cart"></span>
                  Attendance

                </li>
                <li className="nav-item">
                  <Link to='/' className="nav-link">
                    <span data-feather="users"></span>
                    Salary List
                  </Link>
                </li>



              </ul>




            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <Link to='/Salary_history' className="nav-link">

                    <button className="btn btn-sm btn-outline-secondary">View</button>
                  </Link>
                  {/* <Link to='/Salary_slip' className="nav-link">

                  <button className="btn btn-sm btn-outline-secondary">Salary Slip</button>
                  </Link> */}
                </div>

              </div>
            </div>
            <div class="container">
              <div class=" text-center mt-2">

                <h1>Generate Salary</h1>
                <h3>August</h3>
              </div>


              <div class="row ">
                <div class="col-lg-8 mx-auto">
                  <div class="card mt-2 mx-auto p-4 bg-light">
                    <div class="card-body bg-light">

                      <div class="container">
                        <form id="contact-form" role="form">
                          <div class="controls">

                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="form_name">Name of Employee *</label>
                                  <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required" data-error="Firstname is required." />

                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="form_lastname">Employee Id *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" data-error="Lastname is required." />

                                </div>
                              </div>
                            </div>
                            <h6 class="mt-2"><b>Bank Details-</b></h6>
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="form_name">Account no. *</label>
                                  <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="form_lastname">Name of Bank *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                            </div>
                            <h6 class="mt-2"><b>Working Details-</b></h6>

                            <div class="row">
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="form_name">Total working days *</label>
                                  <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required" data-error="Firstname is required." />

                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="form_lastname">Late comings *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="form_lastname">Leave *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="form_lastname">Half days *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="form_lastname">Absent *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="form_lastname">CL *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                              <div class="col-md-3">
                                <div class="form-group">
                                  <label for="form_lastname">ML *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" />

                                </div>
                              </div>
                            </div>
                            <h6 class="mt-2"><b>Salary Details-</b></h6>

                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="form_name">Basic *</label>
                                  <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required" data-error="Firstname is required." />

                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label for="form_lastname">Current Salary *</label>
                                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" data-error="Lastname is required." />

                                </div>
                              </div>
                            </div>
                            <h6 class="mt-2"><b>Allowance-</b></h6>

                            <div class="row">
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_email">House Rent Allowance *</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />

                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_email">Dearness Allowance *</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />

                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_need">Other Allowance *</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />

                                </div>
                              </div>
                            </div>
                            <h6 class="mt-2"><b>Deduction-</b></h6>

                            <div class="row">
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_message">Professional Tax *</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />
                                </div>

                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_message">Income Tax *</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />
                                </div>

                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_message">ESI *</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />
                                </div>

                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_message">PF *</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />
                                </div>

                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label for="form_message">Other Deduction</label>
                                  <input id="form_email" type="email" name="email" class="form-control" placeholder="" required="required" data-error="Valid email is required." />
                                </div>

                              </div>
                              <div class="row p-2">
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="form_name"><b>TOTAL EARNING *</b></label>
                                    <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required" data-error="Firstname is required." />

                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-group">
                                    <label for="form_lastname"><b>TOTAL DEDUCTION *</b></label>
                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="" required="required" data-error="Lastname is required." />

                                  </div>
                                </div>
                              </div>
                              <div class="row p-2">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label for="form_name"><b>Net Salary *</b></label>
                                    <input id="form_name" type="text" name="name" class="form-control" placeholder="" required="required" data-error="Firstname is required." />

                                  </div>
                                </div>
                              </div>

                              <div class="col-md-12 mt-3">
                                <Link to='/Salary_slip' className="nav-link">

                                  <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Generate Salary" />
                                </Link>
                              </div>

                            </div>


                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Generatesalary;