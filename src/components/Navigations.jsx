import LogOut from "./LogOut";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Navigations = ({ token }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="nlButton">
        {token ? (
          <>
            <Button
              variant="info"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              variant="info"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up!
            </Button>
            <Button
              variant="info"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </Button>
            <Button
              variant="info"
              onClick={() => {
                navigate("/account");
              }}
            >
              My Account
            </Button>
            <LogOut />
          </>
        ) : (
          <>
            <Button
              variant="info"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              variant="info"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up!
            </Button>
            <Button
              variant="info"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </Button>
          </>
        )}
      </section>
    </>
  );
};

export default Navigations;
