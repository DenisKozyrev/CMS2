module.exports = {
  siteMetadata: {
    title: "Dashbouquet",
    siteUrl: "https://www.dashbouquet.com",
    description: "",
    keywords: ""
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`
  ]
};
