#!/usr/bin/env sh

# 当发生错误时终止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/AndyDufr/readily.git master:gh-pages

cd -