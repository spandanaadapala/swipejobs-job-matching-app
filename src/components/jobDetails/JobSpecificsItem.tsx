import { Grid, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";

const getStyles = () => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    margin: "1em 0",
  },
});

interface JobSpecificsItemProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  title: string;
  children: ReactNode | string;
}

const JobSpecificsItem = (props: JobSpecificsItemProps) => {
  const { icon: Icon, title, children } = props;
  const styles = getStyles();
  return (
    <Grid container spacing={2} sx={styles.root}>
      <Grid item xs={1}>
        <Icon />
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">
          {children !== undefined ? children : "No Data"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default JobSpecificsItem;
