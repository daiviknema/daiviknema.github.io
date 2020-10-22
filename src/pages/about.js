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

const TextContainer = styled.div`
  text-align: left;
`;

const AboutPageTimelineItem = styled.div`
  .MuiTimelineItem-missingOppositeContent::before {
    padding: 0px;
  }
`;

const WORK_EXPERIENCE = "Work Experience";
const EDUCATION = "Education";
const PROJECTS = "Projects";
const ACHIEVEMENTS = "Achievements";
const SKILLS = "Technical Skills";
const PERSONAL = "Personal";

const Projects = () => {
  return (
    <Typography variant="body2">
      Please check out my <Link href="/projects">projects page</Link> for a
      complete list.
    </Typography>
  );
};

const Skills = () => {
  return (
    <Typography variant="body2">
      Est reprehenderit nulla do dolor nisi qui esse est eu culpa enim esse ut.
      Ullamco laborum culpa tempor magna laboris adipisicing nisi excepteur in
      laborum ullamco non enim cupidatat. Sunt ad incididunt nulla labore velit
      tempor aliquip commodo id aliqua commodo ad ipsum.
    </Typography>
  );
};

const Personal = () => {
  return (
    <Typography variant="body2">
      Consectetur non duis veniam veniam exercitation voluptate labore
      adipisicing incididunt consectetur adipisicing nisi proident. Enim in qui
      adipisicing et magna aute et velit minim. Sit voluptate enim laborum amet
      nostrud non officia sit sint.
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
      sectionContent: <Skills />,
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
            Culpa eu amet ex voluptate voluptate incididunt sint nisi cupidatat.
            Minim aute in Lorem cillum pariatur esse dolore occaecat et elit
            eiusmod sint in. Fugiat Lorem consectetur consectetur laboris sunt
            consequat sunt sint qui enim. Consequat sunt amet non labore
            reprehenderit irure est laborum mollit. Exercitation officia eu
            labore consectetur veniam non pariatur consequat sint fugiat.
            Deserunt ea officia ex irure ea ad sit proident reprehenderit
            consequat commodo. Dolor qui minim officia Lorem id ipsum eu
            commodo. Tempor nisi ullamco est culpa ad laborum ut sit excepteur
            aliqua ut veniam qui. Labore aliqua non est officia incididunt enim
            non proident et sit. Magna consectetur eu duis ipsum veniam fugiat.
            Irure nisi aute eu aute.
          </Typography>
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
