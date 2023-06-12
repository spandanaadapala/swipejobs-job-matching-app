import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import JobMatchingApp from "./components/JobMatchingApp";

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <JobMatchingApp />
    </ThemeProvider>
  );
};

export default App;
