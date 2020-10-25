import React from "react";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import styled from "styled-components";

const Education = () => {
  const StyledLink = withStyles({
    root: {
      fontWeight: "bold",
    },
    underlineHover: {
      fontSize: "bold",
    },
  })(Link);

  const StyledAccordionSummary = withStyles({
    root: {
      margin: "0px 0px",
    },
    content: {
      margin: "5px 0px !important",
    },
  })(AccordionSummary);

  const StyledDivider = withStyles({
    root: { marginTop: "3px", marginBottom: "3px" },
  })(Divider);

  const Emphasis = styled.span`
    font-weight: 600;
  `;

  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: "5px 0px" }}>
        <Accordion elevation={6}>
          <StyledAccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container alignItems="baseline" style={{ paddingTop: "5px" }}>
              <Grid item xs={8}>
                <Typography variant="body1">
                  <Emphasis>Birla Institute of Technology & Science, Pilani</Emphasis>
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Typography variant="body2">
                  <i>Jun '18</i>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <StyledDivider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" paragraph>
                  I graduated from{" "}
                  <StyledLink
                    target="_blank"
                    href="https://www.bits-pilani.ac.in/"
                  >
                    BITS, Pilani
                  </StyledLink>{" "}
                  Pilani Campus in 2018 with a{" "}
                  <Emphasis>Bachelors degree in Computer Science</Emphasis>.
                  Being one of the{" "}
                  <Emphasis>premier engineering institutes of India</Emphasis>,
                  BITS was a highly competitive environment and one of the most
                  enriching experiences of my life
                </Typography>
              </Grid>
            </Grid>
          </StyledAccordionSummary>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Education;
