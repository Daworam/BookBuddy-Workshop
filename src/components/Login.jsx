import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({API_URL_BASE}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${API_URL_BASE}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `${email}`,
          password: `${password}`
        })
      }); const result = await response.json()
      console.log(result)
      if(result.message !== 'Login successful!'){
        alert('Incorrect Login information, please try again!')    
      }else{
        localStorage.setItem("token", result.token)
        navigate('/')
      }  
    }catch(error){
      alert(error);
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <Form onSubmit={(e)=>{submitHandler(e)}}>
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
        <Button variant="dark" type="submit">
          Log In
        </Button>
      </Form>
    </>
  );
};

export default Login;
