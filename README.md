# yii-template

> 基于nodejs开发的前端项目模板，依赖nodejs开发环境，为自定义组件、技术研究、二次开发以及代码讲解开发的项目母版，其他各项目都对此进行fork

## 编译过程

``` bash
# 安装依赖
npm install

# 启动热加载服务，访问地址http://localhost:8080, 默认会调用档目录下的main.js
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

## 静态资源
``` html
# 与vue文件放在一起，直接引用
<img src="1.jpg"></img>

# 放在static目录下，所有模块公用,但只会以相对地址解析，不能解析别名，暂不支持
<!-- 不推荐使用 -->
<img src="images/desert.jpg"></img>

# 相对地址，指相对于当前vue文件的地址，并生成转换后的绝对地址
<!-- 将会转换为绝对地址 -->
<img src="1.jpg"></img>

# 绝对地址，将不会做任何替换操作，直接嵌入到页面中
<!-- 不会发生变化，目标代码与当前代码一模一样 -->
<img src="/1.jpg"></img>
```

## 别名与引用的组件
``` javascript
# 别名，可精确到文件地址，并能支持带后缀的键值
/*在build/webpack.base.conf.js文件中定义*/
 resolve: {
	alias: {
		"bootstrap.css" : projectRoot + '/node_modules/bootstrap/dist/css/bootstrap.css'
	}
 }
# 引用的组件时，尽可能带上后缀，能大量减少编译错误
import App from './App.vue'
```

##Eslint,默认启用,要求较为严格，可关闭
``` javascript
/*在build/webpack.base.conf.js文件中定义，注释下面这段代码即可关闭*/
 preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/, /docs/]
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/, /docs/]
      }
    ],
```

## 文档与组件
``` javascript
# 文档放置在docs文件夹下，承担了两部分的任务，一方面担任DEMO演示，一方面担任使用说明
  entry: {
    app: './docs/main.js'
  }

# 组件放置在src文件夹下，一般用于技术研究与自定义组件
  /*只需要单独发布组件时，需要将app指向为src目录，如下*/
  entry: {
    app: './src/main.js'
  }
#
```

## 文档语法高亮
``` html
# 用法1
<script type="text/syntaxhighlighter" class="brush: js">
<![CDATA[
function foo() {
  if (counter <= 10)
      return;
  // it works!
}
]]>
</script>

# 用法2
<pre class="brush: js">
function foo() {
}
</pre>

# 用法3
<pre class="brush: css;">
   h1.container {
	height : 100px;
	font-size : 12px;
    }
</pre>

# 用法4
<pre class="brush: sass;">
   h1.container {
	height : 100px;
	font-size : 12px;
    }
</pre>

# 用法5
<pre class="brush: xml;">
  <form id="mainform" onsubmit="return false">
      <label for="input-number">Temperature</label>
      <input name="input-number" id="input-number" type="number" step="any">
  </form>
</pre>
```

## 生产模式
> 生产模式下会把所有的文件都打包到dist目录下，包括CSS、JS以及应用的相关图片，生成应用的绝对地址都会指向根目录，可通过webpack进行修改。

## 浏览器支持
1.Chrome 21+
2.Opera 12.1+
3.Firefox 22+
4.Safari 6.1+
5.IE 10+

## 最小分辨率支持 1024 * 768

##使用的相关技术
1.[Webpack](http://vuejs-templates.github.io/webpack/)
2.[vue-loader](http://vuejs.github.io/vue-loader)
3.[vue](http://cn.vuejs.org/)
4.[syntaxhighlighter](https://github.com/syntaxhighlighter/syntaxhighlighter)
5.[bootstrap](http://getbootstrap.com/)



