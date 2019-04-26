import React from "react";

const BlogCategory = ({ pageContext }) => {

  const { category, title, html } = pageContext;

  return (
    <>
      <header>
        <h2>{title}</h2>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }}/>

    </>
  );
};

export default BlogCategory;