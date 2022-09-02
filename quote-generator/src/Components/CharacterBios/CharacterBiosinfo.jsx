import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import './CharacterBios.css';


const CharacterBiosinfo = ({name, bio, bioPicture}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button className="modal-button" onClick={handleShow}>
          {name}
        </button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
        <img src={bioPicture}
                alt="about_image"/>
          <Modal.Body>{bio} </Modal.Body>
          <Modal.Footer>
            <button className="mybutton" onClick={handleClose}>
              Close
            </button>

          </Modal.Footer>
        </Modal>
      </>
    )
}

export default CharacterBiosinfo
