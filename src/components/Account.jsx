import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ReservedBooks from "./ReservedBooks";

const Account = ({ API_URL_BASE, token }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const fetchMyData = async () => {
    try {
      const response = await fetch(`${API_URL_BASE}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setUserFirstName(result.firstname);
      setUserLastName(result.lastname);
      setUserEmail(result.email);
      setUserId(result.id);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchMyData();
  });

  return (
    <>
      <Button
        variant="dark"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Books
      </Button>
      <h1>My Account</h1>
      <section>
        <h2>Name:</h2>
        <p>{userFirstName + " " + userLastName}</p>
        <h2>Email:</h2>
        <p>{userEmail}</p>
        <h2>User Id:</h2>
        <p>{userId}</p>
      </section>
      <h1>My Library:</h1>
      <ReservedBooks API_URL_BASE={API_URL_BASE} token={token} />
    </>
  );
};

export default Account;
//Needs to be able to see acount details(email, name)
//Need to be able to see 'my books'
