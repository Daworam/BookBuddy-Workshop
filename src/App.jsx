import { useState, useEffect } from "react";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

const API_URL_BASE = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <>
      <h1 className="headline">
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <Routes>
        <Route
          path="/register"
          element={
            <Register
              API_URL_BASE={API_URL_BASE}
              token={token}
              setToken={setToken}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        >
          Register
        </Route>
        <Route
          path="/"
          element={<Books API_URL_BASE={API_URL_BASE} token={token} />}
        >
          All Books
        </Route>
        <Route
          path="/:id"
          element={<SingleBook API_URL_BASE={API_URL_BASE} token={token} />}
        ></Route>
        <Route
          path="login"
          element={
            <Login
              API_URL_BASE={API_URL_BASE}
              token={token}
              setToken={setToken}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        ></Route>
        <Route
          path="/account"
          element={<Account API_URL_BASE={API_URL_BASE} token={token} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* Complete the React components needed to allow users to browse a 
library catalog, check out books, review their account, and return books 
that they've finished reading. You may need to use the `token` in this 
top-level component in other components that need to know if a user has 
logged in or not. Don't forget to set up React Router to navigate 
between the different views of your single page application! */
}
