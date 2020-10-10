import React from "react";
import MainNav from "../../components/main-nav/main-nav";
import MainFooter from "../../components/main-footer/main-footer";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
`;

const AppLayout = ({ location, children }) => {
  return (
    <AppContainer>
      <MainNav location={location} />
      {children}
      <MainFooter />
    </AppContainer>
  );
};

export default AppLayout;
