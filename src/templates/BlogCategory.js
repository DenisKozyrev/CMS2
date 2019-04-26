import React from "react";

const BlogCategory = ({ pageContext }) => {
  
  const { title, html } = pageContext;

  return (
    <>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </>
  );
};

export default BlogCategory;