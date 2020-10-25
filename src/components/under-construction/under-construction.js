import React from "react";
import { Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/styles/useTheme";
import styled from "styled-components";

const UnderConstructionContainer = styled.div`
  padding: 1rem 0.2rem;
`;

const UnderConstruction = () => {
  const data = useStaticQuery(graphql`
    query {
      xkcd: file(absolutePath: { regex: "/under-construction-xkcd.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  const theme = useTheme();
  const isXsToSmScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <UnderConstructionContainer>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">
            {isXsToSmScreen ? `Whoops!` : `Whoops! Looks like I've been lazy`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            I haven't gotten 'round to building this part of the website yet.
            {isXsToSmScreen
              ? ` My apologies, please check back in later.`
              : ` My apologies, please enjoy this xkcd comic for now and check back in later!`}
          </Typography>
        </Grid>
        {!isXsToSmScreen && (
          <Grid item xs={12}>
            <Img
              fluid={data?.xkcd?.childImageSharp?.fluid}
              imgStyle={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            />
          </Grid>
        )}
      </Grid>
    </UnderConstructionContainer>
  );
};

export default UnderConstruction;
