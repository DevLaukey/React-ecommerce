import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Image } from "react-bootstrap";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function TransitionsModal() {
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
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  sx={{ mb: 2 }}
                  component="h1"
                >
                  <Image src="https://github.com/DevLaukey/ecommerce-design/blob/main/assets/image-product-1-thumbnail.jpg" />
                </Typography>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  sx={{ mb: 2 }}
                  component="h1"
                >
                  scs{" "}
                </Typography>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  sx={{ mb: 2 }}
                  component="h1"
                >
                  cs{" "}
                </Typography>
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
