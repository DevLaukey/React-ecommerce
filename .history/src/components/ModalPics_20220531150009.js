import React, { useContext, useState } from "react";
import { Modal} from "react-bootstrap";
import { CardContext } from "../Contexts/CardContext";
import "./css/Modal.css";


function ModalPics() {
  const { show, setShow } = useContext(CardContext);

  const [url, setUrl] = useState(
    "https://raw.githubusercontent.com/DevLaukey/ecommerce-design/main/assets/image-product-1.jpg"
  );
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
    >
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
        <div class="images">
          <img class="big-picModal" src={url} alt="" />
        </div>
        <div class="slider">
          <div class="modal-arrow">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div class="modal-arrow">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer centered>
        <div class="modal_thumbnails">
          <img
            onClick={() =>
              setUrl(
                "https://raw.githubusercontent.com/DevLaukey/ecommerce-design/main/assets/image-product-1.jpg"
              )
            }
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1-thumbnail.jpg"
            alt=""
          />

          <img
            onClick={() =>
              setUrl(
                "https://raw.githubusercontent.com/DevLaukey/ecommerce-design/main/assets/image-product-2.jpg"
              )
            }
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-2-thumbnail.jpg"
            alt=""
          />

          <img
            onClick={() =>
              setUrl(
                "https://raw.githubusercontent.com/DevLaukey/ecommerce-design/main/assets/image-product-3.jpg"
              )
            }
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-3-thumbnail.jpg"
            alt=""
          />
          <img
            onClick={() =>
              setUrl(
                "https://raw.githubusercontent.com/DevLaukey/ecommerce-design/main/assets/image-product-4.jpg"
              )
            }
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-4-thumbnail.jpg"
            alt=""
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPics;
