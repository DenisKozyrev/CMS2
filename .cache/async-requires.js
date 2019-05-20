// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/Users/deniskozyrev/Dev/DashBouquet/CMS2/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/deniskozyrev/Dev/DashBouquet/CMS2/.cache/data.json")

