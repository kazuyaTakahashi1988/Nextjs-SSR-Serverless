/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    /* -------------------------------------------------------
      ▽ config情報 ▽
    ---------------------------------------------------------- */
    SITE_HOST: 'https://cp8txf9bc3.execute-api.ap-northeast-1.amazonaws.com', // デプロイのホスト
    SITE_NAME: 'デフォルトサイトネーム',
    DEFAULT_DES: 'デフォルトディスクリプション',
    DEFAULT_KEY: 'デフォルトキー',
    DEFAULT_THUM: '/ogp.jpg',
    WP_HOST: 'http://wp.empty-service.com', // API取得先
    NEXT_PUBLIC_GA_ID: 'UA-********-**' // GAのトラッキングID (例:UA-********-**)
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
