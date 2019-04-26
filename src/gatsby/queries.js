const allCreatePageQueries = `
  {
    blogCategories: allMarkdownRemark(
      filter: { 
        frontmatter: { 
          collection_name: { eq: "blog-categories" } 
        } 
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            long-title
            description
            summary
            keywords
            body
          }
          html
        }
      }
    }
    blogPosts: allMarkdownRemark(
      filter: {
        frontmatter: {
          collection_name: { eq: "posts" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            category
            title
            long-title
            description
            summary
            keywords
            body
          }
          html
        }
      }
    }
  }
`;

module.exports = { allCreatePageQueries };
