import React from "react";

const Blog= ({ pageContext }) => {

  const { title, date, html } = pageContext;

  return (
    <>
      <header>
        <h1>{title}</h1>
        <h2>{date}</h2>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }}/>

    </>
  );
};

export default Blog;
