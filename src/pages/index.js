import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import AppLayout from "../layouts/app-layout/app-layout";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Emoji from "../components/emoji/emoji";
import { Link } from "gatsby-theme-material-ui";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";

const IndexPageContainer = styled.div`
  padding: 0.1rem;
`;

const ImgContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const SocialMediaIconsGridContainer = styled.div`
  padding: 1rem;
`;

const SocialMediaIconsGrid = ({ linkedinUrl, instagramUrl, githubUrl }) => {
  return (
    <SocialMediaIconsGridContainer>
      <Grid container alignItems="center" justify="center">
        {linkedinUrl && (
          <Grid item xs={4}>
            <Link target="_blank" href={linkedinUrl} color="textPrimary">
              <LinkedIn />
            </Link>
          </Grid>
        )}
        {instagramUrl && (
          <Grid item xs={4}>
            <Link
              target={`${githubUrl && "_blank"}`}
              href={`${"#" && githubUrl}`}
              color="textPrimary"
            >
              <GitHub />
            </Link>
          </Grid>
        )}
        {instagramUrl && (
          <Grid item xs={4}>
            <Link
              target={`${instagramUrl && "_blank"}`}
              href={`${"#" && instagramUrl}`}
              color="textPrimary"
            >
              <Instagram />
            </Link>
          </Grid>
        )}
      </Grid>
    </SocialMediaIconsGridContainer>
  );
};

const App = ({ data, location }) => {
  const avatarFluid = data?.avatar?.childImageSharp?.fluid;
  const {
    instagram,
    linkedin,
    github,
  } = data?.site?.siteMetadata?.author?.social;
  return (
    <AppLayout location={location}>
      <IndexPageContainer>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} md={4}>
            <ImgContainer>
              <Img
                fluid={avatarFluid}
                alt="Profile image here"
                imgStyle={{ border: "5px solid", borderRadius: "50%" }}
              />
              <SocialMediaIconsGrid
                instagramUrl={instagram?.profileUrl}
                githubUrl={github?.profileUrl}
                linkedinUrl={linkedin?.profileUrl}
              />
            </ImgContainer>
          </Grid>

          <Grid item xs={12} md={8}>
            <TextContainer>
              <Typography variant="body1" paragraph>
                Hi there! Welcome to my little corner on the interweb{"  "}
                <Emoji label="fire" symbol="🔥" />
              </Typography>
              <Typography variant="body1" paragraph>
                Just your garden variety full stack developer and Vim zealot
                (Emacs GTFO). I enjoy building new stuff and keeping up to date
                on the latest web technologies. Currently I'm found obsessiong
                over{" "}
                <Link href="https://www.gatsbyjs.com/" target="_blank">
                  Gatsby
                </Link>
                , which is what I've used to build this website! Go check it
                out, it is supercool{"  "}
                <Emoji label="cat-with-heart-eyes" symbol="😻" />
              </Typography>
              <Typography variant="body1" paragraph>
                Find out more about me <Link href="/about">here</Link> and check
                out some of my <Link href="/blog">blog posts</Link> and{" "}
                <Link href="/projects">projects</Link>!
              </Typography>
            </TextContainer>
          </Grid>
        </Grid>
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
