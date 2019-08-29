# vue2.0实现微商城 wemall
vue全家桶 vue2.0+vuex+axios+better-scroll还有就是miut-ui组件库

## 根据 https://github.com/Mynameisfwk/vivo-shop 修改而来

# 技术栈
> [vue-router](https://router.vuejs.org/zh-cn/) 是官方提供的路由器，使用vue.js构建单页面应用程序变得轻而易举。

> [vuex](https://vuex.vuejs.org/zh-cn/) 是一个专为 vue.js 应用程序开发的状态管理模式，简单来说Vuex就是管理数据的。

> [Mint UI](http://mint-ui.github.io/#!/zh-cn) 由饿了么前端团队推出的 Mint UI 是一个基于 vue.js 的移动端组件库。

> [better-scroll](http://ustbhuangyi.github.io/better-scroll/doc/options.html)：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅

> [axios](https://www.npmjs.com/package/axios)：用来请求后端api数据

> [vue-quill-editor](https://www.npmjs.com/package/vue-quill-editor): 富文本编辑

> [tinymce-vue](https://github.com/tinymce/tinymce-vue): 文本编辑

## 实现功能
商品详情、文章详情、订单详情、订单提交、分类管理、商品搜索、商品/文章收藏、购物车功能(增、删、单全选)、积分动态获取、订单管理、收货地址管理、localstorage储存等功能


## 项目运行
```
# 安装项目依赖
npm install

# 启动服务 访问http://localhost:12001
npm run dev

# 编译打包
npm run build

# 后台运行
nohup npm run dev >/dev/null 2>&1 &
