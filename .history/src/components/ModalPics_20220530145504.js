import React, { useContext, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { CardContext } from "../Contexts/CardContext";
import "./Modal.css";

function MydModalWithGrid(props) {
  const { setShow } = useContext(CardContext);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title className="close" id="contained-modal-title-vcenter">
          <svg
            onClick={() => setShow(false)}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              className="fill"
              fill-rule="evenodd"
            />
          </svg>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <div className="container">
            <div class="image">
              <img
                class="big-picModal"
                src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
        <div class="modal_thumbnails">
          <img
            class="modal-thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1-thumbnail.jpg"
            alt=""
          />

          <img
            class="modal-thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-2-thumbnail.jpg"
            alt=""
          />

          <img
            class="modal-thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-3-thumbnail.jpg"
            alt=""
          />
          <img
            class="modal-thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-4-thumbnail.jpg"
            alt=""
          />
        </div>
            </Modal.Body>

    </Modal>
  );
}
function ModalPics() {
    const { show, setShow } = useContext(CardContext);

    return (
      
        <>
      <MydModalWithGrid show={show}  onHide={() => setShow(false)} />
    </>
  );
}

export default ModalPics;
