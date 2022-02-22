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

1