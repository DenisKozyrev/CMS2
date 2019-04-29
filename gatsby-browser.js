import React from "react";
import * as PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Layout from "./src/components/Layout";
import theme from "./src/utils/theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

wrapRootElement.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
  props: PropTypes.shape().isRequired
};
