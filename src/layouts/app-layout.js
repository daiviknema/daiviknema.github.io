import React from "react";
import { Container } from "@material-ui/core";
import MainNav from "../components/main-nav/main-nav";

const AppLayout = ({ children }) => {
  return (
    <Container>
      <MainNav />
      {children}
    </Container>
  );
};

export default AppLayout;
