import React from "react";
import { Container } from "@material-ui/core";
import MainNav from "../components/main-nav/main-nav";
import MainFooter from "../components/main-footer/main-footer";
import styles from "./app-layout.module.css";

const AppLayout = ({ children }) => {
  return (
    <Container className={styles.appContainer}>
      <MainNav />
      {children}
      <MainFooter />
    </Container>
  );
};

export default AppLayout;
