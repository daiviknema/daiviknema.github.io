import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import "katex/dist/katex.min.css";
import "katex/dist/katex";
const shortcodes = { Link }; // Provide common components here

export default function BlogPostTemplate({ data }) {
  console.log(data);
  const { body, frontmatter } = data.mdx;
  return (
    <div>
      <h1>{frontmatter.title || "You didn't add a title, asshole!"}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      slug
      body
      frontmatter {
        title
      }
    }
  }
`;
