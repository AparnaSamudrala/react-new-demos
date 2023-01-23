import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalExample({EmpArr}) {
  /* const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */
  const [show, setShow] = useState(false);
  const [data,setData] = useState({});

  return (
    <>
    <h3>Displaying Employee Details in Modal</h3>
    <hr/>
  {
      
      EmpArr.map((i) => (
        
      
        <Button key={i.id} className="me-3" variant="primary" onClick={() => {setShow(true);setData(i);}}>
        {i.name}
        </Button>
        
        
      ))
  }
      {console.log(data)}
      <Modal show={show}   onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Info about:  {data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul>
              <li> Employee ID : {data.id}</li>
              <li> Employee Name: {data.name}</li>
              <li>Employee Address: {data.address}</li>
              <li>Email :{data.email}</li>
              <li>Phone: {data.phone}</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
      

    </>
  )
}
export default ModalExample;