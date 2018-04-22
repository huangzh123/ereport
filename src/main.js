// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import HTTP from './libs/http.js'
import TOOL from './libs/tool.js'
import CONFIG from './libs/config.js'
import '@/assets/css/common.css';//公共css文件
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(HTTP)
Vue.use(CONFIG)
Vue.use(TOOL)

router.beforeEach((to,from,next) => {
  if(to.name === 'login'){
    Vue.prototype.$tool.deleteCookie('LOCAL_SERVER_D01_tgc');
    return next();
  } 
  let userInfo = Vue.prototype.$tool.getCookie('LOCAL_SERVER_D01_tgc');
    if(userInfo != 'd6460c44a311d002e18231d630aec'){
      next('/login');
    }else{
      next();
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 