import React from "react";
import * as PropTypes from "prop-types";

const BlogPost = ({ pageContext }) => {
  const { title, html } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default BlogPost;

BlogPost.propTypes = {
  pageContext: PropTypes.shape().isRequired
};
