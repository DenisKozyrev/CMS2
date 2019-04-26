import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import InnerLayout from "./Layout";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => <InnerLayout data={data}>{children}</InnerLayout>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
