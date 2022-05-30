import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";
import "./App.css";
import TransitionsModal from "./components/Modal";

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

function App() {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0)
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const countClicks = () => {
    setOpen(true);
    setCount(count+1) ;
    setIsEmpty(false)
  }
  const openNav = () => {
      document.getElementById("mySidepanel").style.width = "250px";

  }
  const closeNav = () => {
      document.getElementById("mySidepanel").style.width = "0";

  }

  return (
    <div className="landing">
      <div class="nav">
        <div class="logo">
          <svg
            onClick={openNav}
            class="mobile"
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
          <svg
            id="class-logo"
            width="138"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
              fill="#1D2026"
              fill-rule="nonzero"
            />
          </svg>
        </div>

        <div id="mySidepanel" class="sidepanel">
          <svg
            onClick={closeNav}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
          <p class="options">Collections</p>
          <p class="options">Men</p>
          <p class="options">Women</p>
          <p class="options">About</p>
          <p class="options">Contact</p>
        </div>
        <nav>
          <div class="nav-menu">
            <p class="options">Collections</p>
            <p class="options">Men</p>
            <p class="options">Women</p>
            <p class="options">About</p>
            <p class="options">Contact</p>
          </div>
          <div class="nav-icons" onClick={handleOpen}>
            <div class="icon">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
            {!isEmpty && <div className="counter">{count}</div>}

            <div class="avatar">
              <img
                height="50px"
                src="https://devlaukey.github.io/ecommerce-design/assets/image-avatar.png"
                alt=""
              />
            </div>
          </div>
        </nav>
      </div>
      <hr class="line" />
      <div class="content">
        <div class="images">
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
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              // sx={{}}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h5"
                    sx={{ mb: 2 }}
                    component="h1"
                  >
                    <h4>Cart</h4>
                  </Typography>
                  <hr />
                    {isEmpty ? (
                      <div className="empty"> Your Cart is Empty</div>
                    ) : (
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 1 }}
                        fullwidth
                      >
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          color: "gray",
                        }}
                      >
                        <Typography
                          id="transition-modal-title"
                          variant="h5"
                          sx={{ mb: 2 }}
                          component="h1"
                        >
                          <img
                            height="50px"
                            src="https://raw.githubusercontent.com/DevLaukey/ecommerce-design/main/assets/image-product-1-thumbnail.jpg"
                            alt=""
                          />
                        </Typography>
                        <Typography
                          id="transition-modal-title"
                          variant="h5"
                          sx={{ mb: 2 }}
                          component="h1"
                        >
                      
                          <div>
                          
                            <p> Autumn Limited Edition..</p>
                            <p>
                              $125.00 x 3{" "}
                              <strong className="black">$375.00</strong>{" "}
                            </p>
                          </div>
                      
                        </Typography>
                        <Typography
                          id="transition-modal-title"
                          variant="h5"
                          sx={{ mb: 2, ml: 1 }}
                          component="h1"
                        >
                          <img
                            height="20px"
                            src="https://raw.githubusercontent.com/DevLaukey/ecommerce-design/9fbc36dfda295faf2e77c7b87c804f2fe2e3d12f/assets/icon-delete.svg"
                            alt=""
                          />
                        </Typography>
                      </Box>
                        
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        width: "100%",
                        color: "gray",
                      }}
                    >
                      <Button
                        onClick={handleClose}
                        fullWidth
                        variant="contained"
                        style={{
                          borderRadius: 15,
                          backgroundColor: "hsl(26, 100%, 55%)",
                          padding: "10px 3em",
                          fontSize: "18px",
                        }}
                      >
                        Checkout
                      </Button>
                    </Box>
                  </Typography>
                      )}
                </Box>
              </Fade>
            </Modal>
          </div>
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
              <p class="control">-</p>
              <p class="count">0</p>
              <p class="control">+</p>
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
    </div>
  );
}

export default App;
