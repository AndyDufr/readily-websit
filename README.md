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