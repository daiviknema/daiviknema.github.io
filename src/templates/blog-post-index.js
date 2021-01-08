import React from "react";
import AppLayout from "../layouts/app-layout/app-layout";
import Grid from "@material-ui/core/Grid";
import { graphql } from "gatsby";
import { Divider, Typography, withStyles } from "@material-ui/core";
import moment from "moment";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";

const BlogList = ({ posts, numPostsPerIndexPage }) => {
  const theme = useTheme();

  const Excerpt = styled.div`
    padding-bottom: 5px;
  `;

  const StyledDivider = withStyles({
    root: {
      marginBottom: '5px'
    }
  })(Divider);

  return (
    <Grid container>
      {posts.map((post, idx) => {
        const { title, date } = post?.frontmatter;
        const excerpt = post?.frontmatter?.excerpt || post?.excerpt;
        const href = `/blog/${post?.slug}`;
        return (
          <Grid item xs={12}>
            <AniLink
              style={{
                textDecoration: "none",
                color: theme.palette.primary.main,
              }}
              underline="none"
              paintDrip
              to={href}
              hex={theme.palette.text.primary}
            >
              <Typography variant="h4">{title}</Typography>
            </AniLink>
            <Typography variant="caption">
              {moment(date).format("LL")}
            </Typography>
            <Excerpt>
              <Typography variant="body1">{excerpt}</Typography>
            </Excerpt>
            {idx !== Math.min(posts.length - 1, numPostsPerIndexPage - 1) && (
              <StyledDivider />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

const Pagination = ({ numIndexPages, currentPage }) => {
  const theme = useTheme();

  const nextPage = currentPage !== numIndexPages && currentPage + 1;
  const prevPage = currentPage !== 1 && currentPage - 1;

  const nextPageHref =
    (nextPage && `/blog/${nextPage}`) || `/blog/${currentPage}`;
  const prevPageHref =
    (prevPage && `/blog/${prevPage}`) || `/blog/${currentPage}`;
  return (
    <Grid container>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <AniLink
          style={{ textDecoration: "none", color: theme.palette.text.primary }}
          underline="none"
          paintDrip
          to={prevPageHref}
          hex={theme.palette.text.primary}
        >
          {"<< Prev"}
        </AniLink>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <AniLink
          style={{ textDecoration: "none", color: theme.palette.text.primary }}
          underline="none"
          paintDrip
          to={nextPageHref}
          hex={theme.palette.text.primary}
        >
          {"Next >>"}
        </AniLink>
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
