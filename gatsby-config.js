module.exports = {
  siteMetadata: {
    title: "Dashbouquet",
    siteUrl: "https://www.dashbouquet.com",
    description: "",
    keywords: "",
    contacts: {
      email: {
        url: "mailto:contact@dashbouquet.com",
        label: "contact@dashbouquet.com"
      },
      addresses: [
        "Estonia, Tallinn city, \nHarju county, 10117, Narva mnt 7-35",
        "Republic of Belarus, \nMinsk, 34a Vera Kharuzhaya"
      ],
      phones: [
        {
          url: "tel:+1 484 423 4474",
          label: "+1  484  423  4474"
        },
        {
          url: "tel:+375 29 755 18 21",
          label: "+375  29  755  18  21"
        }
      ],
      socialLinks: [
        {
          icon: "Facebook",
          url: "https://www.facebook.com/dashbouquet/"
        },
        {
          icon: "Linkedin",
          url: "https://www.linkedin.com/company/dash-bouquet/"
        },
        {
          icon: "Twitter",
          url: "https://twitter.com/dash_bouquet"
        },
        {
          icon: "Reddit",
          url: "https://www.reddit.com/user/behindthedash"
        }
      ]
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/markdown`,
        ignore: [`**/.*`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:400,700,900&subset=latin,latin-ext"]
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms"
  ]
};
