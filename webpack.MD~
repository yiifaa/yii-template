Webpack引入jquery及其插件的几种方法

## 直接引入[难以引入插件]
``` javascript
// 可以直接引入jquery,但没有全局的jQuery变量
import $ from 'jquery'
// 如果此时直接引入jquery 插件，则失败,如
import 'jquery-ui' // 错误，将会找不到jquery-ui注册的相关方法
```

## ProvidePlugin[难以引入插件]
	在webpack中添加插件ProvidePlugin
``` javascript
plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ]
//	$函数会自动添加到当前模块的上下文，无需显示声明
```
	问题是依旧没有全局的$函数，所以导入插件依旧会失败，并且如果有eslint这样的preLoads，调用语句也难以通过语法校验(因为没有声明$就直接使用)，仅这一点，对于我这样的代码处女座就难以接受。

## expose-loader[推荐使用]
	不需要任何其他的插件配合，只要将下面的代码添加到所有的loader之前
``` javascript
 {
	test: require.resolve('jquery'),
	loader: 'expose?jQuery!expose?$'
 }
```
	引用时改为如下方式
``` javascript
import $ from 'expose?$!jquery'
import 'jquery-ui' //插件可用	
```
	 imports-loader、script-loader同样可达到此效果，配置与功能都非常相似，在此不一一说明。

## 包装jquery[推荐使用]
	此方法只依赖于自己，完全不需要任何其他插件与加载器，创建jquery的包装对象jquery-vendor.js
``` javascript
import $ from 'jquery'
window.$ = $
window.jQuery = $
export default $
```
	以后引用jquery时指向jquery-vendor.js
``` javascript
import $ from '../assets/jquery-vendor.js'
import 'jquery-ui'
//	此时UI的方法全部可用，如果需要引用bootstrap，可参照此方法

```
	为了调用方便，可在webpack配置文件中创建jquery-vendor.js的别名
``` javascript

alias: {
	jquery        : 'src/assets/jquery-vendor.js' //	将其指向jquery-vendor.js所在位置
}	
```


