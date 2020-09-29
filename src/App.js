import React, { useState } from "react";
import { Table, Container, Button } from "react-bootstrap";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "Van",
      lastName: "Alfred",
      username: "vanskins",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      username: "jdoe",
    },
    {
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      username: "jsmith21",
    },
    {
      id: 4,
      firstName: "Juan",
      lastName: "Dela cruz",
      username: "jcruzin",
    },
    {
      id: 5,
      firstName: "Pedro",
      lastName: "Penduko",
      username: "peds32",
    },
  ]);
  return (
    <div className="App">
      <Container>
        <div style={{ margin: "10px" }}>
          <h1>User table</h1>
          <div>
            <Button variant="success">Create new user</Button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                  <a href="#">@{item.username}</a>
                </td>
                <td>
                  <Button variant="primary">View</Button>{" "}
                  <Button variant="warning">Update</Button>{" "}
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
