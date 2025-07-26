import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#7c4dff" }, // purple highlight per screenshot
    background: { default: "#121212", paper: "#1E1E2F" },
    text: { primary: "#EEE", secondary: "#AAA" },
  },
  typography: {
    fontFamily: "'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
