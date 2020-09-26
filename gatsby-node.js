const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: "blog/" });
    console.log(`Attaching slug ${slug} to node`);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
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
  result.data.allMdx.nodes.forEach(node => {
    console.log(`Node: ${JSON.stringify(node)}`);
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: node.id,
      },
    });
  });
};
