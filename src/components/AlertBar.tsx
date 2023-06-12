import { Alert, Snackbar } from "@mui/material";
import { AlertDataType } from "../types/AlertDataType";

interface AlertBarProps {
  alertData: AlertDataType;
  handleAlertClose: () => void;
}

const AlertBar = (props: AlertBarProps) => {
  const { alertData, handleAlertClose } = props;
  const { vertical, horizontal, open, severity, message } = alertData;
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={6000}
      open={open}
      onClose={handleAlertClose}
      key={vertical + horizontal}
    >
      <Alert onClose={handleAlertClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBar;
