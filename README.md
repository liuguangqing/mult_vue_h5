# liugq_h5 vue-cli 多目录项目配置

# [项目配置教程地址](http://www.xiangjv.top/indexDetail/121)

* vue-cli 多目录项目配置
* 一套代码支持多个项目的解决方案

``` bash
## 下拉本地 运行
npm install

## 运行增加的目录  localhost:8080

npm run dev phead
or
npm run dev phead2

## 打包线上环境
npm run build phead
or
npm run build phead2

```

## 目录结构

``` bash

    ├── build
    │   ├── devServer.js            // cmd运行文件
    │   ├── base.conf.js            // 开发环境
    │   ├── prod.conf.js            // 线上环境
    │   └── build.js                // 打包入口文件
    ├── config                  // 配置文件
    │   ├── index.js                // 配置打包
    ├── dist                    // 打包好的资源
    ├── src                     // 入口
    │   ├── common              // 公共组件
    │   ├── projects1               // 项目入口文件
    │   ├── projects2               // 公共资源文件
    │   │   ├──assets                   // 插件文件
    │   │   ├──components               // 组件
    │   │   ├──page                     // 页面
    │   │   ├──store                    // vuex
    │   │   ├──router                   // 路由
    │   │   ├──App.vue                  // 入口
    │   │   ├──index.html               // html文件
    │   │   └──main.js                  // main配置
    │   ├── ...               
    ├── static                  // 静态文件
    ├── package.json            // webpack

```