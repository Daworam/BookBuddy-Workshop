import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

const Books = ({API_URL_BASE}) => {

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
console.log(allBooks)
  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <>
    <section className='nlRegister'>
      <Button variant='info' onClick={()=>{navigate('/register')}}>Sign Up!</Button>
    </section>
    
    <section className='booksSection'>
      {allBooks.map((book) => {
        return (
          <div key={book.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`${book.coverimage}`} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <Button variant="primary" onClick={()=>{navigate(`/${book.id}`)}}>Details</Button>
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
