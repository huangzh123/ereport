import axios from 'axios';

//qs用于序列化参数对象
const Qs = require('qs');
//axios当post请求是设置头类型
const CONTENT_TYPE={
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};
//服务端地址
let baseUrl='http//:172.22.203.65:8088'
//softcan默认应用
export const APP_CODE='szlm';

//获取报表列表
export const reportList = params => { return axios.get(`${baseUrl}/rest/report/reportList`, params).then(res => res.data); };
//根据id获取报表信息
export const getReportById = params => { return axios.get(`${baseUrl}/rest/report/getReportById`, params).then(res => res.data); };
//根据ParentId获取报表信息
export const getReportByParentId = params => { return axios.get(`${baseUrl}/rest/report/getReportByParentId`, params).then(res => res.data); };
//发布报表
export const releaseReport = params => { return axios.get(`${baseUrl}/rest/report/releaseReport`, params).then(res => res.data); };
//删除报表
export const delReport = params => { return axios.get(`${baseUrl}/rest/report/delReport`, params).then(res => res.data); };
//保存报表
export const saveReport = params => { return axios.get(`${baseUrl}/rest/report/saveReport`, params).then(res => res.data); };
//获取数据源
export const dataSourceList = params => { return axios.get(`${baseUrl}/rest/report/dataSourceList`, params).then(res => res.data); };
//获取数据源数据
export const connectDataSource = params => { return axios.post(`${baseUrl}/rest/report/connectDataSource`,Qs.stringify(params),{header:CONTENT_TYPE} ).then(res => res.data); };
