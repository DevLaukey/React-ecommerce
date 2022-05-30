import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css"
function ModalPics() {
  const [show, setShow] = useState(false);


  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch demo modal
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPics;
