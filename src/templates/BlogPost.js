import React from "react";

const BlogPost = ({ pageContext }) => {

  const { title, html } = pageContext;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </>
  );
};

export default BlogPost;
