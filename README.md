* JS 和 TS 在引入文件时， `@/` 就代表 src 文件夹
```javascript
    import xxx from './components/xxx.vue'
    // 相当于
    import xxx from '@/components/xxx.vue'
```
* css 中使用 @
 * 普通引入： `@import './assets/styles/test.scss'`
 * vue 配置好的： `import '~@/assets/style/test.scss'`

* router 里面的 component 可以写成一个匿名函数，返回一个 promise 对象，异步引入组件

* 很多页面里的功能最好的做法是单独封装一个课复用的组件，那里需要哪里用，而不是直接放在 APP 页面里，不想用这个功能的页面不引入就可以了，比如导航栏，404 页面就不需要.或者全局引入这个组件，谁用谁写标签：Vue.component('Nav',Nav)

* 如何解决 CSS 重复的问题  layout 组件和 slot 插槽

* 使用 svg symbol
    1. 安装 svg-sprite-loader@4.1.6
    2. 引入 svg 文件
    3. 配置 vue.config.ts
    4. 配置 shims-vue.d.ts
    5. 使用 svg 
    ```html
        <svg>
            <use xlink:href="#label" />
        </svg>
    ```
* 如何直接引入一个 svg 目录:使用 try catch 是因为单元测试时可能会遇到 bug
```javascript
    /*global  __WebpackModuleApi*/

    // __WebpackModuleApi.RequireContext 为require 的类型， TS要求必须加类型
    let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
        requireContext.keys().forEach(requireContext);
    try {
        importAll(require.context("../assets/icons", true, /\.svg$/));
    } catch (error) {
        console.log(error);
    }
```

* svg 在项目里很多地方都会用，所以最好的做法是封装一个 icon 组件

* 自动删除 svg 文件的 fill 属性: yarn add --dev svgo-loader@2.2.1

* 全平台的字体解决库： font.css ： zenozeng.github.io/font.css/

* scss 使用 placeholder
    * 定义： 
        ```javascript
            // xxx.scss 文件
            % xxx {
                &::after {
                    content:'';
                    display: block;
                    clear: both;
                }
            }
        ```
    * 使用：
        ```javascript
            // 引入 @import '~@/xxx/xxx/xxx.scss'
            .buttons {
                @extend %xxx;
            }
        ```

* model.ts 可能遇到的问题
* 如果你遇到：已经在 custom.d.ts 中定义了 RecordItem, 但RecordItem仍然标红，显示未定义你可以：
```javascript
/*在 eslintrc.js 中加一行配置：
  "globals": { "RecordItem": true }
保存后彻底关闭编辑器后，重新打开当前项目
如果还有类似的情况（如Tag），也可按照此方法解决
如果你遇到：*/
```
* 当前命令行编译报错，无法进行 git commit你可以：
```javascript
/*git commit --no-verify -m "commit信息" 跳过本次pre-commit验证
找到当前项目目录所在的 .git 文件夹，删除hooks文件夹，彻底删除这个限制*/
```

* 如何将一个 ts 声明的类型进行全局声明
* 将类型声明代码移至根目录( src 目录)下 cunstom.d.ts (名字不重要),不需要引入

* vue 的 deep 语法
* 当使用了一个通用组件，但是组件的 css 需要更改时，在外界无法影响组件内的样式，需要使用 deep
```javascript
    <Types class="x">
    ...
    <style>
        .x ::v-deep li {
            background: red;
        }
    </style>
```

* 03/20 遇到一个 bug，labels 页面新增的标签，切换回 money 页面不会自动更新页面
* 目前不清楚为什么 vue 没有调用更新，解决方法是在 money 页面重新挂载前，调用一下 this.$forceUpdate(),强制更新
* 补充：晚上解决了，我把从服务器获取数据写在了外面，实测写在 options 外面的代码只会执行一次，下一次执行只会在页面刷新的时候
```javascript
    import ....
    // 外面的代码  此处只会在挂载时执行一次，然后只会在页面刷新时执行
    @Component
    .... {
        created(){
            // 此处每次挂载都会执行，但是获取的数据只是页面在最近一次刷新时更新的数据
        }
    }
```

* 使用 Object.freeze() 包裹一个变量，使其变为真正的常量
```javascript
    const intervalList = Object.freeze([
        {text:'按天',value:'day'}
    ])
```

* H5 页面顶部固定：将页面一分为二
```css
    .view {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        width: 100%;
        height: 100%;
    }
    /*.header {

    }*/
    .main {
    overflow: auto;
    }
```

* 如何获得一个 ISO 8601
`new Date().toISOString()`
`Date.parse(new Date().toISOString())` 得到一串数字
`new Date(Date.parse(new Date().toISOString())).getHours()` 传回 new Date 得到当前时间
Day.js  轻量级处理时间库
```javascript
    dayjs() //调用 dayjs() 得到一个对时间封装的对象
        .startOf('month')
        .add(1, 'day') // 加一天
        .subtract(1,'year') // 减一年
        .isSame(dayjs().subtract(2,'day'),'day') // 和前天是同一天
        .set('year', 2022) // 设置年份为 2022
        .format('YYYY-MM-DD HH:mm:ss') // 输出的格式
```

* 声明一个类型，用于函数参数是什么类型就返回什么类型
```javascript
    export default function deepCope<T>(data:T):T {
    return JSON.parse(JSON.stringify(data));
    }
```

* 遇到 bug， statistics 页面的总计，总是以字符串拼接形式计算，原因很简单， numberPad 组件的
* Props() 没有为 vue 注明类型，血泪教训，一定要写 Props 括号里的类型呀


* 描述
项目名称： 随手记
项目描述： 随手记是一款极简的记账应用，也是一款基于 Vue2、VueRouter、TypeScript 的单页面应用，
由单人独立实现，期间遇到很多 webpack 和 TypeScript 方面的问题，解决过程记录在本人博客[链接]
源代码几乎完全用 TypeScript 实现，用到了装饰器语法

* 部署
1. 项目打包 yarn build
2. 使用 serve 测试打包后的项目 安装：`yarn global add serve` 运行：`serve -s dist`
3. 如果要部署在 github，首先要在 `vue.config.js` 中设置正确的 `publicPath`:
`publicPath: process.env.NODE_ENV === 'production'?"/仓库名/":"/"`
4. 创建脚本： 创建 deploy.sh 
```sh
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
git push -f <仓库地址> master:gh-pages

cd -
```