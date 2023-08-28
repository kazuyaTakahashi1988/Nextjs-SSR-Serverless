// sitemap.config.js
module.exports = {
    siteUrl: 'https://cp8txf9bc3.execute-api.ap-northeast-1.amazonaws.com', // デプロイのホスト
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://cp8txf9bc3.execute-api.ap-northeast-1.amazonaws.com/server-sitemap.xml',
      ],
    }
    // outDir: './out',
};