import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import ThemeContext from "../Contexts/Themecontext";

export default function ErrorModal({ message, type, setFileError }) {
  const [open, setOpen] = React.useState(true);
  const { theme } = useContext(ThemeContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: `${theme === "Dark" ? "white" : "background.paper"}`,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  // const style2 = {
  //   bgcolor: `${theme === "Dark"} ? "background.paper" : undefined}`,
  // };

  const handleClose = () => {
    setOpen(false);
    setFileError(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {type}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
