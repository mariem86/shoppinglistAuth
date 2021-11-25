import React, { useState,useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";



const AddItem = ({name,setName,addItems}) => {
    const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        ADD
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ADDItem</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
               type="text" class="form-control" id="fname" placeholder="Enter  Name" name="fname"
               value={name} onChange={(e)=>setName(e.target.value)}
              />
            </FormGroup>
            
          </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={addItems}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddItem;
