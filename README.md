# vue-cli-2.9.6
基于 vue-cli 2.9.6 优化功能

------

1. 增加基础功能： axios , vuex , element-ui , qs , nprogress , babel-polyfill , scss , js-cookie
2. 拆分部分公共组件 ， 使用cdn加速：
    > * vue
    > * vue-router
    > * vuex
    > * babel-polyfill
    > * axios
    > * element-ui

3. 目录结构
```

├─build 编译配置
├─config 基础配置
├─src 前端基础根目录
│  ├─assets 存放公共文件
│  │  ├─css 公共css
│  │  ├─font 字体 iconfont
│  │  │  └─iconfont
│  │  ├─img 图片
│  │  └─js 通用方法
│  ├─axios 处理请求
│  ├─components 公共vue组件
│  ├─router 前端router
│  ├─store 状态管理
│  │  └─modules 状态集合
│  └─views 页面
│      └─demo
└─static 静态资源

```



