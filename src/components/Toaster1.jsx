import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Toaster({ open, handleClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Payment successfully completed!
      </Alert>
    </Snackbar>
  );
}