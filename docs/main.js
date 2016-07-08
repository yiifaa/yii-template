import VueI18n from 'vue-i18n'
import locales from './i18n/locales.js'
import Vue from 'vue'
import App from './App.vue'

//使用国际化文件
let app = {

  /**
   * 初始化i18n
   */
  initI18n () {
    Vue.use(VueI18n)
    Vue.config.lang = 'zh_CN'
    Object.keys(locales).forEach(function (lang) {
      Vue.locale(lang, locales[lang])
    })
  },

  /**
   * 启动Vue主程序
   */
  initApp () {
    new Vue({
      el: 'body',
      components: {
        App
      }
    })
  },

  /**
   * 运行应用程序
   */
  run () {
    this.initI18n()
    this.initApp()
  }

}
app.run()





