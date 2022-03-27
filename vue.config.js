/* eslint-disable */
// import path from 'path'
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'?"/readily-websit/":"/",
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    // config.module
    //   .rule('svg-sprite')
    //   .test(/\.(svg)(\?.*)?$/)
    //   .include.add(dir).end() // 包含 icons 目录
    //   .use('svg-sprite-loader').loader('svg-sprite-loader').options({
    //     extract: false
    //   }).end()
    // config.plugin('svg-sprite').use(
    //   require('svg-sprite-loader/plugin'), [{
    //     plainSprite: true
    //   }])
    // config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录

    config.module
      .rule('svg-sprite')
      .test(/\.(svg)(\?.*)?$/)
      .include.add(dir).end() // svg-sprite-loader 
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({
        extract: false
      }).end()
      .use('svgo-loader').loader('svgo-loader') // svgo(^2.2.1 注意版本) => svg优化用的loader(删除svg自带的fill颜色属性)，需要单独下载
      .tap(options => ({
        ...options,
        plugins: [{
          removeAttrs: {
            attrs: 'fill'
          }
        }]
      }))
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{
      plainSprite: true
    }])
    config.module.rule('svg').exclude.add(dir)
  }
}