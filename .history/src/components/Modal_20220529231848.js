import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";


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
  const btnColor = deepOrange;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <Typography
              id="transition-modal-description"
              sx={{ mt: 1 }}
              fullwidth
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "",
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
                  <p> Autumn Limited Edition..</p>
                  <p>
                    $125.00 x 3 <span>$375.00</span>{" "}
                  </p>
                </Typography>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  sx={{ mb: 2 }}
                  component="h1"
                >
                  <img
                    src="https://github.com/DevLaukey/React-ecommerce/blob/d83986492619391ee99cec3640d992b15e11b8fc/src/assets/icon-delete.svg"
                    alt=""
                  />
                </Typography>
              </Box>
              <Box fullWidth>
                <Button
                  variant="contained"
                  style={{
                    borderRadius: 15,
                    width: 100,
                    backgroundColor: "hsl(26, 100%, 55%)",
                    padding: "10px 3em",
                    fontSize: "18px",
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
