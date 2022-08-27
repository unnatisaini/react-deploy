import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Salary_slip(props) {
    return (
        <>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center lh-1 mb-2">
                            <h6 class="fw-bold">Payslip</h6> <span class="fw-normal">Payment slip for the month of August 2022</span>
                        </div>
                        <div class="d-flex justify-content-end"> <span><b>Working Branch:</b>We2code Technology</span> </div>
                        <div class="row">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">EMP Id:</span> <small class="ms-3">39124</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">EMP Name:</span> <small class="ms-3">Ashok</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Designation and Department:</span> <small class="ms-3">101523065714</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Payment Month:</span> <small class="ms-3">August</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                            <div> <span class="fw-bolder">Name of Bank:</span> <small class="ms-3">SBI</small> </div>
                        </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Mode of Payment:</span> <small class="ms-3">Online</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Date of Payment:</span> <small class="ms-3">08-Aug-22</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder">Ac No.:</span> <small class="ms-3">*******0701</small> </div>
                                    </div>
                                </div>
                            </div>
                            <table class="mt-4 table table-bordered">
                                <thead class="bg-dark text-white">
                                    <tr>
                                        <th scope="col">Desciption</th>
                                        <th scope="col">Earnings</th>
                                        <th scope="col">Deductions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Basic</th>
                                        <td>16250.00</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Dearness Allowance</th>
                                        <td>550.00</td>
                                        <td> </td>


                                    </tr>
                                    <tr>
                                        <th scope="row">House Rent Allowance</th>
                                        <td>1650.00 </td>
                                        <td> </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Sales Incentive</th>
                                        <td>0.00</td>
                                        <td> </td>


                                    </tr>
                                    <tr>
                                        <th scope="row">Leave Encashment</th>
                                        <td>0.00</td>
                                        <td> </td>



                                    </tr>
                                    <tr>
                                        <th scope="row">Holiday Wages</th>
                                        <td>500.00</td>
                                        <td> </td>


                                    </tr>
                                    <tr>
                                        <th scope="row">Special Allowance</th>
                                        <td>100.00</td>
                                        <td> </td>



                                    </tr>
                                    <tr>
                                        <th scope="row">PF</th>
                                        <td></td>
                                        <td>0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> ESI</th>
                                        <td></td>
                                        <td colspan="2">2400.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Professional Tax</th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Other</th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Absent</th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Leave</th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Late Comings</th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Half Day </th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">CL</th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ML</th>
                                        <td></td>
                                        <td colspan="2">0.00</td>
                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row">Total</th>
                                        <td>25970.00</td>
                                        <td>2400.00</td>

                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row">Gross Earnings(A)</th>
                                        <td></td>
                                        <td></td>

                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row">Gross Deduction(B)</th>
                                        <td></td>
                                        <td></td>


                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row">Net Salary Payable(A-B)</th>
                                        <td></td>
                                        <td></td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-md-4"> <br /> <span class="fw-bold">Net Pay : 24528.00</span> </div>
                            <div class="border col-md-8">
                                <div class="d-flex flex-column"> <span>In Words</span> <span>Twenty Five thousand nine hundred seventy only</span> </div>
                            </div>
                        </div>
                        <div class="d-flex gap-2">
                            <Link to='/Salary_list' className="nav-link">

                                <Button>Home</Button>
                            </Link>
                            <Button>Download</Button>

                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="d-flex flex-column mt-2"><span class="mt-4">Regards</span> <span class="fw-bolder">We2code Technology</span>  </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Salary_slip;
