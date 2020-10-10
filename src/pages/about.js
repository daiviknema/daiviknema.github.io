import React from "react";
import SEO from "../components/seo";
import AppLayout from "../layouts/app-layout/app-layout";
// import UnderConstruction from "../components/under-construction/under-construction";
import AboutPageSection from "../layouts/about-page-section/about-page-section";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import { School, Work } from "@material-ui/icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useTheme from "@material-ui/styles/useTheme";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "./styles/about.module.css";

const AboutPage = ({ location }) => {
  const theme = useTheme();
  const isXsToSmScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <AppLayout location={location}>
      {/* TODO: Fill out description and meta */}
      <SEO title="About" description="" meta={[]} />
      <Grid container>
        <Grid item xs={1} md={3}>
          <Timeline className={styles.timeline}>
            <TimelineItem className={styles.timelineItem}>
              {!isXsToSmScreen && (
                <TimelineOppositeContent>
                  <Typography>Work Experience</Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot>
                  <AnchorLink
                    to="/about#professional-experience"
                    underline="none"
                  >
                    <Work style={{ fill: theme.palette.text.primary }} />
                  </AnchorLink>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            </TimelineItem>
            <TimelineItem className={styles.timelineItem}>
              {!isXsToSmScreen && (
                <TimelineOppositeContent>
                  <Typography>Education</Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot>
                  <AnchorLink to="/about#education">
                    <School style={{ fill: theme.palette.text.primary }} />
                  </AnchorLink>
                </TimelineDot>
              </TimelineSeparator>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={11} md={9}>
          <AboutPageSection
            sectionAnchor="professional-experience"
            sectionTitle="Work Experience"
          >
            Irure velit minim est tempor aliquip ullamco. Tempor nisi qui duis
            nulla amet nostrud ea. Deserunt tempor nostrud commodo incididunt
            amet anim consequat. Commodo magna Lorem cupidatat sunt laborum.
            Amet cupidatat nulla esse ut amet mollit ea et ullamco consectetur
            velit reprehenderit consectetur. Qui in culpa culpa officia
            adipisicing. Pariatur pariatur fugiat tempor sint pariatur sunt
            occaecat enim. Eu mollit dolor in sint et nostrud sunt commodo Lorem
            eiusmod. Enim ea aute incididunt nostrud deserunt ea esse amet
            laborum laborum ullamco do tempor. Consequat dolor do minim ad duis
            magna eu mollit ex. Dolore enim deserunt elit aliquip officia
            officia cillum est sit proident non deserunt nostrud elit. In sit eu
            Lorem incididunt ut pariatur quis in nostrud irure mollit veniam
            enim sint. Aute ad id nulla deserunt velit Lorem cillum proident
            adipisicing adipisicing nisi do.
          </AboutPageSection>
          <AboutPageSection sectionAnchor="education" sectionTitle="Education">
            Lorem irure pariatur est proident cillum est id. Cillum sit anim
            elit consectetur. Quis quis dolore aute aliquip culpa non
            reprehenderit minim adipisicing elit aliquip nisi amet. Ex eiusmod
            officia in ex minim non aliquip ad veniam non. Officia quis
            consectetur enim ullamco nisi eu in proident ut. Non officia
            deserunt mollit aute enim. Esse eiusmod irure laboris consequat et
            consequat. Aliquip ad adipisicing eiusmod aliqua aliquip ex velit
            sit incididunt ut. Proident nostrud adipisicing dolor in est mollit
            ipsum. Reprehenderit fugiat magna aliquip ea sunt sint veniam.
            Proident qui fugiat est laboris nostrud consequat ex duis quis id
            culpa sint voluptate fugiat. Nostrud velit sit aute nisi cillum anim
            velit exercitation sit magna incididunt officia. Occaecat aliquip
            nostrud voluptate mollit culpa eiusmod culpa occaecat dolore velit
            pariatur velit amet magna. Dolore proident aliquip sint mollit culpa
            adipisicing fugiat aliqua irure enim quis nisi nulla tempor.
            Consectetur fugiat nisi et enim ullamco ut eu ullamco aute duis
            reprehenderit. Incididunt ut ea dolore ex occaecat commodo irure
            velit veniam laborum. Elit officia enim non quis sint nostrud
            exercitation ullamco eiusmod. Proident laboris incididunt magna quis
            quis est laboris minim eu amet voluptate ea anim exercitation. Non
            ipsum dolore occaecat ad minim Lorem deserunt nulla culpa et nostrud
            non quis labore. Adipisicing eu Lorem culpa velit ex et magna ad
            voluptate nulla veniam ut aliqua consectetur. Minim anim culpa
            mollit occaecat pariatur esse elit exercitation consequat
            adipisicing dolor elit consectetur cillum. Velit cupidatat aute duis
            duis. Veniam veniam sint non magna est proident consequat voluptate
            dolor tempor. Ea proident eu ut labore esse ullamco qui veniam
            ullamco aute.
          </AboutPageSection>
        </Grid>
      </Grid>

      <div className={styles.timeline}></div>
    </AppLayout>
  );
};

export default AboutPage;
