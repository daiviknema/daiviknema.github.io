import React from "react";
import AppLayout from "../layouts/app-layout/app-layout";
import UnderConstruction from "../components/under-construction/under-construction";
import { graphql } from "gatsby";
import { Typography } from "@material-ui/core";

const BlogPostIndex = ({ location }) => {
  return (
    <AppLayout location={location}>
      <Typography>Making an awesome pagination!!</Typography>
    </AppLayout>
  );
};

export default BlogPostIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
