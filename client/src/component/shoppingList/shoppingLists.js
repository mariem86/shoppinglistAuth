import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getItems ,addItem} from "../../js/action/itemAction"
import AddItem from "./AddItem";
import AfficheItems from "./AfficheItem";
import Swal from "sweetalert2"
import {Spinner} from "react-bootstrap"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Container, ListGroup, ListGroupItem, Button  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
function ShoppingLists() {
  const [name, setName] = useState("");
  

  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemReducer.items);
 const { isLoading } = useSelector((state) => state.itemReducer.isLoading);
  const { user } = useSelector((state) => state.authReducer);
  //get item
  useEffect(() => {
    dispatch(getItems());
  }, []);
//add todo
  const addItems = () => {
    if(  user.banned==false ){
    dispatch(addItem({ name }));
  
    setName('');
    
    Swal.fire('Good job!',"todo added with success","success")
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you are not authorise to add item',
      })
    }
        
  };
 
   //spinner
  if ( isLoading) {
    return <div><Spinner animation="grow" /></div>
    }
   
    return (
        <Container>
       
       
        <ListGroup>
          <TransitionGroup className="shopping-list">
              <div>
< AddItem name={name}  
  setName={setName} 
   

  addItems ={addItems  }
  />
</div>  

          
  < div >
{ items.map((item,i)=>
    <AfficheItems key ={i} item={item}   />
)}
    </div>
    
    </TransitionGroup>
        </ListGroup>
      </Container>
    )
}
export default ShoppingLists



