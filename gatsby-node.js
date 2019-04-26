const path = require("path")


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const BlogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    if(result.data && result.data.allMarkdownRemark.edges.length) {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: BlogPostTemplate,
        context: {
          title: node.frontmatter.title,
          html: node.html
        }, 
      })
      })
    }
  })
}