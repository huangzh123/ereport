"use strict";
// import axios from 'axios'

const tool = function (Vue) {
  return {
    //获取UUID
    getUuid() {
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";
      var uuid = s.join("");
      return uuid;
    },
    //获取滚动条距离
    getScrollTop() {
      var scrollPos;
      if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
      } else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollPos = document.body.scrollTop;
      }
      return scrollPos;
    },
    //弹出框
    alert(mag) {
      Vue.prototype.$alert(mag, '提示', {
        confirmButtonText: '确定'
      });
    },
    //确认框
    confirm(mag, cb, cancel) {
      Vue.prototype.$confirm(mag, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        cb();
      }).catch(() => {
        if (cancel) cancel();
      });
    },
    //提示框
    dialog(msg, type) {
      Vue.prototype.$message({
        message: msg,
        type: type
      });
    },
    //设置cookie
    setCookie: function (key, val, time) { //设置cookie方法
      var date = new Date(); //获取当前时间
      var expiresDays = time; //将date设置为n天以后的时间
      date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
      document.cookie = key + "=" + val + ";expires=" + date.toGMTString(); //设置cookie
    },
    //获取cookie
    getCookie: function (key) { //获取cookie方法
      /*获取cookie参数*/
      var getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
      var arrCookie = getCookie.split(";") //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
      var tips; //声明变量tips
      for (var i = 0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量
        var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
        if (key == arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
          tips = arr[1]; //将cookie的值赋给变量tips
          break; //终止for循环遍历
        }
      }
      return tips;
    },
    //删除cookie
    deleteCookie: function (key) { //删除cookie方法
      var date = new Date(); //获取当前时间
      date.setTime(date.getTime() - 10000); //将date设置为过去的时间
      document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
    },
    //图片上传
    uploadImg(url, success, fali, process) {
      var fd = new FormData(),
        xhr = new XMLHttpRequest(),
        input;
      input = document.createElement('input');
      input.setAttribute('enctype', 'multipart/form-data');
      input.setAttribute('id', 'myUploadInput');
      input.setAttribute('type', 'file');
      input.setAttribute('name', 'file');
      document.body.appendChild(input);
      input.style.display = 'none';
      input.click();
      input.onchange = function () {
        if (!input.value) {
          return;
        }
        //                    if(option.maxSize &&  input.files[0].size > option.maxSize * 1024 * 1024){
        //                        dialog({
        //                            title: '提示',
        //                            content: '请上传小于'+option.maxSize+'M的文件',
        //                            okValue: '确定',
        //                            ok: function () {}
        //                        }).showModal();
        //                        return;
        //                    }
        fd.append('uploadedFile', input.files[0]);
        let config = {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        // axios.post(url, fd, config)
        Vue.prototype.$api.post_navie(url, fd, config)
          .then(response => {
            if (response.successful === true) {
              success(response)
            }
          }, (error) => {
            alert("图片上传失败了！")
          })
      }
    },
    //获取URL参数
    getRequestparam() {
      var paramObject = {};
      var paramStr = window.location.search.substring(1);
      var params = paramStr.split('&');
      for (var i = 0; i < params.length; i++) {
        var pair = params[i].split('=');
        paramObject[pair[0]] = pair[1];
        paramObject[pair[0]] = decodeURI(paramObject[pair[0]])
      }
      return paramObject;
    },
    //获取时间差
    getDateDiffBefore(dateTimeStamp) {
      var result = "";
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime();
      var diffValue = now - dateTimeStamp;
      if (diffValue < 0) {
        //若日期不符则弹出窗口告之
        //alert("结束日期不能小于开始日期！");
        return "刚刚";
      }
      var monthC = diffValue / month;
      var weekC = diffValue / (7 * day);
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      if (dayC > 4) {
        // result = new Date(dateTimeStamp).Format("M月d日");
        result = new Date(dateTimeStamp).Format("yyyy/M/d");
      } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
      } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
      } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
      } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
      } else {
        result = "刚刚";
      }
      return result;
    },
    //时间格式化
    Format(date, fmt) {
      if (!date || !date.length || date.length < 4) return date;
      if (typeof date === "string") date = new Date(date);
      return date.Format(fmt);
    },
    cloneObj(obj) {
      var str, newobj = obj.constructor === Array ? [] : {};
      if (typeof obj !== 'object') {
        return;
      } else if (window.JSON) {
        str = JSON.stringify(obj), //系列化对象
          newobj = JSON.parse(str); //还原
      } else {
        for (var i in obj) {
          newobj[i] = typeof obj[i] === 'object' ?
            this.cloneObj(obj[i]) : obj[i];
        }
      }
      return newobj;
    },
    //获取类别
    getType(obj) {
      var class2type = {};
      ["Null", "Undefined", "Number", "Boolean", "String", "Object", "Function", "Array", "RegExp", "Date"].forEach(function (item) {
        class2type["[object " + item + "]"] = item.toLowerCase();
      })
      return class2type[Object.prototype.toString.call(obj)] || "object";
    },
    //深度复制对象
    copy(data,deep) {
      let obj;
      let valueType = this.getType(data);　　
      if (valueType === "array" && deep) {
        obj = [];
        for (let i = 0; i < data.length; i++) obj[i] = this.copy(data[i],deep);
      } else if(valueType === "object" && deep) {
        obj = {};
        for (let key in data) obj[key] = this.copy(data[key],deep);
      }else{
        obj = data;
      }
      return obj;
    },
    //深度复制对象,拷贝conf_charts对象专用
    copy_echarts(data,deep) {
      let obj;
      let valueType = this.getType(data);
      if (valueType === "array" && deep) {
        obj = [];
        for (let i = 0; i < data.length; i++) obj[i] = this.copy_echarts(data[i],deep);
      } else if(valueType === "object" && deep) {
        obj = {};
        for (let key in data){
          if(key === 'contents'){
            obj[key] = this.copy_echarts(data[key],true);
          }else{
            obj[key] = this.copy_echarts(data[key],deep);
          }
        }
      }else{
        obj = data;
      }
      return obj;
    },
    extentPro() {
      var t = [];
      if (t = arguments, !(t.length < 2)) {
        for (var e = o(t[0]), n = 1; n < t.length; n++)
          for (var i in t[n]) void 0 !== e[i] && "null" != typeof e[i] && (e[i] = o(t[n][i]));
        return e
      }
    },
    saveUserInfo(userName, head) {
      let str = userName + ",," + head;
      str = encodeURIComponent(str);
      this.setCookie("user", str);
    },
    gotoLoginpage() {
      // window.location.href=Vue.prototype.CONFIG.SINGLELOGIN + window.location.origin; //未登录，跳到单点登录页面
      window.location.href = "http://172.22.203.65:10000";
    }
  }
};



/**
 * 日期格式化
 * @param fmt
 * @returns {*}
 * @constructor
 */
Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds(), //毫秒
    "x": this.getHours() < 12 ? "上午" : "下午"
  };

  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};


export default {
  install(Vue, options) {
    Vue.prototype.$tool = tool(Vue);
  },
  tool: tool()
}
