// sitemap.config.js
module.exports = {
    siteUrl: 'https://sbyrszdfn8.execute-api.ap-northeast-1.amazonaws.com', // デプロイのホスト
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/sitemap.xml'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://sbyrszdfn8.execute-api.ap-northeast-1.amazonaws.com/sitemap.xml',
      ],
    }
    // outDir: './out',
};