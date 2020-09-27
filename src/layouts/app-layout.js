import React from "react";
import { Container } from "@material-ui/core";
import MainNav from "../components/main-nav/main-nav";
import styles from './app-layout.module.css';

const AppLayout = ({ children }) => {
  return (
    <Container className={styles.container}>
      <MainNav />
      {children}
    </Container>
  );
};

export default AppLayout;
