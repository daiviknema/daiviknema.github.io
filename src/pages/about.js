import React from "react";
import SEO from "../components/seo";
import AppLayout from "../layouts/app-layout/app-layout";
import AboutPageSection from "../layouts/about-page-section/about-page-section";
import Typography from "@material-ui/core/Typography";
import {
  EmojiEvents,
  School,
  Star,
  Work,
  Code,
  Toys,
  GetApp,
  Home,
} from "@material-ui/icons";
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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const TextContainer = styled.div`
  text-align: left;
  padding-top: 5px;
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

const INTRODUCTION = "Introduction";
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

const Introduction = () => {
  return (
    <TextContainer isXsToSmScreen>
      <Typography variant="body1" paragraph>
        <Emphasis>
          I am a full-stack developer with 2+ years of professional experience
          working in the software industry
        </Emphasis>
        . Before starting my professional journey, I was an undergrad at{" "}
        <StyledLink target="_blank" href="https://www.bits-pilani.ac.in/">
          Birla Institute of Technology & Science, Pilani
        </StyledLink>{" "}
        - one of India's finest engineering institutes, where I earned my
        Bachelor's degree in Computer Science.
      </Typography>
      <Typography variant="body1" paragraph>
        My present interests are extremely varied - ranging from the complete
        gamut of{" "}
        <Emphasis>
          web technologies to competitive programming to machine learning, math
          and statistics . The most up-to-date and complete details of my work
          experience, educational qualifications, technical skills and accolades
          can be found below on this page
        </Emphasis>
        . The same information, perhaps slightly outdated depending on how lazy
        I've been, can also be viewed in PDF format by downloading a copy of my
        resume below:
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
  );
};

const AboutPage = ({ location }) => {
  const theme = useTheme();
  const isXsToSmScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const aboutPageSections = [
    {
      sectionTitle: INTRODUCTION,
      sectionHref: "/about#introduction",
      sectionAnchor: "introduction",
      sectionContent: <Introduction />,
      sectionIcon: (
        <Home
          fontSize="small"
          style={{ fill: theme.palette.text.primary, marginLeft: "9px" }}
        />
      ),
    },
    {
      sectionTitle: WORK_EXPERIENCE,
      sectionHref: "/about#professional-experience",
      sectionAnchor: "professional-experience",
      sectionContent: <WorkExperience />,
      sectionIcon: (
        <Work
          fontSize="small"
          style={{ fill: theme.palette.text.primary, marginLeft: "9px" }}
        />
      ),
    },
    {
      sectionTitle: EDUCATION,
      sectionHref: "/about#education",
      sectionAnchor: "education",
      sectionContent: <Education />,
      sectionIcon: (
        <School
          fontSize="small"
          style={{ fill: theme.palette.text.primary, marginLeft: "9px" }}
        />
      ),
    },
    {
      sectionTitle: PROJECTS,
      sectionHref: "/about#projects",
      sectionAnchor: "projects",
      sectionContent: <Projects />,
      sectionIcon: (
        <Toys
          fontSize="small"
          style={{ fill: theme.palette.text.primary, marginLeft: "9px" }}
        />
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
          style={{ fill: theme.palette.text.primary, marginLeft: "9px" }}
        />
      ),
    },
    {
      sectionTitle: SKILLS,
      sectionHref: "/about#skills",
      sectionAnchor: "skills",
      sectionContent: <TechnicalSkills />,
      sectionIcon: (
        <Code
          fontSize="small"
          style={{ fill: theme.palette.text.primary, marginLeft: "9px" }}
        />
      ),
    },
    {
      sectionTitle: PERSONAL,
      sectionHref: "/about#personal",
      sectionAnchor: "personal",
      sectionContent: <Personal />,
      sectionIcon: (
        <Star
          fontSize="small"
          style={{ fill: theme.palette.text.primary, marginLeft: "9px" }}
        />
      ),
    },
  ];

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && children}
      </div>
    );
  };

  const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const StyledTab = withStyles(() => ({
      root: {
        padding: "unset",
        maxWidth: "unset",
        minWidth: "unset",
        paddingRight: "10px",
      },
      wrapper: {
        flexDirection: "row-reverse",
        justifyContent: "right",
      },
    }))(props => <Tab disableRipple {...props} />);

    return (
      <Grid
        container
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          minHeight: "0",
        }}
      >
        <Grid item xs={2}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            indicatorColor="primary"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            style={{ height: "80vh" }}
          >
            {aboutPageSections.map((sectionInfo, index) => (
              <StyledTab
                label={isXsToSmScreen ? undefined : sectionInfo?.sectionTitle}
                {...a11yProps(index)}
                icon={sectionInfo?.sectionIcon}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={10}>
          {aboutPageSections.map((sectionInfo, index) => (
            <TabPanel value={value} index={index}>
              <AboutPageSection sectionTitle={sectionInfo.sectionTitle}>
                {sectionInfo?.sectionContent}
              </AboutPageSection>
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <AppLayout location={location}>
      {/* TODO: Fill out description and meta */}
      <SEO title="About" description="" meta={[]} />
      <Grid container>
        <Grid item xs={12} style={{ marginTop: "1rem" }}>
          <VerticalTabs />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default AboutPage;
