import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby-theme-material-ui";
import mainNavStyles from "./main-nav.module.css";

const MainNav = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Grid container alignItems="baseline">
      <Grid item xs={5}>
        <Link underline="none" href="/">
          <Typography color="textPrimary" variant="h1">
            {site.siteMetadata.title}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={1} className={mainNavStyles.navItem}>
        <Link underline="none" href="/about">
          <Typography  color="textPrimary" variant="h4">About</Typography>
        </Link>
      </Grid>
      <Grid item xs={1} className={mainNavStyles.navItem}>
        <Link underline="none" href="/blog">
          <Typography  color="textPrimary" variant="h4">Blog</Typography>
        </Link>
      </Grid>
      <Grid item xs={1} className={mainNavStyles.navItem}>
        <Link underline="none" href="/projects">
          <Typography  color="textPrimary" variant="h4">Projects</Typography>
        </Link>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default MainNav;
