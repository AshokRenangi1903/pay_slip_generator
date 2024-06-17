import "./App.css";

import React, { Component } from "react";
import NavBar from "./navigation bar/navBar";
import AllEmployees from "./employees/allEmployees";
import { Route, Routes } from "react-router-dom";
import Employee from "./employees/employee";
import Test from "./employees/test";
import PaySlip from "./components/paySlip";

class App extends Component {
  render() {
    return (
      <>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<AllEmployees />} />
          <Route path="/:id" element={<Employee />} />
          <Route path="/:id/:payslip" element={<PaySlip />} />
        </Routes>
      </>
    );
  }
}

export default App;
