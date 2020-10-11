import React from "react";
import { graphql } from "gatsby";
import AppLayout from "../layouts/app-layout/app-layout";
import styled from "styled-components";
import SEO from "../components/seo";
import Bio from "../components/bio/bio";
import { Typography } from "@material-ui/core";
import Emoji from "../components/emoji/emoji";
import { Link } from "gatsby-theme-material-ui";

const IndexPageContainer = styled.div`
  padding: 0.1rem;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const App = ({ data, location }) => {
  return (
    <AppLayout location={location}>
      {/* TODO: Fill out description and meta */}
      <SEO title="Home" description="" meta={[]} />
      <IndexPageContainer>
        <Bio>
          <TextContainer>
            <Typography variant="body1" paragraph>
              Hi there! Welcome to my little corner on the interweb{"  "}
              <Emoji label="fire" symbol="🔥" />
            </Typography>
            <Typography variant="body1" paragraph>
              Just your garden variety full stack developer and Vim zealot
              (Emacs GTFO). I enjoy building new stuff and keeping up to date on
              the latest web technologies. Currently I'm found obsessiong over{" "}
              <Link href="https://www.gatsbyjs.com/" target="_blank">
                Gatsby
              </Link>
              , which is what I've used to build this website! Go check it out,
              it is supercool{"  "}
              <Emoji label="cat-with-heart-eyes" symbol="😻" />
            </Typography>
            <Typography variant="body1" paragraph>
              Find out more about me <Link href="/about">here</Link> and check
              out some of my <Link href="/blog">blog posts</Link> and{" "}
              <Link href="/projects">projects</Link>!
            </Typography>
          </TextContainer>
        </Bio>
      </IndexPageContainer>
    </AppLayout>
  );
};

export default App;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          social {
            instagram {
              username
              profileUrl
            }
            linkedin {
              username
              profileUrl
            }
            github {
              username
              profileUrl
            }
          }
        }
      }
    }
    avatar: file(absolutePath: { regex: "/logo-final.png/" }) {
      childImageSharp {
        fluid(maxWidth: 2600, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
