/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // 启用静态导出
  trailingSlash: true,        // URL 末尾添加斜杠
  images: {
    unoptimized: true         // 禁用图片优化（静态导出需要）
  },
  basePath: '/my-profile',      // 替换为你的实际仓库名
  assetPrefix: '/my-profile'    // 替换为你的实际仓库名
}

export default nextConfig
