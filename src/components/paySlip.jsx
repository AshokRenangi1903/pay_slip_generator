import React, { Component } from "react";
import AllEmployees from "../employees/allEmployees";
import { useLocation, useParams } from "react-router-dom";
import getEmployees from "../employees/employeesData";
import "./paySlip.css";

function PaySlip() {
  const { id } = useParams();
  // const params = useParams();
  // console.log(params);

  const location = useLocation();
  const state = location.state;
  console.log(state);

  const total_earnings =
    Number(state.salary) +
    Number(state.hra) +
    Number(state.special_allowance) +
    Number(state.conveyance) +
    Number(state.medical_allowance);

  const total_deductions =
    Number(state.professional_tax) + Number(state.pf) + Number(state.tds);

  const employeeDetails = getEmployees().find(
    (eachEmployee) => eachEmployee.id == id
  );

  return (
    <>
      {/* <!-- company Heading line --> */}

      <section className="cvg">
        {/* <!-- cvg left side content --> */}
        <div className="cvg-l">
          {/* <!-- circle --> */}
          <div className="circle">
            <span className="cvg-head">CVG</span>
            <span className="cvg-tail">TECH PVT LTD</span>
          </div>

          {/* <!-- company descrption --> */}
          <div className="cvg-desc">
            <span className="cvg-title">CVG TECH PRIVATE LIMITED</span>
            <br />
            <span className="addr1">
              No.46, K.No.466/A, Ground floor 8th C <br />
              Cross, Devasandra
            </span>
            <br />
            <span className="addr2">Benguluru,Karnataka, India, 560036</span>
            <br />
            <span className="mobile">9902438702</span>
            <br />
            <span className="email">cvggroups.us@gmail.com</span>
            <br />
            <span className="gst">GSTIN #29AAKCC7337H1ZA</span>
          </div>
        </div>

        {/* <!-- cvg left side content ************--> */}
        <div className="cvg-r">
          <h2 className="month">Pay Slip For {state.month}</h2>
        </div>
      </section>

      {/* <!-- company Heading line*********** --> */}

      {/* <!-- Employeee Details --> */}

      <section className="employee">
        {/* <!-- left table  --> */}
        <div className="em-left">
          <table>
            <tr>
              <td>Employee Name</td>
              <td>
                <b>{employeeDetails.name}</b>
              </td>
            </tr>
            <tr>
              <td>Employee Number</td>
              <td>{employeeDetails.id}</td>
            </tr>
            <tr>
              <td>Date of Joining</td>
              <td>{employeeDetails.e_details.doj}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{employeeDetails.e_details.designation}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{employeeDetails.e_details.location}</td>
            </tr>
            <tr>
              <td>Effective Workdays</td>
              <td>{state.eff_work_days}</td>
            </tr>
            <tr>
              <td>Days in month</td>
              <td>{state.total_days}</td>
            </tr>
          </table>
        </div>
        <div className="line"></div>

        {/* <!-- right table --> */}
        <div className="em-right">
          <table>
            <tr>
              <td>Bank Name</td>
              <td>{employeeDetails.bank_details.bank_name}</td>
            </tr>
            <tr>
              <td>Bank Account No</td>
              <td>{employeeDetails.bank_details.acc_no}</td>
            </tr>
            <tr>
              <td>IFSC Code</td>
              <td>{employeeDetails.bank_details.ifsc_code}</td>
            </tr>
            <tr>
              <td>PAN No</td>
              <td>{employeeDetails.bank_details.pan_no}</td>
            </tr>
            <tr>
              <td>PF No</td>
              <td>{employeeDetails.bank_details.pf_no}</td>
            </tr>
            <tr>
              <td>ESI No</td>
              <td>{employeeDetails.bank_details.esi_no}</td>
            </tr>
          </table>
        </div>
      </section>
      {/* <!-- Employee Details ************** --> */}

      {/* <!-- Earnings and Deduction --> */}

      <section className="ed">
        {/* <!-- Earnings --> */}

        <div className="earnings">
          <div>
            <div className="key-value" id="e-head">
              <span className="earning">Earnings</span>
              <span className="actual">Actual</span>
            </div>
            <div className="key-value">
              <span className="basic">Basic</span>
              <span className="basic-value">{state.salary}</span>
            </div>
            <div className="key-value">
              <span className="hra">HRA</span>
              <span className="hra-value">{state.hra}</span>
            </div>
            <div className="key-value">
              <span className="special-allowance">Special Allowance</span>
              <span className="special-allowance-value">
                {state.special_allowance}
              </span>
            </div>
            <div className="key-value">
              <span className="conveyance">Conveyance</span>
              <span className="conveyance-value">{state.conveyance}</span>
            </div>
            <div className="key-value">
              <span className="medical-allowance">Medical Allowance</span>
              <span className="medical-allowance-value">
                {state.medical_allowance}
              </span>
            </div>
          </div>

          <div className="te">
            <div className="key-value">
              <b>
                {" "}
                <span className="total-earnings">Total Earnings</span>
              </b>
              <b>
                <span className="total-earnings-value">{total_earnings}</span>
              </b>
            </div>
          </div>
        </div>

        {/* <!-- Deductions --> */}
        <div className="deductions">
          <div>
            <div className="key-value" id="d-head">
              <span className="deductions">Deductions</span>
              <span className="actual">Actual</span>
            </div>
            <div className="key-value">
              <span className="professional-tax">Professional Tax</span>
              <span className="professional-tax-value">
                {state.professional_tax}
              </span>
            </div>
            <div className="key-value">
              <span className="pf">PF</span>
              <span className="pf-value">{state.pf}</span>
            </div>
            <div className="key-value">
              <span className="tds">TDS withheld</span>
              <span className="tds-value">{state.tds}</span>
            </div>
          </div>
          <div className="td">
            <div className="key-value">
              <b>
                <span className="total-deductions">Total Deductions</span>
              </b>
              <b>
                <span className="total-deductions-value">
                  {total_deductions}
                </span>
              </b>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Earnings and Deduction***************** --> */}

      {/* <!-- net pay for the month --> */}
      <section className="net-pay">
        <div className="te-td">
          Net pay for the month (total earnings - total deductions)
        </div>
        <div className="net-pay-value">
          Rs.<span>{total_earnings - total_deductions}</span>
        </div>
      </section>

      {/* <!-- net pay for the month****************** --> */}

      <section className="sign">
        <div className="sign-left">
          <b>Notes</b>
        </div>
        <div className="sign-right">
          <p>
            <i>For CVG TECH PRIVATE LIMITED</i>
          </p>
          <br />
          <p>____________________</p>
          <br />
          <p>
            <i>Authorized Signature</i>
          </p>
        </div>
      </section>
    </>
  );
}
export default PaySlip;
