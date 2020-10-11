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
import { EmojiEvents, School, Star, Work } from "@material-ui/icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import useTheme from "@material-ui/styles/useTheme";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";

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
const ACHIEVEMENTS = "Achievements";
const SKILLS = "Skills";
const PERSONAL = "Personal";

const WorkExperience = () => {
  return (
    <Typography variant="body2">
      Irure velit minim est tempor aliquip ullamco. Tempor nisi qui duis nulla
      amet nostrud ea. Deserunt tempor nostrud commodo incididunt amet anim
      consequat. Commodo magna Lorem cupidatat sunt laborum. Amet cupidatat
      nulla esse ut amet mollit ea et ullamco consectetur velit reprehenderit
      consectetur. Qui in culpa culpa officia adipisicing. Pariatur pariatur
      fugiat tempor sint pariatur sunt occaecat enim. Eu mollit dolor in sint et
      nostrud sunt commodo Lorem eiusmod. Enim ea aute incididunt nostrud
      deserunt ea esse amet laborum laborum ullamco do tempor. Consequat dolor
      do minim ad duis magna eu mollit ex. Dolore enim deserunt elit aliquip
      officia officia cillum est sit proident non deserunt nostrud elit. In sit
      eu Lorem incididunt ut pariatur quis in nostrud irure mollit veniam enim
      sint. Aute ad id nulla deserunt velit Lorem cillum proident adipisicing
      adipisicing nisi do.
    </Typography>
  );
};

const Education = () => {
  return (
    <Typography variant="body2">
      Lorem irure pariatur est proident cillum est id. Cillum sit anim elit
      consectetur. Quis quis dolore aute aliquip culpa non reprehenderit minim
      adipisicing elit aliquip nisi amet. Ex eiusmod officia in ex minim non
      aliquip ad veniam non. Officia quis consectetur enim ullamco nisi eu in
      proident ut. Non officia deserunt mollit aute enim. Esse eiusmod irure
      laboris consequat et consequat. Aliquip ad adipisicing eiusmod aliqua
      aliquip ex velit sit incididunt ut. Proident nostrud adipisicing dolor in
      est mollit ipsum. Reprehenderit fugiat magna aliquip ea sunt sint veniam.
      Proident qui fugiat est laboris nostrud consequat ex duis quis id culpa
      sint voluptate fugiat. Nostrud velit sit aute nisi cillum anim velit
      exercitation sit magna incididunt officia. Occaecat aliquip nostrud
      voluptate mollit culpa eiusmod culpa occaecat dolore velit pariatur velit
      amet magna. Dolore proident aliquip sint mollit culpa adipisicing fugiat
      aliqua irure enim quis nisi nulla tempor. Consectetur fugiat nisi et enim
      ullamco ut eu ullamco aute duis reprehenderit. Incididunt ut ea dolore ex
      occaecat commodo irure velit veniam laborum. Elit officia enim non quis
      sint nostrud exercitation ullamco eiusmod. Proident laboris incididunt
      magna quis quis est laboris minim eu amet voluptate ea anim exercitation.
      Non ipsum dolore occaecat ad minim Lorem deserunt nulla culpa et nostrud
      non quis labore. Adipisicing eu Lorem culpa velit ex et magna ad voluptate
      nulla veniam ut aliqua consectetur. Minim anim culpa mollit occaecat
      pariatur esse elit exercitation consequat adipisicing dolor elit
      consectetur cillum. Velit cupidatat aute duis duis. Veniam veniam sint non
      magna est proident consequat voluptate dolor tempor. Ea proident eu ut
      labore esse ullamco qui veniam ullamco aute.
    </Typography>
  );
};

const Achievements = () => {
  return (
    <Typography variant="body2">
      Et anim qui ad laborum. Magna ex sint in adipisicing labore nostrud
      commodo amet qui officia est. Qui ad reprehenderit dolor cupidatat sint
      anim laborum mollit eiusmod sint mollit. Eiusmod commodo sunt eu cupidatat
      incididunt dolor nulla duis amet culpa do nostrud officia non. Occaecat
      aliqua culpa reprehenderit velit cupidatat dolore voluptate ea. Dolore
      nostrud ex ea duis id eu eu commodo do tempor.
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

const aboutPageSections = [
  {
    sectionTitle: WORK_EXPERIENCE,
    sectionHref: "/about#professional-experience",
    sectionAnchor: "professional-experience",
    sectionContent: <WorkExperience />,
  },
  {
    sectionTitle: EDUCATION,
    sectionHref: "/about#education",
    sectionAnchor: "education",
    sectionContent: <Education />,
  },
  {
    sectionTitle: ACHIEVEMENTS,
    sectionHref: "/about#achievements",
    sectionAnchor: "achievements",
    sectionContent: <Achievements />,
  },
  {
    sectionTitle: SKILLS,
    sectionHref: "/about#skills",
    sectionAnchor: "skills",
    sectionContent: <Skills />,
  },
  {
    sectionTitle: PERSONAL,
    sectionHref: "/about#personal",
    sectionAnchor: "personal",
    sectionContent: <Personal />,
  },
];

const AboutPage = ({ data, location }) => {
  const theme = useTheme();
  const isXsToSmScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const TimelineSegment = ({ caption, href, isTerminalSegment, children }) => {
    return (
      <AboutPageTimelineItem>
        <TimelineItem>
          {!isXsToSmScreen && (
            <TimelineOppositeContent style={{ paddingTop: "14px" }}>
              <Typography variant="caption">{caption}</Typography>
            </TimelineOppositeContent>
          )}
          <TimelineSeparator>
            <TimelineDot>
              <AnchorLink to={href} underline="none">
                {/* <Work
                  fontSize={"small"}
                  style={{ fill: theme.palette.text.primary }}
                /> */}
                {children}
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
              position: "sticky",
              top: "0px",
            }}
          >
            {aboutPageSections.map((aboutPageSection, index) => {
              return (
                <TimelineSegment
                  caption={aboutPageSection.sectionTitle}
                  href={aboutPageSection.sectionHref}
                  isTerminalSegment={index !== aboutPageSections.length - 1}
                >
                  {aboutPageSection?.sectionTitle === WORK_EXPERIENCE && (
                    <Work
                      fontSize="small"
                      style={{ fill: theme.palette.text.primary }}
                    />
                  )}
                  {aboutPageSection?.sectionTitle === EDUCATION && (
                    <School
                      fontSize="small"
                      style={{ fill: theme.palette.text.primary }}
                    />
                  )}
                  {aboutPageSection?.sectionTitle === ACHIEVEMENTS && (
                    <EmojiEvents
                      fontSize="small"
                      style={{ fill: theme.palette.text.primary }}
                    />
                  )}
                  {aboutPageSection?.sectionTitle === SKILLS && (
                    <Star
                      fontSize="small"
                      style={{ fill: theme.palette.text.primary }}
                    />
                  )}
                  {aboutPageSection?.sectionTitle === PERSONAL && (
                    <Work
                      fontSize="small"
                      style={{ fill: theme.palette.text.primary }}
                    />
                  )}
                </TimelineSegment>
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
