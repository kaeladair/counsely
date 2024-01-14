"use client";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#b39ddb",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
      form: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#AA43F9",
    },
  },
});

export default function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
