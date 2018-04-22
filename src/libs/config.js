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
  // 预览端地址
  let PAGESHOW_IP = 'http://114.55.37.10:3080/monitor';
  // let PAGESHOW_IP = 'http://localhost:8081';
  let APP_CODE = "jcgz";


  return {
    DEBUG,
    ECHARTS,
    PAGESHOW_IP,
    OPTIONS_DATASET:[],
    IP,
    APP_CODE,
    IP_APP,
    REST: {
      uploadImg: IP + "/rest/report/upload", //上传图片
      //报表
      getChartDetail: IP + "/rest/report/getReportById?appCode="+APP_CODE, //获取单个报表详情
      getReportByParentId: IP + "/rest/report/getReportByParentId?appCode="+APP_CODE, //获取单个报表详情
      getChartList: IP + "/rest/report/reportList?appCode="+APP_CODE, //获取报表列表
      saveChart: IP + "/rest/report/saveReport?appCode="+APP_CODE, //保存报表
      editChart: IP + "/rest/report/editReport?appCode="+APP_CODE, //修改报表
      deleteChart: IP + "/rest/report/delReport?appCode="+APP_CODE, //根据模块ID删除报表
      deleteDrillDownByModuleId: IP + "/rest/report/deleteDrillDownByModuleId?appCode="+APP_CODE, //删除报表
      verifReportCode: IP + "/rest/report/verifReportCode?appCode="+APP_CODE, //验证报表编码重复性
      //报表分类
      getChartTypes: IP + "/rest/report/reportTypeList?appCode="+APP_CODE, //获取报表分类
      createChartTypes: IP + "/rest/report/saveReportType?appCode="+APP_CODE, //新增报表分类
      delReportType: IP + "/rest/report/delReportType?appCode="+APP_CODE, //删除报表分类
      editReportType: IP + "/rest/report/editReportType?appCode="+APP_CODE, //修改报表分类
      //数据源
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
