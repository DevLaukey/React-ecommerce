import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css"
import { CardContext } from "../Contexts/CardContext";


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

export default function TransitionsModal() {
  
  const { count, open, setCount ,setOpen, isEmpty } = React.useContext(CardContext)
  const handleDelete () => {
    setCount(0)
    isEmpty(true)
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-title"
        aria-describedby="transition-description"
        open={open}
        onClose={()=> setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-title"
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
              <Typography id="transition-description" sx={{ mt: 1 }} fullwidth>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    color: "gray",
                  }}
                >
                  <Typography
                    id="transition-title"
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
                    id="transition-title"
                    variant="h5"
                    sx={{ mb: 2 }}
                    component="h1"
                  >
                    <div>
                      <p> Autumn Limited Edition..</p>
                      <p>
                        $125.00 x {count} <strong className="black">${125*count}</strong>{" "}
                      </p>
                    </div>
                  </Typography>
                  <Typography
                    id="transition-title"
                    variant="h5"
                    sx={{ mb: 2, ml: 1 }}
                      component="h1"
                      onClick={handleDelete}
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
                    onClick={()=> setOpen(false)}
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
  );
}
