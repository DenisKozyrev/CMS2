const path = require("path")


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const BlogTemplate = path.resolve(`src/templates/Blog.js`)
  
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
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

    if(result.data.allMarkdownRemark.edges.length) {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogTemplate,
        context: {
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          html: node.html
        }, 
      })
      })
    }
  })
}