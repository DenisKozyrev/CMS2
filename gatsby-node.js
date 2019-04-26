const path = require("path")


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const BlogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  const BlogCategoryTemplate = path.resolve(`src/templates/BlogPost.js`)
  
  return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {collection_name: {eq: "posts"}, category: {eq: "ai"}}}) {
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

    if(result.data && result.data.allMarkdownRemark.edges.length) {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const BlogCategoryTemplate = path.resolve(`src/templates/BlogPost.js`)
  
  return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {collection_name: {eq: "blog-categories"}}}) {
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

    if(result.data && result.data.allMarkdownRemark.edges.length) {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogCategoryTemplate,
        context: {
          title: node.frontmatter.title,
          html: node.html
        }, 
      })
      })
    }
  })
}