const CONFIG = (function () {

  /* 静态配置 */
  const IP_PROP = "http://softcan.cndrealty.com:10000"; //正式库IP地址
  const IP_TEST = "http://114.55.37.10:8088"; //测试库IP地址
  const IP_LOCAL = "http://172.22.12.67:10001"; //本地代理地址

  const IP_APP_PROP = "http://softcan.cndrealty.com:10000/app";
  const IP_APP_TEST = "http://172.22.203.65:10000"; //测试库IP地址

  let ECHARTS = require('echarts');


  /* 动态配置 */
  let DEBUG = false; //是否是调试模式
  let IP = IP_TEST; //服务IP地址
  let IP_APP = IP_APP_PROP; //服务IP地址
  let APP_CODE = "jcgz";


  return {
    DEBUG,
    ECHARTS,
    OPTIONS_DATASET:[],
    IP,
    APP_CODE,
    IP_APP,
    REST: {
      dataSourceList: IP + "/rest/report/dataSourceList?appCode="+APP_CODE, //获取数据源
      connectDataSource: IP + "/rest/report/connectDataSource?appCode="+APP_CODE, //获取数据（执行SQL语句）
    },
  }
})()

export default {
  install(Vue, options) {
    Vue.prototype.CONFIG = CONFIG;
  },
  CONFIG
}
