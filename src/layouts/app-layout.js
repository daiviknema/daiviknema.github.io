import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../gatsby-theme-material-ui-top-layout/theme";
import { Container } from "@material-ui/core";
import MainNav from "../components/main-nav";

const AppLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainNav />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default AppLayout;
