declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 解决 svg 引入报错


declare module '*.svg' {
  const content: string;
  export default content
}