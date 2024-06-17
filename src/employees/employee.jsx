import React, { Component, useRef, useState } from "react";

import { Link, useParams } from "react-router-dom";
import getEmployees from "./employeesData";
import "./styleEmployee.css";

function Employee() {
  const { id } = useParams();

  const [month, setMonth] = useState("January");
  const [total_days, setTotalDays] = useState("");
  const [eff_work_days, setWorkDays] = useState("");

  const [salary, setSalary] = useState("");
  const [hra, setHRA] = useState("");
  const [special_allowance, setSpecialAllowance] = useState("");
  const [conveyance, setConveyance] = useState("");
  const [medical_allowance, setMedicalAllowance] = useState("");

  const [professional_tax, setProfessionalTax] = useState("");
  const [pf, setPF] = useState("");
  const [tds, setTDS] = useState("");

  const [deduction, setDeduction] = useState("");

  const employeeDetails = getEmployees().find(
    (eachEmployee) => eachEmployee.id == id
  );

  //data object to be transferred
  const data = {
    month,
    eff_work_days,
    total_days,

    salary,
    hra,
    special_allowance,
    conveyance,
    medical_allowance,

    professional_tax,
    pf,
    tds,

    deduction,
  };

  // month handler**********
  const monthHandler = (m) => {
    setMonth(m.target.value);
  };

  // total days handler
  const totalDaysHandler = (t) => {
    setTotalDays(t.target.value);
  };

  // work days handler
  const workDaysHandler = (w) => {
    setWorkDays(w.target.value);
  };

  // salary handler
  const salaryHandler = (e) => {
    setSalary(e.target.value);
  };

  // salary handler
  const hraHandler = (h) => {
    setHRA(h.target.value);
  };

  //specail allowance handler
  const specialAllowanceHandler = (s) => {
    setSpecialAllowance(s.target.value);
  };
  // conveyance handler
  const conveyanceHandler = (c) => {
    setConveyance(c.target.value);
  };
  // medical allowance handler
  const medicalAllowanceHandler = (m) => {
    setMedicalAllowance(m.target.value);
  };

  // professional Tax handler
  const professioalTaxHandler = (p) => {
    setProfessionalTax(p.target.value);
  };

  // pf handler
  const pfHandlder = (pf) => {
    setPF(pf.target.value);
  };

  // tds handler
  const tdsHandler = (t) => {
    setTDS(t.target.value);
  };

  // // ***deduction handler*****
  // const deductionHandler = (d) => {
  //   setDeduction(d.target.value);
  // };

  return (
    <>
      {/* Employee Details... */}
      <div className="employeeDetails">
        <p className="employeeName">{employeeDetails.name}</p>
        <p className="employeeID">{employeeDetails.id}</p>
        Account No: {employeeDetails.bank_details.acc_no}
      </div>

      {/* month details */}
      <div className="month_details">
        <h2>Month Details</h2>
        <br />
        <label className="month inputField">
          Month :
          <select onChange={monthHandler} name="month">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </label>
        <div className="inputField">
          Enter Total Work Days :
          <input type="text" name="total_days" onChange={totalDaysHandler} />
        </div>
        <div className="inputField">
          Enter Effective Work Days :
          <input type="text" name="eff_work_days" onChange={workDaysHandler} />
        </div>
      </div>
      {/* Earnings and deductions */}
      <div className="earnings_deductions">
        {/* Earnings */}

        <div className="earnings_input">
          <h2>Earnings</h2>
          <br />
          <div className="inputField">
            <span>Enter salary :</span>
            <input type="text" name="salary" onChange={salaryHandler} />
          </div>
          <div className="inputField">
            <span>Enter HRA :</span>
            <input type="text" name="hra" onChange={hraHandler} />
          </div>
          <div className="inputField">
            <span>Enter Special Allowance :</span>
            <input
              type="text"
              name="spe_allowance"
              onChange={specialAllowanceHandler}
            />
          </div>
          <div className="inputField">
            <span> Enter Conveyance :</span>
            <input type="text" name="conveyance" onChange={conveyanceHandler} />
          </div>

          <div className="inputField">
            <span> Enter Medial Allowance :</span>
            <input
              type="text"
              name="medical_allowance"
              onChange={medicalAllowanceHandler}
            />
          </div>
          <br />
        </div>

        {/* Deductions */}

        <div className="deductions_input">
          <h2>Deductions</h2>
          <br />
          <div className="inputField">
            Enter Professional Tax :
            <input
              type="text"
              name="professional_tax"
              onChange={professioalTaxHandler}
            />
          </div>
          <div className="inputField">
            Enter PF :
            <input type="text" name="pf" onChange={pfHandlder} />
          </div>
          <div className="inputField">
            Enter TDS withhold :
            <input type="text" name="tds" onChange={tdsHandler} />
          </div>
        </div>
      </div>
      <div className="submit">
        <Link state={data} to={`${employeeDetails.name} payslip`}>
          <button
            onClick={() => {
              console.log("salary:", salary);
              console.log("month:", month);
            }}
          >
            Submit
          </button>
        </Link>
      </div>
    </>
  );
}

export default Employee;
