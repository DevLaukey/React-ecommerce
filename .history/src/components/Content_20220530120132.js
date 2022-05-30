import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TransitionsModal from "./Modal";
  
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};



function Content() {
  const [isEmpty, setIsEmpty] = React.useState(true);

  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const [picOpen, setPicOpen] = React.useState(false);

  const handleOpenPicModal = () => setPicOpen(true);
  const handleClosePicModal = () => setPicOpen(false);
  const handleMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  const handleClose = () => setOpen(false);
  const countClicks = () => {
    setOpen(true);
    setCount(count + 1);
    setIsEmpty(false);
  };
  return (
    <div class="content">
      <div class="images" onClick={handleOpenPicModal}>
        <div class="image">
          <img
            class="big-pic"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1.jpg"
            alt=""
          />
        </div>
        <div class="slider">
          <div class="arrow">
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
          <div class="arrow">
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
        {/* modal */}
        {/* <TransitionsModal /> */}
        <div>
          {/* cart */}
          <TransitionsModal />
        </div>
        {/* <div className="">
            <Modal
              aria-labelledby="transition-pictitle"
              aria-describedby="transition-picdescription"
              open={picOpen}
              onClose={handleClosePicModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={picOpen}>
                <Box sx={picStyle}>
                  <Typography
                    id="transition-pictitle"
                    variant="h5"
                    sx={{ mb: 2 }}
                    component="h1"
                  >
                    <Button
                      onClick={() => {
                        setPicOpen(false);
                      }}
                    >
                      <svg
                        width="14"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                          fill="#69707D"
                          fill-rule="evenodd"
                        />
                      </svg>{" "}
                    </Button>
                  </Typography>
                  <Box>
                    <div class="images">
                      <div class="bigimage">
                        <img
                          class="big-picModal"
                          src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="slider">
                        <div class="arrow">
                          <svg
                            width="12"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1 3 9l8 8"
                              stroke="#1D2026"
                              stroke-width="3"
                              fill="none"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div class="arrow">
                          <svg
                            width="12"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
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
                      <div class="modalthumbnail">
                        <img
                          class="modal-thumbnails"
                          src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1-thumbnail.jpg"
                          alt=""
                        />

                        <img
                          class="modal-thumbnails"
                          src="https://devlaukey.github.io/ecommerce-design/assets/image-product-2-thumbnail.jpg"
                          alt=""
                        />

                        <img
                          class="modal-thumbnails"
                          src="https://devlaukey.github.io/ecommerce-design/assets/image-product-3-thumbnail.jpg"
                          alt=""
                        />
                        <img
                          class="modal-thumbnails"
                          src="https://devlaukey.github.io/ecommerce-design/assets/image-product-4-thumbnail.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Box>
                </Box>
              </Fade>
            </Modal>
          </div> */}
        <div class="thumbnails">
          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1-thumbnail.jpg"
            alt=""
          />

          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-2-thumbnail.jpg"
            alt=""
          />

          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-3-thumbnail.jpg"
            alt=""
          />
          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-4-thumbnail.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="details">
        <p class="name">SNEAKER COMPANY</p>
        <h3 class="big-text">Fall Limited Edition Sneakers</h3>
        <p class="light-text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div class="mobile-price">
          <div class="price">
            <p class="money">$125.00</p>
            <p class="discount">50%</p>
          </div>
          <p class="strike">
            <s> $250.00</s>
          </p>
        </div>
        <div class="checkout">
          <div class="controls">
            <p class="control" onClick={handleMinus}>
              -
            </p>
            <p class="count">{count}</p>
            <p
              class="control"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </p>
          </div>
          <button class="btn" onClick={countClicks}>
            <div class="center">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fefefe"
                  fill-rule="nonzero"
                />
              </svg>
              <p class="white-text">Add to cart</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
