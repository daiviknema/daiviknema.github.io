import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: blueGrey[100],
      main: blueGrey[500],
      dark: blueGrey[900],
    },
    text: {
      primary: blueGrey[50],
    },
  },
  //   typography: {
  //     fontFamily: ["Raleway", "sans-serif"].join(","),
  //   },
  typography: {
    h1: {
      fontFamily: "Oswald",
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "-0.05em",
    },
  },
});

export default theme;
