import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
    <Grid container alignItems="center">
      <Grid item xs={5}>
        <Link href="/">
          <Typography variant="h1">{site.siteMetadata.title}</Typography>
        </Link>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={2} style={{ textAlign: "center" }}>
        <Link href="/about">
          <Typography variant="h4">About</Typography>
        </Link>
      </Grid>
      <Grid item xs={2} style={{ textAlign: "center" }}>
        <Link href="/blog">
          <Typography variant="h4">Blog</Typography>
        </Link>
      </Grid>
      <Grid item xs={2} style={{ textAlign: "center" }}>
        <Link href="/projects">
          <Typography variant="h4">Projects</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default MainNav;
