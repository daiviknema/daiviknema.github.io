import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import styled from "styled-components";

const WorkExperience = () => {
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

  const StyledAccordionDetails = withStyles({
    root: {
      cursor: "pointer",
    },
  })(AccordionDetails);

  const StyledDivider = withStyles({
    root: { marginTop: "3px", marginBottom: "3px" },
  })(Divider);

  const Emphasis = styled.span`
    font-weight: 600;
  `;

  const [state, setState] = useState({
    deshawExpanded: false,
    oyoExpanded: false,
    ibmExpanded: false,
  });

  const toggleExpanded = sectionName => {
    setState({ ...state, [sectionName]: !state[sectionName] });
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ padding: "5px 0px" }}>
        <Accordion elevation={6} expanded={state.deshawExpanded}>
          <StyledAccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => toggleExpanded("deshawExpanded")}
          >
            <Grid container alignItems="baseline" style={{ paddingTop: "5px" }}>
              <Grid item xs={8}>
                <Typography variant="body1">
                  <Emphasis>D.E. Shaw & Co.</Emphasis>
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Typography variant="body2">
                  <i>Present</i>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <StyledDivider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" paragraph>
                  I'm currently working at{" "}
                  <StyledLink href="https://www.deshawindia.com/">
                    D.E. Shaw India
                  </StyledLink>{" "}
                  as a{" "}
                  <Emphasis>
                    Senior Member Technical in the Payroll Dev team
                  </Emphasis>
                  . My primary responsibilities include{" "}
                  <Emphasis>
                    developing and maintaining the complete stack of various
                    payroll processing applications
                  </Emphasis>{" "}
                  internal to D.E. Shaw.
                </Typography>
              </Grid>
            </Grid>
          </StyledAccordionSummary>
          <StyledAccordionDetails
            onClick={() => toggleExpanded("deshawExpanded")}
          >
            <Typography variant="body2" paragraph>
              My day-to-day activities include:
              <ul style={{ marginTop: "0px" }}>
                <li>
                  <Typography variant="body2">
                    Actively participating in all stages of the SDLC; right from{" "}
                    <Emphasis>
                      requirement gathering and planning through to the actual
                      development, testing, release and maintenance
                    </Emphasis>{" "}
                    of new features.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <Emphasis>
                      Interacting with various stakeholders such as UX
                      designers, testers, external team POCs and system
                      administrators
                    </Emphasis>{" "}
                    to ensure that:
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">
                        The projects that are under active development are
                        on-track for completion as per the decided timelines
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        All payroll applications have high availability and any
                        infra upgrades or issues are not affectinonClick=
                        {() => toggleExpanded("oyoExpanded")} g business
                        activities
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        The turnaround time for operational issues on existing
                        features is minimal.
                      </Typography>
                    </li>
                  </ul>
                </li>
                <li>
                  <Typography variant="body2">
                    <Emphasis>Mentoring junior devs</Emphasis> on features that
                    they are building. Coordinating them keeping in mind the
                    final deliverable and performing code reviews
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <Emphasis>Interviewing potential MT and SMT hires</Emphasis>{" "}
                    for DE Shaw
                  </Typography>
                </li>
              </ul>
            </Typography>
          </StyledAccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} style={{ padding: "5px 0px" }}>
        <Accordion elevation={6} expanded={state.oyoExpanded}>
          <StyledAccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => toggleExpanded("oyoExpanded")}
          >
            <Grid container alignItems="baseline" style={{ paddingTop: "5px" }}>
              <Grid item xs={8}>
                <Typography variant="body1">
                  <Emphasis>OYO Rooms</Emphasis>
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Typography variant="body2">
                  <i>Jun '19</i>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <StyledDivider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" paragraph>
                  <StyledLink target="_blank" href="https://www.oyorooms.com">
                    OYO Rooms
                  </StyledLink>{" "}
                  is one of the fastest growing tech startups in India. As a
                  part of the Finance Tech team; I worked on{" "}
                  <Emphasis>
                    building new features and implementing business logic
                    changes in the automated reconciliation of 20,000+
                    ”Smart”-tier OYO partner hotels
                  </Emphasis>
                  .
                </Typography>
              </Grid>
            </Grid>
          </StyledAccordionSummary>
          <StyledAccordionDetails onClick={() => toggleExpanded("oyoExpanded")}>
            <Typography variant="body2" paragraph>
              <ul style={{ marginTop: "0px" }}>
                <li>
                  <Typography variant="body2">
                    <Emphasis>
                      Built new features and implemented business logic changes
                    </Emphasis>{" "}
                    in the automated reconciliation of ”Smart”-tier OYO partner
                    hotels. This included{" "}
                    <Emphasis>
                      several workflows which consumed and processed data of
                      20,000+ OYO partner hotels
                    </Emphasis>
                    . The workflows I built{" "}
                    <Emphasis>
                      helped reduce hundreds of man-hours of tedious
                      reconciliation calculations that were earlier performed by
                      hand
                    </Emphasis>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Responsible for writing, reviewing and maintaining
                    production grade code in OYO’s legacy finance software
                    platform.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    <Emphasis>Participated in hiring at OYO</Emphasis>. Shadowed
                    and conducted interviews of SDE candidates.
                  </Typography>
                </li>
              </ul>
            </Typography>
          </StyledAccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} style={{ padding: "5px 0px" }}>
        <Accordion elevation={6} expanded={state.ibmExpanded}>
          <StyledAccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => toggleExpanded("ibmExpanded")}
          >
            <Grid container alignItems="baseline" style={{ paddingTop: "5px" }}>
              <Grid item xs={8}>
                <Typography variant="body1">
                  <Emphasis>IBM India Software Labs</Emphasis>
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
                  For my Bachelors' degree final-year internship, I worked with
                  the Watson IoT team at IBM India Software Labs on an{" "}
                  <Emphasis>
                    IoT enabled solution that monitored energy consumption in
                    large commercial building complexes such as retail stores,
                    office buildings and shopping malls.
                  </Emphasis>
                </Typography>
              </Grid>
            </Grid>
          </StyledAccordionSummary>
          <StyledAccordionDetails onClick={() => toggleExpanded("ibmExpanded")}>
            <Typography variant="body2" paragraph>
              <ul style={{ marginTop: "0px" }}>
                <li>
                  <Typography variant="body2">
                    Responsible for various tasks related to hardening the
                    research prototype to a marketable product: writing software
                    components that help to integrate the UI, analytics and data
                    stores; writing installation scripts to set up the
                    end-to-end system.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Performed knowledge transfer and upskilling of the business
                    teams.
                  </Typography>
                </li>
              </ul>
            </Typography>
          </StyledAccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} style={{ padding: "5px 0px" }}>
        <Accordion elevation={6}>
          <StyledAccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container alignItems="baseline" style={{ paddingTop: "5px" }}>
              <Grid item xs={8}>
                <Typography variant="body1">
                  <Emphasis>Samsung Research Institute</Emphasis>
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Typography variant="body2">
                  <i>Jul '17</i>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <StyledDivider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" paragraph>
                  As part of the Network Intelligence team, I was involved in a
                  project that aimed to learn patterns in cell-phone users’
                  network activity and suggest time slots for installing
                  software updates.{" "}
                  <Emphasis>
                    Project work involved learning about the use of Recurrent
                    Neural Networks for analysis of time-series data.
                  </Emphasis>
                </Typography>
              </Grid>
            </Grid>
          </StyledAccordionSummary>
        </Accordion>
      </Grid>
      <Grid item xs={12} style={{ padding: "5px 0px" }}>
        <Accordion elevation={6}>
          <StyledAccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container alignItems="baseline" style={{ paddingTop: "5px" }}>
              <Grid item xs={8}>
                <Typography variant="body1">
                  <Emphasis>
                    Central Electronics Engineering Research Institute
                  </Emphasis>
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Typography variant="body2">
                  <i>Jul '16</i>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <StyledDivider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" paragraph>
                  I worked as a Summer Intern with the Digital Systems Group at{" "}
                  <StyledLink target="_blank" href="https://www.ceeri.res.in/">
                    CSIR-CEERI, Pilani
                  </StyledLink>
                  . I was part of a research project on Brain Computer Interface
                  (BCI). My responsibilities involved{" "}
                  <Emphasis>
                    learning about the major steps in a BCI system, Principal
                    Components Analysis for feature extraction and
                    classification using Convolutional Neural Networks.
                  </Emphasis>
                </Typography>
              </Grid>
            </Grid>
          </StyledAccordionSummary>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default WorkExperience;
