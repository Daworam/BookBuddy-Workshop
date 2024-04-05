import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({API_URL_BASE, token, setToken, email, setEmail, password, setPassword}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL_BASE}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: `${firstName}`,
          lastname: `${lastName}`,
          email: `${email}`,
          password: `${password}`
        }),
      }); 
      const result = await response.json();
      localStorage.setItem("token", result.token);
      setToken(result.token);

      if(result.name){
        alert("User already exists, please try another Email Address!")
      }
      navigate('/')
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
              setEmail(e.target.value);
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
