import { createTheme } from "@mui/material/styles";

//create theme to cover the whole of the website.

export const sapphireTheme = createTheme({
  palette: {
    primary: { main: "#0A1828", contrastText: "#178582" },
    secondary: { main: "#0A1828", contrastText: "#BFA181" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color:rgb(54, 59, 104); }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
