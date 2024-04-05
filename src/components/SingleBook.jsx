import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
import CheckOut from "./CheckOut";

const SingleBook = ({API_URL_BASE, token}) => {
  const {id} = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const navigate = useNavigate();

  const fetchBookDetails = async () =>{
    try{
      const response = await fetch(`${API_URL_BASE}/books/${id}`);
      const result = await response.json();
      setBookDetails(result.book);
    }catch(error){
      alert(error);
    }
  }
  useEffect(()=>{
    fetchBookDetails();
  },[])

  return(
    <>
      <h1>{bookDetails.title}</h1>
      <img src={bookDetails.coverimage} className="singleBookImg"/>
      <h2>Author: {bookDetails.author}</h2>
      <h4>Description:</h4>
      <p>{bookDetails.description}</p>
      {token ? <CheckOut API_URL_BASE={API_URL_BASE} id={id}/>: null}
      <Button variant="primary" onClick={()=> {navigate('/')}}>Back to All Books</Button>
    </>
  )
}

export default SingleBook