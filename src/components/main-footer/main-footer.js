import React from "react";
import { Link } from "gatsby-theme-material-ui";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/styles/useTheme";
import styled from "styled-components";

const StyledFooter = styled.footer`
  justify-content: center;
  line-height: 24px;
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const MainFooterForXsToSmScreen = ({ gatsbyLogo, githubLogo }) => {
  return (
    <StyledFooter>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption">
              Built with{" "}
              <Link target="_blank" href="https://www.gatsbyjs.com/">
                GatsbyJS
              </Link>{" "}
            </Typography>
            <div style={{ paddingLeft: "0.3em", paddingRight: "0.3em" }}>
              <Img fixed={gatsbyLogo} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption">
              {" "}
              Hosted on{" "}
              <Link target="_blank" href="https://pages.github.com/">
                Github Pages
              </Link>{" "}
            </Typography>
            <div style={{ paddingLeft: "0.3em", paddingRight: "0.3em" }}>
              <Img fixed={githubLogo} />
            </div>
          </div>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

const MainFooterForMdToLgScreen = ({ gatsbyLogo, githubLogo }) => {
  return (
    <StyledFooter>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption">
              Built with <Link href="https://www.gatsbyjs.com/">GatsbyJS</Link>{" "}
            </Typography>
            <div style={{ paddingLeft: "0.3em", paddingRight: "0.3em" }}>
              <Img fixed={gatsbyLogo} />
            </div>
            <Typography variant="caption">
              {" "}
              Hosted on{" "}
              <Link href="https://pages.github.com/">Github Pages</Link>{" "}
            </Typography>
            <div style={{ paddingLeft: "0.3em", paddingRight: "0.3em" }}>
              <Img fixed={githubLogo} />
            </div>
          </div>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

const MainFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      gatsbyLogo: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
        childImageSharp {
          fixed(height: 20, width: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubOctocat: file(
        absolutePath: { regex: "/GitHub-Mark-Light-32px.png/" }
      ) {
        childImageSharp {
          fixed(height: 20, width: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const gatsbyLogo = data?.gatsbyLogo?.childImageSharp?.fixed;
  const githubLogo = data?.githubOctocat?.childImageSharp?.fixed;

  const theme = useTheme();
  const isXsToSmScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  if (isXsToSmScreen)
    return (
      <MainFooterForXsToSmScreen
        gatsbyLogo={gatsbyLogo}
        githubLogo={githubLogo}
      />
    );

  return (
    <MainFooterForMdToLgScreen
      gatsbyLogo={gatsbyLogo}
      githubLogo={githubLogo}
    />
  );
};

export default MainFooter;
