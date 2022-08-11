import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import './CharacterBios.css';


const CharacterBiosinfo = ({name, bio, bioPicture}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          {name}
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
        <img src={bioPicture}
                alt="about_image"/>
          <Modal.Body>{bio} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    )
}

export default CharacterBiosinfo