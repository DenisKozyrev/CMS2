import React from "react"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  return data.allMarkdownRemark.edges.map((edge, i) => (
    <div key={i}>{edge.node.frontmatter.title}</div>
  ))
}


export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          date
        }
        html
      }
    }
  }
}
`

export default HomePage
