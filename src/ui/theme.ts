import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeBackground {
    transparent: string;
  }
  interface TypeAction {
    dormant: string;
  }
}

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
      transparent: "#FFFFFF4D",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#282828",
    },
    action: {
      dormant: "#FFFFFF1A",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 500,
    },
    button: {
      fontSize: "0.75rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
});
