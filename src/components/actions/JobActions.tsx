import { Button, Grid, Theme, useTheme } from "@mui/material";

const getStyles = (theme: Theme) => ({
  root: {
    padding: "10px",
  },
  acceptButton: {
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  rejectButton: {
    color: theme.palette.background.default,
    borderColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  },
});

export interface JobActionsProps {
  handleReject: (currentJobId: string) => void;
  handleAccept: (currentJobId: string) => void;
  currentJobId: string;
}
const JobActions = (props: JobActionsProps) => {
  const { handleReject, handleAccept, currentJobId } = props;
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Grid container spacing={2} sx={styles.root}>
      <Grid item xs={6}>
        <Button
          size="large"
          variant="outlined"
          onClick={() => handleReject(currentJobId)}
          fullWidth
          sx={styles.rejectButton}
          data-testid="rejectButton"
        >
          No Thanks
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          size="large"
          variant="contained"
          onClick={() => handleAccept(currentJobId)}
          fullWidth
          sx={styles.acceptButton}
          data-testid="acceptButton"
        >
          I'll Take it
        </Button>
      </Grid>
    </Grid>
  );
};

export default JobActions;
