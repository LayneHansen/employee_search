import React from "react";
import "./Table.css";
import * as ReactBootstrap from "react-bootstrap";
import $ from "jquery";

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
        "https://randomuser.me/?inc=id,first,last,email,phone,city,state"
      );
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
        </ReactBootstrap.Table>
            <tbody>
                { this.state.employees.map( (id) => (
                    <tr> </tr>

                )
                )
  }
            </tbody>
        </>
    )
}

// const employees = [
//     {id: "", first: "", last: "", email: "", phone: "", city: "", state: ""},
// ]

// const renderEmployee = (employee, id) => {
//     return(
//         <tr key={id}>
//             <td>{employee.first}</td>
//             <td>{employee.last}</td>
//             <td>{employee.email}</td>
//             <td>{employee.phone}</td>
//             <td>{employee.city}</td>
//             <td>{employee.state}</td>
//         </tr>
//     )
// }

// $.ajax({
//     url: 'https://randomuser.me/?inc=id,name,email,phone,city,state',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });

// return (
    // <>
    // <ReactBootstrap.Table striped bordered hover>
    //     <thead>
    //         <th>Emp #</th>
    //         <th>First Name</th>
    //         <th>Last Name</th>
    //         <th>Email</th>
    //         <th>Phone</th>
    //         <th>City</th>
    //         <th>State</th>
    //     </thead>
    // </ReactBootstrap.Table>
    //     <tbody>
    //         {employees.map(renderEmployee)}
    //     </tbody>
    // </>
}

export default Table;
