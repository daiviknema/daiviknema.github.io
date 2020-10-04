import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import AppLayout from "../layouts/app-layout";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./styles/index.module.css";
import { Typography } from "@material-ui/core";
import Emoji from "../components/emoji/emoji";
import { Link } from "gatsby-theme-material-ui";
import { LinkedIn, GitHub, Instagram } from "@material-ui/icons";

const SocialMediaIconsGrid = ({ linkedinUrl, instagramUrl, githubUrl }) => {
  return (
    <Container className={styles.socialMediaIconsGrid}>
      <Grid container alignItems="center" justify="center">
        {linkedinUrl && <Grid item xs={4}>
          <Link
            target="_blank"
            href={linkedinUrl}
            color="textPrimary"
          >
            <LinkedIn />
          </Link>
        </Grid>}
        {instagramUrl && <Grid item xs={4}>
          <Link
            target={`${githubUrl && "_blank"}`}
            href={`${"#" && githubUrl}`}
            color="textPrimary"
          >
            <GitHub />
          </Link>
        </Grid>}
        {instagramUrl && <Grid item xs={4}>
          <Link
            target={`${instagramUrl && "_blank"}`}
            href={`${"#" && instagramUrl}`}
            color="textPrimary"
          >
            <Instagram />
          </Link>
        </Grid>}
      </Grid>
    </Container>
  );
};

const App = ({ data }) => {
  const avatarFluid = data?.avatar?.childImageSharp?.fluid;
  const {
    instagram,
    linkedin,
    github,
  } = data?.site?.siteMetadata?.author?.social;
  return (
    <AppLayout>
      <Container className={styles.container}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} md={4}>
            <Container className={styles.imgContainer}>
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
            </Container>
          </Grid>

          <Grid item xs={12} md={8}>
            <Container className={styles.textContainer}>
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
            </Container>
          </Grid>
        </Grid>
      </Container>
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
