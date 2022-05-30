import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css"
function ModalPics() {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ModalPics;
