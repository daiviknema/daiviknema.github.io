import React from "react";
import AppLayout from "../layouts/app-layout/app-layout";
import Grid from "@material-ui/core/Grid";
import { graphql } from "gatsby";
import { Divider, Typography, withStyles } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";
import moment from "moment";

const StyledLink = withStyles({
  root: {
    fontWeight: "bold",
  },
  underlineHover: {
    fontSize: "bold",
  },
})(Link);

const BlogList = ({ posts, numPostsPerIndexPage }) => {
  return (
    <Grid container>
      {posts.map((post, idx) => {
        const { title, date } = post?.frontmatter;
        const excerpt = post?.frontmatter?.excerpt || post?.excerpt;
        const href = post?.slug;
        return (
          <Grid item xs={12}>
            <StyledLink href={href}>
              <Typography variant="h4">{title}</Typography>
            </StyledLink>
            <Typography variant="caption">
              {moment(date).format("LL")}
            </Typography>
            <Typography variant="body1">{excerpt}</Typography>
            {idx !== Math.min(posts.length - 1, numPostsPerIndexPage - 1) && (
              <Divider />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

const Pagination = ({ numIndexPages, currentPage }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div>Pagination!</div>
      </Grid>
    </Grid>
  );
};

const BlogPostIndex = ({ location, data, pageContext }) => {
  const posts = data?.allMdx?.nodes;
  const { numIndexPages, currentPage, numPostsPerIndexPage } = pageContext;
  return (
    <AppLayout location={location}>
      <BlogList posts={posts} numPostsPerIndexPage={numPostsPerIndexPage} />
      <Pagination numIndexPages={numIndexPages} currentPage={currentPage} />
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
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date
          title
          excerpt
        }
        slug
        id
        excerpt(pruneLength: 200)
      }
    }
  }
`;
