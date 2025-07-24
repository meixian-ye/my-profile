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