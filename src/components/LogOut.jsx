import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const LogOut = () => {
  const clickHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <Button
        variant="info"
        onClick={() => {
          clickHandler();
        }}
      >
        Log Out
      </Button>
    </>
  );
};

export default LogOut;
