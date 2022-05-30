import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CardContext } from "../Contexts/CardContext";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalPics() {
   const {show, setShow} = React.useContext(CardContext)
  return (
    <div>
      <Modal
        aria-labelledby="transition-pic-title"
        aria-describedby="transition-pic-description"
        open={show}
        onClose={() => setShow(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <Box sx={styles}>
            <Typography id="transition-pic-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-pic-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalPics;
