import React, { useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  if (!isLoaded) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "25%",
          marginBottom: "25%",
        }}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
          style={{ margin: "auto" }}
        >
          <g
            fill="none"
            fill-rule="evenodd"
            transform="translate(1 1)"
            stroke-width="2"
          >
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
              <animate
                attributeName="r"
                begin="1.5s"
                dur="3s"
                values="6;22"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="1.5s"
                dur="3s"
                values="1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                begin="1.5s"
                dur="3s"
                values="2;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="6" stroke-opacity="0">
              <animate
                attributeName="r"
                begin="3s"
                dur="3s"
                values="6;22"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="3s"
                dur="3s"
                values="1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                begin="3s"
                dur="3s"
                values="2;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="8">
              <animate
                attributeName="r"
                begin="0s"
                dur="1.5s"
                values="6;1;2;3;4;5;6"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>
    );
  }
  return (
    <div>
      {isLoaded && (
        <AppContainer>
          <MainNav location={location} />
          {children}
          <MainFooter />
        </AppContainer>
      )}
    </div>
  );
};

export default AppLayout;
