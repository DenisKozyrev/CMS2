const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/deniskozyrev/Dev/DashBouquet/CMS2/src/templates/Blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/deniskozyrev/Dev/DashBouquet/CMS2/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/deniskozyrev/Dev/DashBouquet/CMS2/src/pages/index.js")))
}

