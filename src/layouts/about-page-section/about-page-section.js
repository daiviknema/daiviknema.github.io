import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const AboutSectionInternal = styled.div`
padding-bottom: 20px;
`;

const AboutPageSection = ({ sectionTitle, sectionAnchor, children }) => {
  return (
    <Container id={sectionAnchor} style={{ paddingRight: "0px" }}>
      <AboutSectionInternal>
        <Typography variant="h5">{sectionTitle}</Typography>
        <Divider />
        {children}
      </AboutSectionInternal>
    </Container>
  );
};

export default AboutPageSection;
