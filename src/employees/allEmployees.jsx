import React, { Component } from "react";
import Employee from "./employee";
import getEmployees from "./employeesData";
import { Link } from "react-router-dom";
import NavBar from "../navigation bar/navBar";
import "../App.css";
class AllEmployees extends Component {
  state = {
    employees: getEmployees(),
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="allEmployees">
          {this.state.employees.map((employee) => (
            <Link to={`/${employee.id}`} key={employee.id}>
              <div className="eachEmployee">
                <p className="employee_name">{employee.name}</p>
                <p>{employee.id}</p>

                <p>DOJ: {employee.e_details.doj}</p>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default AllEmployees;
