import { Typography, useTheme, Grid, Theme } from "@mui/material";
import currencyFormat from "../../utils/currancyFormat";

const getStyles = (theme: Theme) => ({
  root: {
    backgroundColor: "#20B2AA",
    marginLeft: ".2px",
    width: "100%",
    padding: "0px 15px",
  },
  text: {
    color: theme.palette.primary.contrastText,
  },
  textFlexEnd: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
  },
});

interface JobPayProps {
  jobDistance?: number;
  jobPay?: number;
}

const JobPay = (props: JobPayProps) => {
  const { jobDistance, jobPay } = props;
  const theme = useTheme();
  const styles = getStyles(theme);

  const jobDistanceString =
    jobDistance !== undefined ? `${jobDistance} miles` : "No Data";
  const jobPayString =
    jobPay !== undefined ? currencyFormat(jobPay) : "No Data";

  return (
    <Grid container spacing={1} sx={styles.root}>
      <Grid item xs={6}>
        <Typography variant="h6">Distance</Typography>
        <Typography variant="h4" sx={styles.text} data-testid="jobDistance">
          {jobDistanceString}
        </Typography>
      </Grid>
      <Grid item xs={6} container sx={styles.textFlexEnd}>
        <Typography variant="h6">Hourly Rate</Typography>
        <Typography variant="h4" sx={styles.text} data-testid="jobPay">
          {jobPayString}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default JobPay;
