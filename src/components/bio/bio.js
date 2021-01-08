import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby-theme-material-ui";
import { LinkedIn, GitHub, Instagram, Email } from "@material-ui/icons";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const ImgContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const SocialMediaIconsGridContainer = styled.div`
  padding: 1rem;
`;

const SocialMediaIconsGrid = ({
  linkedinUrl,
  instagramUrl,
  githubUrl,
  email,
}) => {
  return (
    <SocialMediaIconsGridContainer>
      <Grid container alignItems="center" justify="center">
        {linkedinUrl && (
          <Grid item xs={2}>
            <Link target="_blank" href={linkedinUrl} color="textPrimary">
              <LinkedIn />
            </Link>
          </Grid>
        )}
        {instagramUrl && (
          <Grid item xs={2}>
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
          <Grid item xs={2}>
            <Link
              target={`${instagramUrl && "_blank"}`}
              href={`${"#" && instagramUrl}`}
              color="textPrimary"
            >
              <Instagram />
            </Link>
          </Grid>
        )}
        {email && (
          <Grid item xs={2}>
            <Link href={`${"#" && email}`} color="textPrimary">
              <Email />
            </Link>
          </Grid>
        )}
      </Grid>
    </SocialMediaIconsGridContainer>
  );
};

const Bio = ({ children }) => {
  const data = useStaticQuery(graphql`
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
              email {
                emailId
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
  `);

  const avatarFluid = data?.avatar?.childImageSharp?.fluid;
  const {
    instagram,
    linkedin,
    github,
    email,
  } = data?.site?.siteMetadata?.author?.social;
  return (
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
            email={email?.emailId}
          />
        </ImgContainer>
      </Grid>
      <Grid item xs={12} md={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Bio;
