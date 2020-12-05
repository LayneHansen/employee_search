import React from "react";
import "./Table.css";
import * as ReactBootstrap from "react-bootstrap";

class Table extends React.Component {
  state = {
    employees: [],
    search: "",
    sortOrder: 'descending'
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=50&inc=id,name,email,phone,location"
      );
      const data = await response.json();
      this.setState({ employees: data.results });
    } catch (error) {
      console.log(error);
    }
  };

//   filterResults = (results) => {
//       const value = this.state.search
//       const filterResult = results.filter((employee) => {
//           const firstName = employee.firstName.toLowerCase();
//           const lastName = employee.lastName.toLowerCase();
//           const fullName = firstName + "" + lastName;
          
//           return fullName.includes(query);
//       });
//   };

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
            {this.state.employees.map(employee => {
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
              );
            })}
          </tbody>
        </ReactBootstrap.Table>
      </>
    );
  }
}

export default Table;
