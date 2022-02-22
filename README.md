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