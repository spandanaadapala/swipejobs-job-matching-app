import { AppBar, Toolbar, Typography, useTheme, Box } from "@mui/material";

interface HeaderProps {
  workerName: string;
}

const Header = (props: HeaderProps) => {
  const { workerName } = props;
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      color="primary"
      enableColorOnDark
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Toolbar>
        <Box sx={{ flex: 1 }}>
          <img
            src={process.env.PUBLIC_URL + "/sj-logo-sj.svg"}
            alt="Swipejobs"
            height="50"
          />
        </Box>
        <Typography variant="h5">{workerName}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
