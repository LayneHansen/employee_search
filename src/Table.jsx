import React from "react";
import "./Table.css";
import * as ReactBootstrap from "react-bootstrap";
// import $ from "jquery";

class Table extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/?inc=value,first,last,email,phone,city,state");
      const data = await response.json();
      this.setState({ employees: data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
        <>
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>Emp #</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                { this.state.employees.map((employee, id) => {

                    return (
                    <tr key={employee.id.value}> 
                        <td>{employee.id.value}</td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.location.city}</td>
                        <td>{employee.location.state}</td>
                    </tr>
                    )
                }

                )
                
  }
            </tbody>
        </ReactBootstrap.Table>
        </>
    )
}

}

export default Table;
