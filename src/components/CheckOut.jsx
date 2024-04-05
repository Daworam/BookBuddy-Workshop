import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const CheckOut = ({ API_URL_BASE, id, token }) => {
  const [isAvailable, setIsAvailable] = useState(null);

  const checkOutBook = async () => {
    try {
      const response = await fetch(`${API_URL_BASE}/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          available: false,
        }),
      });
      const result = await response.json();
      setIsAvailable(result.available);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {isAvailable ? (
        <Button
          variant="primary"
          onClick={() => {
            checkOutBook();
          }}
        >
          Check Out Book
        </Button>
      ) : (
        <Button variant="primary" className="notAvailable">
          Book is Not Available
        </Button>
      )}
    </>
  );
};

export default CheckOut;
