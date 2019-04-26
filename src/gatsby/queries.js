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
            long_title
            description
            summary
            keywords
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
            long_title
            description
            summary
            keywords
          }
          html
        }
      }
    }
  }
`;

module.exports = { allCreatePageQueries };
