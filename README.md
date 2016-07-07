# yii-template

> 基于nodejs开发的前端项目模板，依赖nodejs开发环境，为自定义组件、技术研究、二次开发以及代码讲解开发的项目母版，其他各项目都对此进行fork

## 编译过程

``` bash
# 安装依赖
npm install

# 启动热加载服务，访问地址http://localhost:8080
npm run dev

# 在生产模式下构建项目，内容包括代码校验、压缩以及混淆，
npm run build

# 运行单元测试
npm run unit

# 运行e2e测试
npm run e2e

# 运行所有的测试
npm test
```

## 对CSS、SASS的支持
``` html
# 外部样式的引用，在vue文件中直接输入
<style src="../node_modules/bootstrap/dist/css/bootstrap.css"></style>

# 对SASS的支持，在vue文件直接引用
<style lang="sass">
  /* write sass here */
</style>

# 在JS中直接引入CSS文件,暂不支持
import "../node_modules/bootstrap/dist/css/bootstrap.css"//错误

```

##关于别名与文件名的引用
``` javascript
# 别名，可精确到文件地址，并能支持带后缀的键值
 resolve: {
	alias: {
		"bootstrap.css" : projectRoot + '/node_modules/bootstrap/dist/css/bootstrap.css'
	}
 }
# 文件名引用，尽可能带上后缀，能大量减少编译错误
import App from './App.vue'
  
```


##使用的相关技术
<ol>
<li>Webpack:http://vuejs-templates.github.io/webpack/</li>
<li>vue-loader:http://vuejs.github.io/vue-loader</li>
</ol>


