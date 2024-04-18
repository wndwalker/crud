// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      100: "#d3d4de",
      200: "#a6a9be",
      300: "#7a7f9d",
      400: "#4d547d",
      500: "#21295c",
    },
    secondary: {
      main: "#ff0000", 
      100: "#ff8a80",
      200: "#ff5252",
      300: "#ff1744",
      400: "#d50000", 
    },
    grey: {
      0: "#ffffff",
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#333333",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
