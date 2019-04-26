import React from "react";

const BlogPost = ({ pageContext }) => {

  const { title, html } = pageContext;

  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }}/>

    </>
  );
};

export default BlogPost;
