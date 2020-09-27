import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import AppLayout from "../layouts/app-layout";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./styles/index.module.css";
import { Typography } from "@material-ui/core";

const App = ({ data, location }) => {
  console.log(data);
  const avatar = data?.avatar?.childImageSharp?.fixed;
  return (
    <AppLayout>
      <Container className={styles.container} style={{ textAlign: "center" }}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={4}>
            <Container className={styles.imgContainer}>
              <Img
                fixed={avatar}
                alt="Profile image here"
                imgStyle={{ objectFit: "contain" }}
              />
            </Container>
          </Grid>

          <Grid item xs={8}>
            <Container className={styles.textContainer}>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
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
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic-autocrop.png/" }) {
      childImageSharp {
        fixed(width: 230, height: 340) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
