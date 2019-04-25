import React from "react"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  return (
    <>
    {data.allMarkdownRemark.edges.length ? data.allMarkdownRemark.edges.map((edge, i) => (
      <div key={i}>{edge.node.frontmatter.title}</div>
    )) : <div>Hello</div>}
    </>
  )
}


export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
        html
      }
    }
  }
}
`

export default HomePage
