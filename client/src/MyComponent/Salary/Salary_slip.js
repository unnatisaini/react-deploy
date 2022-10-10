import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Axios from "axios";
import moment from "moment";
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
var converter = require('number-to-words');

// import { ToWords } from 'to-words';

function Salary_slip(props) {
   
    // const toWords = new ToWords();
    const printpdf = (req, res) => {
        const doc = new jsPDF();
        //get table html
        const pdfTable = document.getElementById('divToPrint');
        //html to pdf format
        var html = htmlToPdfmake(pdfTable.innerHTML);

        const documentDefinition = { content: html };
        console.log("documentDefinition------" + documentDefinition)

        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        console.log("documentDefinition------" + pdfMake.vfs)
        pdfMake.createPdf(documentDefinition).open();

        //   require('dotenv').config()

        //   let nodemailer = require('nodemailer')
        //   const transporter = nodemailer.createTransport({
        //     port: 465,
        //     host: "smtp.gmail.com",
        //     auth: {

        //       user: 'vijendra.patel.we2code@gmail.com',
        //       pass: 'sylz pmpi oxzg zvdb',

        //     },
        //     secure: true,
        //   })
        //   const mailData = {
        //     from: 'demo email',
        //     to: `${req.body.email}`,
        //     subject:`${req.body.name}`,
        //     text: `${req.body.message}`,
        //     html: `${req.body.name}${req.body.message}`,
        //   }
        //   transporter.sendMail(mailData, function (err, info) {
        //     if(err)
        //       {
        //       console.log(err)
        //       }
        //     else
        //     {
        //       console.log(info)
        //     }
        //   });
    }

    // export default function (req:any, res:any) {






    const idd = localStorage.getItem("staffid");
    console.log('___idd___' + idd)

    const deductionamt = localStorage.getItem("deduction");
    const [employeeList, setEmployeeList] = useState([]);
    const [bankdetail, setbankdetail] = useState([]);
    const [attendancedata, setattendancedata] = useState([]);
    const [holidaycount, setholidaycount] = useState([]);
    const [salaryList, setsalaryList] = useState([]);
    const [lc, setlc] = useState();
    const [hd, sethd] = useState();
    const [cl, setcl] = useState();
    const [el, setel] = useState();
    const [ia, setia] = useState();
    const [ua, setua] = useState();
    const [ml, setml] = useState();
    const [wday, setwday] = useState();
    const [depart, setdepart] = useState([]);
    const [departmentdata, setdepartmentdata] = useState([]);


    const [attendmonth, setattendmonth] = useState(
        moment().format(`YYYY-MM-DDT00:00:00+00:00`)
    );


    // date

    let momentmonth = moment(attendmonth, "YYYY-MM").daysInMonth();

    let firstdate = moment(attendmonth, "YYYY-MM")
        .startOf("month")
        .format(`YYYY-MM-DDT00:00:00+00:00`);
    let lastdate = moment(attendmonth, "YYYY-MM")
        .endOf("month")
        .format(`YYYY-MM-DDT00:00:00+00:00`);
    const getEmployees = () => {

        Axios.get(`https://apnaorganicstore.in/index/bankdetails/${idd}`).then((response) => {
            if (response.data[0] != null || response.data[0] != 'undefined' || response.data[0] != '' || response.data[0] != 'null' || response.data[0] != undefined) {
                setbankdetail(response.data[0]);
            }
            {
                setbankdetail('');
            }
        });
        Axios.get(`https://apnaorganicstore.in/index/attendancehistoryy/${firstdate}/${lastdate}/${idd}`
        ).then((response) => {
            sethd(response.data[0].HD);
            setlc(response.data[0].LC);
            setattendancedata(response.data[0]);
            setcl(response.data[0].CL);
            setml(response.data[0].ML);
            setel(response.data[0].EL);
            setia(response.data[0].IA);
            setua(response.data[0].UA)


        });

        const department = () => {
            Axios.get("https://apnaorganicstore.in/index/department").then((response) => {
                setdepart(response.data);
                // console.log("dfdf" + JSON.stringify(response.data))
            });

        };

        Axios.get(`https://apnaorganicstore.in/index/getholiday/${firstdate}/${lastdate}`
        ).then((response) => {
            setholidaycount(response.data[0]);
            let wdays = momentmonth - response.data[0].count;
            setwday(wdays)
        });
        Axios.get(`https://apnaorganicstore.in/index/employeeDetail/${idd}`).then((response) => {
            setEmployeeList(response.data[0]);
            setdepartmentdata(response.data[0].department_id)

        });
        department();
    };
    useEffect(() => {
        getEmployees();

    }, []);

    console.log('______' + employeeList.salary)
    //   salary deduction
    let netsalary;
    let deductionn;
    let GrossEarnings;
    let onedaysal;
    let absent;
    let leave;
    let medicalleave;
    let emergencyleave;
    let halfday;

    onedaysal = (employeeList.salary / (wday))

    absent = ((onedaysal) * 3 * (ua))

    leave = (onedaysal * 1 * (ia))
    medicalleave = (onedaysal * 1 * (ml))
    emergencyleave = (onedaysal * 1 * (el))
    halfday = ((onedaysal / 2) * 1 * (hd))
    let latecom;

    if (lc > 2) {
        let diff = lc - 2
        if (diff == 1) {
            latecom = 0
        }
        if ((diff % 3 == 0 && diff % 2 == 0) || diff % 3 == 0) {
            latecom = (diff / 3) * onedaysal
        }
        {
            if (diff % 2 == 0 && diff % 3 !== 0) {
                latecom = (diff / 4) * onedaysal
            }
        }
    }
    if (lc < 2) {
        latecom = 0;
    }
    deductionn = absent + leave + medicalleave + emergencyleave + halfday + latecom;
    GrossEarnings = (employeeList.salary)
    netsalary = (GrossEarnings) - (deductionn);
    var words;
    words = converter.toWords[(netsalary)];
    
    // converter.toWords(netsalary);


    return (
        <>

            <div id="divToPrint" class="container mt-5 mb-5" >
                <div class="row">
                    <div class="col-md-9 mx-auto">
                        <div class="text-center lh-1 mb-2">
                            <h3 class="fw-bold">Payslip</h3> <span class="fw-normal" className='label_text'>Payment slip for the month of August 2022</span>
                        </div>
                        <div class="d-flex justify-content-end label_text"> <span><b>Working Branch:</b>We2code Technology</span> </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">EMP Id:</span> <small class="ms-3 label_text">{employeeList.id}</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">EMP Name:</span> <small class="ms-3 label_text">{employeeList.staff_name}</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">Designation and Department:</span> <small class="ms-3 label_text">{depart.department_name}</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">Payment Month:</span> <small class="ms-3 label_text">{moment(bankdetail.added_on).format('YYYY-MMMM')}</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">Name of Bank:</span> <small class="ms-3 label_text">{bankdetail.bank_name}</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">Mode of Payment:</span> <small class="ms-3 label_text">Online</small> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">Date of Payment:</span> <small class="ms-3 label_text">{moment(bankdetail.added_on).format('YYYY-MMMM-DD')}</small> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div> <span class="fw-bolder label_text">Ac No.:</span> <small class="ms-3 label_text">{bankdetail.account_no}</small> </div>
                                    </div>
                                </div>
                            </div>
                            <table class="mt-4 table table-bordered salarysliptable">
                                <thead class="bg-dark text-white">
                                    <tr>
                                        <th scope="row" className='label_text'>Description</th>
                                        <th scope="row" colspan="2" className='label_text'>Earnings</th>
                                        <th scope="row" colspan="2" className='label_text'>Deductions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className='label_text'>Basic</th>
                                        <td className='label_text' colspan="2">{employeeList.salary}</td>
                                        <td colspan="2"> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text' >Dearness Allowance</th>
                                        <td className='label_text' colspan="2">{salaryList.allowance}</td>
                                        <td colspan="2"> </td>


                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text' >House Rent Allowance</th>
                                        <td className='label_text' colspan="2">{salaryList.allowance} </td>
                                        <td colspan="2"> </td>
                                    </tr>

                                    <tr>
                                        <th scope="row" className='label_text' >Sales Incentive</th>
                                        <td className='label_text' colspan="2">{salaryList.allowance}</td>
                                        <td colspan="2"> </td>


                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>Leave Encashment</th>
                                        <td className='label_text' colspan="2">{salaryList.allowance}</td>
                                        <td colspan="2"> </td>



                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text' >Holiday Wages</th>
                                        <td className='label_text' colspan="2">{salaryList.allowance}</td>
                                        <td colspan="2"> </td>


                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>Special Allowance</th>
                                        <td className='label_text' colspan="2">{salaryList.allowance}</td>
                                        <td colspan="2"> </td>



                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>PF</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{salaryList.tax}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'> ESI</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{salaryList.tax}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'> Professional Tax</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{salaryList.tax}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>Other</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{salaryList.tax}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>Absent</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{absent}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>Leave</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{leave}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'> Late Comings</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{latecom}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'> Half Day </th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{halfday}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>CL</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{'0'}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='label_text'>ML</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{medicalleave}</td>
                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row" className='label_text'>Total</th>
                                        <td className='label_text' colspan="2">{GrossEarnings}</td>
                                        <td colspan="2" className='label_text'>{deductionn}</td>

                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row" className='label_text'>Gross Earnings(A)</th>
                                        <td colspan="2" className='label_text'>{GrossEarnings}</td>
                                        <td colspan="2" ></td>

                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row" className='label_text'>Gross Deduction(B)</th>
                                        <td colspan="2"></td>
                                        <td colspan="2" className='label_text'>{deductionn}</td>


                                    </tr>
                                    <tr class="border-top">
                                        <th scope="row" className='label_text'>Net Salary Payable(A-B)</th>
                                        <td className='label_text' colspan="2">{netsalary}</td>
                                        <td colspan="2" className='label_text'></td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-md-4"> <br /> <span class="fw-bold label_text" >Net Pay : {netsalary}</span> </div>
                            <div class="border col-md-8 mt-2">
                                <div class="d-flex flex-column label_text"> <span>In Words</span> <span><b>{words} only</b></span> </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-end">
                            <div class="d-flex flex-column mt-2"><span class="mt-4 label_text">Regards</span> <span class="fw-bolder label_text">We2code Technology</span>  </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex gap-2">
                <Link to='/Salary_list' className="nav-link">

                    <Button><h4>Home</h4></Button>
                </Link>
                <a href={'/Salary_slip'} download={'/Salary_slip.pdf'}>

                    <Button onClick={printpdf}> <h4>Download</h4></Button>
                </a>
            </div>
        </>
    );
}

export default Salary_slip;
// import React from 'react';
// import { Page, Text, View, Document } from '@react-pdf/renderer';

// const Salary_slip = () => (
//   <Document>
//     <Page size="A4" style={{ backgroundColor: 'tomato' }}>
//       <View style={{ color: 'white', textAlign: 'center', margin: 30 }}>
//         <Text>Section #1</Text>
//       </View>
//     </Page>
//   </Document>
// );
// export default Salary_slip;
