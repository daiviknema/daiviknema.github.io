import React from "react";
import AppLayout from "../layouts/app-layout/app-layout";
import styled from "styled-components";
import SEO from "../components/seo";
import Bio from "../components/bio/bio";
import { Typography, withStyles } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

const IndexPageContainer = styled.div`
  padding: 0.1rem;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Emphasis = styled.span`
  font-weight: 600;
`;

const StyledLink = withStyles({
  root: {
    fontWeight: "bold",
  },
  underlineHover: {
    fontSize: "bold",
  },
})(Link);

const App = ({ location }) => {
  return (
    <AppLayout location={location}>
      {/* TODO: Fill out description and meta */}
      <SEO title="Home" description="" meta={[]} />
      <IndexPageContainer>
        <Bio>
          <TextContainer>
            <Typography variant="body1" paragraph>
              <Emphasis>
                Hi there! Welcome to my little corner on the interweb!
              </Emphasis>
            </Typography>
            <Typography variant="body1" paragraph>
              <Emphasis>I am a full-stack developer</Emphasis> and Vim zealot on
              weekdays and very lazy on the weekends. My interests are extremely
              varied - ranging from the complete gamut of{" "}
              <Emphasis>
                web technologies to competitive programming to machine learning,
                math and statistics
              </Emphasis>
              . I love learning new skills and expanding my technical horizons.
              To that end, I plan on using this space to document my learnings
              and showcase the cool stuff I'm working on.
            </Typography>
            <Typography variant="body1" paragraph>
              Find out more about me <StyledLink href="/about">here</StyledLink>{" "}
              and check out some of my{" "}
              <StyledLink href="/blog">blog posts</StyledLink> and{" "}
              <StyledLink href="/projects">projects</StyledLink>!
            </Typography>
          </TextContainer>
        </Bio>
      </IndexPageContainer>
    </AppLayout>
  );
};

export default App;
