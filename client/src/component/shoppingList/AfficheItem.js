import React from 'react'
import { deleteItem} from "../../js/action/itemAction"
import { useDispatch, useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2"
import { Container, ListGroup, ListGroupItem, Button  } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function AfficheItem({item}) {
    
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer);
    const deleteItems=()=>{
      if (  user.banned==false) {
        dispatch(deleteItem(item._id))
      } 
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'you are not authorise to delete item',
        })
      }
    }
    return (
        <Container>
       
       
        <ListGroup>
          <TransitionGroup className="shopping-list">
            
              <CSSTransition  classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    style={{
                      margin: "0 1rem 0",
                      fontSize: "1.5rem",
                      padding: "0 0.5rem",
                      textAlign: "center"
                    }}
                    onClick={ deleteItems}
                  >
                    &times;
                  </Button>
                  {item.name}
                </ListGroupItem>
              </CSSTransition>
           
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }


      
      



export default AfficheItem

