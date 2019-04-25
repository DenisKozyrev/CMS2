// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/deniskozyrev/Dev/DashBouquet/CMS2/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/deniskozyrev/Dev/DashBouquet/CMS2/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-blog-js": () => import("/Users/deniskozyrev/Dev/DashBouquet/CMS2/src/templates/Blog.js" /* webpackChunkName: "component---src-templates-blog-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/deniskozyrev/Dev/DashBouquet/CMS2/.cache/data.json")

