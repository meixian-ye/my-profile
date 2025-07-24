### 1. 确保你有以下文件

```plaintext
你的项目/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── app/
├── public/
├── next.config.mjs
├── package.json
└── README.md
```

### 2. 创建 GitHub Actions 工作流
```
mkdir -p .github/workflows
```
内容：
```
name: Deploy Next.js to GitHub Pages

on:
  # 当推送到 main 分支时触发
  push:
    branches: [ main ]
  
  # 允许手动触发
  workflow_dispatch:

# 设置权限
permissions:
  contents: read
  pages: write
  id-token: write

# 确保同时只有一个部署在运行
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # 构建任务
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 检出代码
        uses: actions/checkout@v4
        
      - name: 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: 安装依赖
        run: npm ci
        
      - name: 构建项目
        run: npm run build
        env:
          GITHUB_PAGES: true
          
      - name: 上传构建产物
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  # 部署任务
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: 部署到 GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3.配置 Next.js
修改 next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
        output: 'export',
        trailingSlash: true,
        images: {
            unoptimized: true
        }
        // 不设置 basePath 和 assetPrefix
    }

export default nextConfig
```
fixpath（使用静态资源相对路径）
```javascript
const fs = require('fs');
const path = require('path');

function fixPaths(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // 递归处理子目录
            fixPaths(filePath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(filePath, 'utf8');

            // 修复各种资源路径
            content = content.replace(/src="\/_next\//g, 'src="./_next/');
            content = content.replace(/href="\/_next\//g, 'href="./_next/');
            content = content.replace(/src="\/images\//g, 'src="./images/');
            content = content.replace(/href="\/images\//g, 'href="./images/');
            content = content.replace(/url\(\/images\//g, 'url(./images/');

            // 修复其他可能的绝对路径
            content = content.replace(/src="\/(?!\/)/g, 'src="./');
            content = content.replace(/href="\/(?!\/)/g, 'href="./');

            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed paths in ${filePath}`);
        } else if (file.endsWith('.css')) {
            // 修复 CSS 文件中的路径
            let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(/url\(\/images\//g, 'url(../images/');
            content = content.replace(/url\(\/_next\//g, 'url(../_next/');
            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed CSS paths in ${filePath}`);
        }
    });
}

console.log('🔧 开始修复路径...');
fixPaths('./out');
console.log('✨ 路径修复完成！');
```

### 4. 生成out静态页面
项目根目录执行命令
```
npm install 
// 如果遇到错误则执行：
npm install --legacy-peer-deps
npm run build
```
生成文件内容
```
out/
├── _next/
│   ├── static/
│   └── ...
├── images/
├── index.html
├── 404.html
└── .nojekyll
```

### 5. 将out/index.html的路径修改为相对路径

