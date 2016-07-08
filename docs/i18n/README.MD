项目的国际化支持
===============
国际化不仅能显著提高产品的区域适应性，还能够担负起维护字符串常量的重任，减少后期维护的工作量，如统一将“新增”按钮改为“添加”按钮，有国际化文件的话，只需要修改一处，既方便又快捷。
## 1.添加国际化文件
> 在docs/i18n中添加国际化文件,按时区依次进行注册，如下：
``` javascript
export default {
    zh_CN : {
        title       :  '应用基础框架',
        collapse    :  '收起菜单'
    },
    en_US : {
        title       : 'Base Framework',
        collapse    : 'collapse {msg}'
    }
}
```
## 2.注册国际化文件
> 打开docs/i18n/locales.js文件，引用刚刚创建的国际化文件，并按时区依次添加，如下：
``` javascript
export default {
    zh_CN : {
        app : app.zh_CN
    },
    en_US : {
        app : app.en_US
    }
}
```
## 3.使用国际化
3.1 直接在页面中使用
``` html
<p>{{{ $t('app.title') }}}</p>
<p>{{ $t('app.collapse', { msg: "菜单"}) }}</p>
```
3.2 在js文件中使用
``` javascript
//将会得到与页面中同样的字符串
let title = Vue.t('app.title')
let collapse = Vue.t('app.collapse', {msg: "菜单"})
let collapse = this.$t('app.collapse', {msg: "菜单"})
```

## 参考文档
>1. [vue-i18n](https://github.com/kazupon/vue-i18n)