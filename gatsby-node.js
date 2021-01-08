const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

/**
 * Gatsby calls this function when a new data node is created.
 * Recall that in the Gatsby world, data is anything that resides
 * outside a React component.
 *
 * @param { node, getNode, actions } param
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  // createNodeFields will be used later on to assign extra
  // fields/attributes to the node that is being created
  const { createNodeField } = actions;

  // Our blog posts are all Mdx nodes. We want to assign a
  // slug field for each of these nodes.
  if (node.internal.type === "Mdx") {
    // createFilePath is a utility function we will
    // use to generate the slug for the mdx node
    const slug = `blog${createFilePath({ node, getNode, basePath: "blog/" })}`;

    // Add the slug field/attribute to the node
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

/**
 * Method that is used to programmatically create pages from data
 *
 * @param { graphql, actions } param0
 */
exports.createPages = async ({ graphql, actions }) => {
  // This query fetches all the Mdx blog posts. We will use
  // the result of this query to create pages
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
          id
        }
      }
    }
  `);

  const { createPage } = actions;

  const allBlogPosts = result.data.allMdx.nodes;

  // Create a page for each mdx node. createPage requires:
  // 1. A slug (provided in the "path attribute")
  // 2. A template that will render the page (this template takes our mdx node as input to fill in the data)
  // 3. A context. This specifies the variables which will be available in the apge query of the template
  allBlogPosts.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: node.id,
      },
    });
  });

  const numPostsPerIndexPage = 3;
  const numIndexPages = Math.ceil(allBlogPosts.length / numPostsPerIndexPage);

  // Create a page for every batch of 6 mdx nodes (index pages)
  Array.from({ length: numIndexPages }).forEach((_, i) => {
    createPage({
      path: `blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-post-index.js"),
      context: {
        limit: numPostsPerIndexPage,
        skip: i * numPostsPerIndexPage,
        numIndexPages,
        currentPage: i + 1,
        numPostsPerIndexPage,
      },
    });
  });
};
