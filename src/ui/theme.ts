import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#BE3455",
      dark: "#721F33",
    },
    secondary: {
      main: "#3454BE",
      dark: "#15224C",
      light: "#AEBBE5",
    },
    error: {
      main: "#FF3636",
    },
    warning: {
      main: "#FFD536",
    },
    background: {
      default: "#F4F4F4",
      paper: "#D9D9D9",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#282828",
    },
  },
});
