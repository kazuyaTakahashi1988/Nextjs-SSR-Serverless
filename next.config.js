/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    /* -------------------------------------------------------
      ▽ config情報 ▽
    ---------------------------------------------------------- */
    SITE_HOST: 'sbyrszdfn8.execute-api.ap-northeast-1.amazonaws.com', // デプロイのホスト
    SITE_NAME: 'デフォルトサイトネーム',
    DEFAULT_DES: 'デフォルトディスクリプション',
    DEFAULT_KEY: 'デフォルトキー',
    DEFAULT_THUM: '/ogp.jpg',
    WP_HOST: 'http://wp.empty-service.com', // API取得先
    NEXT_PUBLIC_GA_ID: 'G-SXX0CQZY00' // GAのトラッキングID (例:G-********-**)
  },
  typescript: {
    /* -------------------------------------------------------
      ▽ SSGを正常に完了するための型エラー許可 ▽
    ---------------------------------------------------------- */
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
