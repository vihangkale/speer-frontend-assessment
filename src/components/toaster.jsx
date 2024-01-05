import { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const alertStyle = { width: "100%" };
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Toaster = ({ open = false, message = "", severity = "success" }) => {
  <Snackbar open={open}>
    <Alert onClose={handleClose} severity={severity} sx={alertStyle}>
      {message}
    </Alert>
  </Snackbar>;
};
export default Toaster;
