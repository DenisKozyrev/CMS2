import React from "react";
import * as PropTypes from "prop-types";

const BlogCategory = ({ pageContext }) => {
  const { title, html } = pageContext;
  return (
    <div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default BlogCategory;

BlogCategory.propTypes = {
  pageContext: PropTypes.shape().isRequired
};
