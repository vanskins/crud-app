import React from "react";
import { Table, Container, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
const App = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { dispatch } = props;
    const payload = {
      id: uuidv4(),
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
    };
    dispatch({
      type: "user/ADD_USER",
      payload,
    });
  };
  const onDelete = (id) => {
    console.log(id)
    const { dispatch } = props;
    dispatch({
      type: "user/DELETE_USER",
      payload: id,
    });
  };
  return (
    <div className="App">
      <Container>
        <div style={{ margin: "10px" }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                ref={register({ required: true })}
                type="text"
                placeholder="Enter first name"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                ref={register({ required: true })}
                type="text"
                placeholder="Enter last name"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                ref={register({ required: true })}
                type="text"
                placeholder="Enter last name"
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Create new user
            </Button>
          </Form>
        </div>
        <h3>User table</h3>
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
            {props.users.users.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                  <a href="#">@{item.username}</a>
                </td>
                <td>
                  <Button variant="primary">
                    View
                  </Button>{" "}
                  <Button variant="warning">Update</Button>{" "}
                  <Button onClick={() => onDelete(item.id)} variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default connect(({ users }) => ({ users }))(App);
