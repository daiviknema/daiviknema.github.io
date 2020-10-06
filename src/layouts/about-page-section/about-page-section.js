import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const AboutPageSection = ({ sectionTitle, sectionAnchor, children }) => {
  return (
    <Container id={sectionAnchor}>
      <Paper>
        <h3>{sectionTitle}</h3>
        {children}
      </Paper>
    </Container>
  );
};

export default AboutPageSection;
