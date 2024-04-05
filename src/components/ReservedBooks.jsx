import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const ReservedBooks = ({ API_URL_BASE, token }) => {
  const [myBooks, setMyBooks] = useState([]);

  const getReservedBooks = async () => {
    try{
      const response = await fetch(`${API_URL_BASE}/reservations`, {
        headers:{
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      })
      const result = await response.json()
      console.log(result);
      setMyBooks(result.reservation)
    }catch(error){
      alert(error);
    }
  };

  useEffect(() => {
    getReservedBooks();
  }, []);

  return (
    <>
      <section className="booksSection">
        {myBooks.map((book) => {
          return (
            <div key={book.id} className="bookCard">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`${book.coverimage}`} />
                <Card.Body>
                  <Card.Title className="bookTitle">{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ReservedBooks;
