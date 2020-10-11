import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const AboutSectionInternal = styled.div`
  padding: 10px 20px;
  margin-top: 1rem;
`;

const AboutPageSection = ({ sectionTitle, sectionAnchor, children }) => {
  return (
    <Container id={sectionAnchor} style={{ paddingRight: "0px" }}>
      <Paper elevation={6}>
        <AboutSectionInternal>
          <Typography variant="h5">{sectionTitle}</Typography>
          {children}
        </AboutSectionInternal>
      </Paper>
    </Container>
  );
};

export default AboutPageSection;
