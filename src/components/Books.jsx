import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import Navigations from "./Navigations";

const Books = ({API_URL_BASE, token}) => {

  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const response = await fetch(`${API_URL_BASE}/books`);
      const result = await response.json();
      setAllBooks(result.books);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <>
    <Navigations token ={token}/>

    <section className='booksSection'>
    {allBooks.map((book) => {
      return (
        <div key={book.id} className="bookCard">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${book.coverimage}`} />
            <Card.Body>
              <Card.Title className="bookTitle">{book.title}</Card.Title>
              <div className="buttonDiv">
              <Button variant="primary" onClick={()=>{navigate(`/${book.id}`)}}>Details</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    })}
    </section>
    </>
  );
};

export default Books;

//need to add functionality to view checked out books
//need to add functionality to see 'my books'?