import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  return (
    <div>
      <SEO title="All posts" />
      <Bio />
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
