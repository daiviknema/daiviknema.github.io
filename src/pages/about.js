import React from "react";
import SEO from "../components/seo";
import Bio from "../components/bio/bio";
import AppLayout from "../layouts/app-layout/app-layout";
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
import {
  EmojiEvents,
  School,
  Star,
  Work,
  Code,
  Toys,
  GetApp,
} from "@material-ui/icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useTheme from "@material-ui/styles/useTheme";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";
import WorkExperience from "../components/about/work-experience";
import Education from "../components/about/education";
import Achievements from "../components/about/achievements";
import Link from "@material-ui/core/Link";
import TechnicalSkills from "../components/about/technical-skills";
import { Button, withStyles } from "@material-ui/core";
import resume from "../../content/assets/daivik-resume.pdf";

const TextContainer = styled.div`
  text-align: left;
`;

const AboutPageTimelineItem = styled.div`
  .MuiTimelineItem-missingOppositeContent::before {
    padding: 0px;
  }
`;

const StyledLink = withStyles({
  root: {
    fontWeight: "bold",
  },
  underlineHover: {
    fontSize: "bold",
  },
})(Link);

const Emphasis = styled.span`
  font-weight: 600;
`;

const WORK_EXPERIENCE = "Work Experience";
const EDUCATION = "Education";
const PROJECTS = "Projects";
const ACHIEVEMENTS = "Achievements";
const SKILLS = "Technical Skills";
const PERSONAL = "Personal";

const Projects = () => {
  return (
    <Typography variant="body2" style={{ paddingTop: "5px" }}>
      Please check out my{" "}
      <StyledLink href="/projects">projects page</StyledLink> for a complete
      list.
    </Typography>
  );
};

const Personal = () => {
  return (
    <Typography variant="body2" style={{ paddingTop: "5px" }}>
      Outside of work, I like to spend my time{" "}
      <StyledLink
        target="_blank"
        href="https://www.instagram.com/_i_am_papa_ki_pari_/"
      >
        playing the piano
      </StyledLink>{" "}
      or reading.
    </Typography>
  );
};

const AboutPage = ({ data, location }) => {
  const theme = useTheme();
  const isXsToSmScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const aboutPageSections = [
    {
      sectionTitle: WORK_EXPERIENCE,
      sectionHref: "/about#professional-experience",
      sectionAnchor: "professional-experience",
      sectionContent: <WorkExperience />,
      sectionIcon: (
        <Work fontSize="small" style={{ fill: theme.palette.text.primary }} />
      ),
    },
    {
      sectionTitle: EDUCATION,
      sectionHref: "/about#education",
      sectionAnchor: "education",
      sectionContent: <Education />,
      sectionIcon: (
        <School fontSize="small" style={{ fill: theme.palette.text.primary }} />
      ),
    },
    {
      sectionTitle: PROJECTS,
      sectionHref: "/about#projects",
      sectionAnchor: "projects",
      sectionContent: <Projects />,
      sectionIcon: (
        <Toys fontSize="small" style={{ fill: theme.palette.text.primary }} />
      ),
    },
    {
      sectionTitle: ACHIEVEMENTS,
      sectionHref: "/about#achievements",
      sectionAnchor: "achievements",
      sectionContent: <Achievements />,
      sectionIcon: (
        <EmojiEvents
          fontSize="small"
          style={{ fill: theme.palette.text.primary }}
        />
      ),
    },
    {
      sectionTitle: SKILLS,
      sectionHref: "/about#skills",
      sectionAnchor: "skills",
      sectionContent: <TechnicalSkills />,
      sectionIcon: (
        <Code fontSize="small" style={{ fill: theme.palette.text.primary }} />
      ),
    },
    {
      sectionTitle: PERSONAL,
      sectionHref: "/about#personal",
      sectionAnchor: "personal",
      sectionContent: <Personal />,
      sectionIcon: (
        <Star fontSize="small" style={{ fill: theme.palette.text.primary }} />
      ),
    },
  ];

  const TimelineSegment = ({
    caption,
    href,
    sectionIcon,
    isTerminalSegment,
  }) => {
    return (
      <AboutPageTimelineItem>
        <TimelineItem>
          {!isXsToSmScreen && (
            <TimelineOppositeContent style={{ paddingTop: "14px" }}>
              <Typography variant="caption">{caption}</Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot style={{ marginTop: "2px", marginBottom: "2px" }}>
              <AnchorLink to={href} underline="none">
                <div style={{ display: "flex", alignItems: "center" }}>
                  {sectionIcon}
                </div>
              </AnchorLink>
            </TimelineDot>
            {isTerminalSegment && <TimelineConnector />}
          </TimelineSeparator>
        </TimelineItem>
      </AboutPageTimelineItem>
    );
  };

  return (
    <AppLayout location={location}>
      {/* TODO: Fill out description and meta */}
      <SEO title="About" description="" meta={[]} />
      <Bio>
        <TextContainer>
          <Typography variant="body1" paragraph>
            <Emphasis>
              I am a full-stack developer with 2+ years of professional
              experience working in the software industry
            </Emphasis>
            . Before starting my professional journey, I was an undergrad at{" "}
            <StyledLink target="_blank" href="https://www.bits-pilani.ac.in/">
              Birla Institute of Technology & Science, Pilani
            </StyledLink>{" "}
            - one of India's finest engineering institutes, where I earned my
            Bachelor's degree in Computer Science.
          </Typography>
          <Typography variant="body1" paragraph>
            My present interests are extremely varied - ranging from the
            complete gamut of{" "}
            <Emphasis>
              web technologies to competitive programming to machine learning,
              math and statistics . The most up-to-date and complete details of
              my work experience, educational qualifications, technical skills
              and accolades can be found below on this page
            </Emphasis>
            . The same information, perhaps slightly outdated depending on how
            lazy I've been, can also be viewed in PDF format by downloading a
            copy of my resume below:
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GetApp />}
            href={resume}
          >
            Download PDF Resume
          </Button>
        </TextContainer>
      </Bio>
      <Grid container>
        <Grid item xs={1} md={3}>
          <Timeline
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingTop: "20px",
              position: "sticky",
              top: "10px",
            }}
          >
            {aboutPageSections.map((aboutPageSection, index) => {
              return (
                <TimelineSegment
                  caption={aboutPageSection.sectionTitle}
                  href={aboutPageSection.sectionHref}
                  sectionIcon={aboutPageSection.sectionIcon}
                  isTerminalSegment={index !== aboutPageSections.length - 1}
                />
              );
            })}
          </Timeline>
        </Grid>
        <Grid item xs={11} md={9}>
          {aboutPageSections.map(aboutPageSection => (
            <AboutPageSection
              sectionAnchor={aboutPageSection.sectionAnchor}
              sectionTitle={aboutPageSection.sectionTitle}
            >
              {aboutPageSection?.sectionContent}
            </AboutPageSection>
          ))}
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default AboutPage;
