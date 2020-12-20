import React from "react";
import MainNav from "../../components/main-nav/main-nav";
import MainFooter from "../../components/main-footer/main-footer";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const AppLayout = ({ location, children }) => {
  return (
    <div>
        <AppContainer>
          <MainNav location={location} />
          {children}
          <MainFooter />
        </AppContainer>
    </div>
  );
};

export default AppLayout;
