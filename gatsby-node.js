/* eslint-disable consistent-return */
const path = require("path");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { allCreatePageQueries } = require("./src/gatsby/queries");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js");
  const BlogCategoryTemplate = path.resolve("./src/templates/BlogCategory.js");

  return graphql(allCreatePageQueries).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.blogCategories.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogCategoryTemplate,
        context: {
          title: node.frontmatter.title,
          html: node.html
        }
      });
    });

    result.data.blogPosts.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogPostTemplate,
        context: {
          title: node.frontmatter.title,
          html: node.html
        }
      });
    });
  });
};

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
