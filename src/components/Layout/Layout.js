import React from "react";
import * as PropTypes from "prop-types";
import { Box } from "rebass";
import Helmet from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";

const InnerLayout = ({ children, data }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: data.site.siteMetadata.description
        },
        {
          name: "keywords",
          content: data.site.siteMetadata.keywords
        }
      ]}
    />
    <Header />
    <Box as="main">{children}</Box>
    <Footer />
  </>
);

InnerLayout.propTypes = {
  data: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired
};

export default InnerLayout;
