// import React from 'react';

// class Employee extends React.Component {
//   state = {
//     employees: []
//   };

//   componentDidMount() {
//     this.fetchUsers();
//   }

//   fetchUsers = async () => {
//     try {
//       const response = await fetch('https://randomuser.me/');
//       const data = await response.json();
//       this.setState({ users: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <>
//         <h1>ABOUT</h1>

//         <ul>
//           {this.state.users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// };

// export default Employee;