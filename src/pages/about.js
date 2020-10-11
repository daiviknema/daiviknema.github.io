import React, {useState} from "react";
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
import { EmojiEvents, School, Star, Work, Code } from "@material-ui/icons";
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
  const [state, setState] = useState({
    deshaw: { collapsed: true },
    oyo: { collapsed: true },
  });

  const toggleDeshawCollapsed = () => {
    const collapseStatus = state?.deshaw?.collapsed;
    setState({ deshaw: { collapsed: !collapseStatus } });
  };
  return (
    <Grid container alignItems="baseline" style={{ paddingTop: "5px" }}>
      <Grid item xs={8}>
        <Typography variant="body1">D.E. Shaw & Co.</Typography>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "right" }}>
        <Typography variant="body2">
          <i>Present</i>
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ padding: "5px 0px" }}>
        <Typography variant="body2" paragraph>
          Currently I'm working at DE Shaw India as a Senior Member Technical in
          the Payroll Dev team. My responsibilities mainly include developing
          and maintaining the complete stack of various internal payroll
          applications at DE Shaw.{" "}
          {state.deshaw.collapsed && (
            <a onClick={toggleDeshawCollapsed}>(more...)</a>
          )}
        </Typography>
        {!state?.deshaw?.collapsed && (
          <Typography variant="body2" paragraph>
            My day-to-day activities include:
            <ul style={{ marginTop: "0px" }}>
              <li>
                <Typography variant="body2">
                  Actively participating in all stages of the SDLC; right from
                  requirement gathering and planning through to the actual
                  development, testing and release of new features.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Interacting with various stakeholders such as UX designers,
                  testers, external team POCs and system administrators to
                  ensure that:
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
                      infra upgrades or issues do not affect business activities
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      The turnaround time for ops issues on existing features is
                      minimal.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="body2">
                  Mentoring junior devs on features that they are building.
                  Coordinating them keeping in mind the final deliverable and
                  performing code reviews
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Interviewing potential MT and SMT hires for DE Shaw
                </Typography>
              </li>
            </ul>
            <a onClick={toggleDeshawCollapsed}>(less)</a>
          </Typography>
        )}
        {/* <Typography variant="body2" paragraph>
          I am an active participant in all stages of the SDLC; right from
          requirement gathering and planning through to the actual development,
          testing and release of new features. My day-to-day activities include
          a high degree of interaction with various stakeholders such as UX
          designers, testers, external team POCs and system administrators to
          ensure that: a. the projects that are under active development are
          on-track for completion as per the decided timelines; b. all payroll
          applications have high availability and any infra upgrades or issues
          do not affect business activities; and c. the turnaround time for ops
          issues on existing features is minimal. I also work closely with two
          junior devs - mentoring them on the features that they are building
          and reviewing their code. From time to time, I also interview
          potential hires on behalf of the firm
        </Typography> */}
      </Grid>
    </Grid>
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
              position: "sticky",
              top: "0px",
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
