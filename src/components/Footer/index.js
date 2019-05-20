// /* eslint-disable react/prop-types */
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import * as PropTypes from "prop-types";
import InnerFooter from "./Footer";

const Footer = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            contacts {
              email {
                url
                label
              }
              addresses
              phones {
                url
                label
              }
              socialLinks {
                icon
                url
              }
            }
          }
        }
        footerbg: file(relativePath: { eq: "images/footerbg.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              src
            }
          }
        }
      }
    `}
    render={data => <InnerFooter data={data}>{children}</InnerFooter>}
  />
);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
