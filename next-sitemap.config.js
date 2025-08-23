//  /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://www.celitix.com",
//   generateRobotsTxt: true,
//   sitemapSize: 5000,
//   changefreq: "weekly",
//   priority: 0.9,
//   exclude: [],
//   alternateRefs: [],
// };
/** @type {import('next-sitemap').IConfig} */
// const { smskey, rcskey, whatsappkey } = require("./src/app/lib/cities.js");
module.exports = {
    siteUrl: "https://www.thamosastays.com",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ["/api/*"]
};