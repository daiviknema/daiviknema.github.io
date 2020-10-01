import _ from "lodash";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import constants from "../constants/constants";

let theme = createMuiTheme({
  breakpoints: {
    keys: _.keys(constants.BREAKPOINTS),
    values: constants.BREAKPOINTS,
  },
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
  typography: {
    h1: {
      fontFamily: "Oswald",
      fontWeight: 300,
      letterSpacing: "-0.01562em",
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: 400,
      letterSpacing: "-0.05em",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
