import React from "react";

const BlogTemplate = ({ pageContext }) => {

  const { title, date, html } = pageContext ? pageContext : {};

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

export default BlogTemplate;
