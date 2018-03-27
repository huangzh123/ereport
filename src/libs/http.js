
/**
 * 封装HTTP请求对象api
 */
require('es6-promise').polyfill();
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';


const api = function (Vue) {
  const instance = axios.create(
    {
    // baseURL: "",
    timeout: 20000,
    withCredentials: true,//是否带cookie、session
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      // "Content-Type": "application/json"
      // "Access-Control-Allow-Origin": "*"
    }
  }
);

/**
 * 登录过滤
 * @param {*} response 
 */
  function authFilter(response){
    let data = response.data;
    return Promise.resolve(data)
  }


  /**
   * 错误处理
   * @param {*} error 
   */
  function handleError(error) {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
    }
    // console.log(error.config);
    if(Vue.prototype.CONFIG.DEBUG) console.error(error)
    // Vue.prototype.$tool.gotoLoginpage();
    Message({
      showClose: true,
      message: '请求服务时发生错误了！',
      type: 'error'
    });
    return Promise.reject(error);
  }

  return {
    /**
     * post请求
     * @param {String} url 
     * @param {*} data 
     */
    post(url, data) {
      let formstr = ''; 
      for(let i in data){
        if(formstr !== '') formstr+='&';
        if(typeof data[i] === 'object' ) data[i] = JSON.stringify(data[i]);
        formstr+=i+'='+encodeURIComponent(data[i]);
      }
      return instance.post(url,formstr).then(authFilter).catch(handleError);
    },
       /**
     * post_navie请求（图片上传）
     * @param {String} url 
     * @param {*} data 
     */
    post_navie(url, data) {
      return instance.post(url,data).then(authFilter).catch(handleError);
    },
    /**
     * get请求
     * @param {String} url 
     */
    get(url) {
      return instance.get(url).then(authFilter).catch(handleError);
    }
  }
}


export default {
  install(Vue, options) {
    if(Vue)
    Vue.prototype.$api = api(Vue);
  },
  api:api()
}
