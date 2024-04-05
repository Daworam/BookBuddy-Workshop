import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckOut = ({API_URL_BASE, id}) => {

const checkOutBook = async () => {
  try{
    const response = await fetch(`${API_URL_BASE}/books/${id}`)
  }catch(error){
    alert(error);
  }
}


 return(
  <>
    <Button variant="primary">Check Out Book</Button>
  </>
 )
};

export default CheckOut;
