import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Register = ({API_URL_BASE}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("This works")
    try {
      const response = await fetch(`${API_URL_BASE}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: `${firstName}`,
          lastname: `${lastName}`,
          email: `${emailAddress}`,
          password: `${password}`
        }),
      }); 
      const result = await response.json();
      console.log(result)
    } catch (error) {
      alert(error);
    }
  };
  
  return (
    <>
      <h1>Sign up for the Library App</h1>
      <Form onSubmit={(e) => {
            submitHandler(e);
          }}>
      <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="firstName"
            placeholder="Enter firstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="Enter lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter Email Address"
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
