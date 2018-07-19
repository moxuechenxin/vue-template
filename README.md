# 技术栈
### CSS
sass

### JS
vue + vue-router + vuex

# npm scripts
命令 | 说明 | 可选参数
---|---|---
`dev` | 本地开发 | 
`build` | 编译打包 |
`proxy-server` | 以`dist/`作为根路径开启代理服务器 | 

# 目录结构
```bash
├── App.vue # 入口模块
├── assets  # 资源文件夹
│   ├── icons  # 图标（svg文件）
│   └── style  # 全局样式
│       ├── core
│       │   ├── _common.scss
│       │   ├── _layout.scss  # 布局类
│       │   ├── _reset.scss   # 默认样式重置
│       │   ├── _transition.scss # vue过渡样式
│       │   ├── _util.scss  # 工具类
│       │   └── index.scss  # core入口文件
│       │
│       ├── helpers
│       │   ├── _functions.scss
│       │   └── _mixins.scss
│       │
│       ├── variables
│       │    ├── _size.scss
│       │    ├── _theme.scss
│       │    └── index.scss
│       │
│       ├── index.scss
│       └── font.css 
│
├── components
│   ├── base   # 功能组件
│   └── common # 公用（业务）组件
│
├── extends  # Vue对象及其原型扩展
│
├── config   # 配置
│   └── interceptors # 拦截器
│
├── filters  # 过滤器
│
├── plugins  # 插件
│
├── routers  # 路由
│ 
├── service  # 后台服务
│
├── utils    # 工具函数／对象
│
├── views    # 视图(页面组件)
│
└── main.js  # 入口文件 
```



