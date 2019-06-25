#背景
本组件是基于vue.js编写, 只兼容于vue脚手架搭建的项目, 由于本插件依赖于
```js
"file-saver": "^2.0.0",
"xlsx": "^0.14.0"
```
两个类库, 若项目中有其他版本依赖, 请确认是否会冲突

#### 使用方式
1. 执行命令添加依赖
npm install --save export-excel-eug

2. 在vue入口文件处全局使用该插件
```js
import UniSoftUI from 'unisoft-ui'
Vue.use(UniSoftUI)
```

3. api
* props: [
    'originData', // 需要export成excel的源数据
    'fileName' // export的文件名
  ]

* startExport  // 组件内部导出excel方法
* @buildDataSuccess // 导出数据就绪通知
