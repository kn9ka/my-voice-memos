import React from "react";
import ReactDOM from "react-dom/client";
import App from "@app/App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { mainTheme } from "@config/theme";

export const theme = createTheme(mainTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
