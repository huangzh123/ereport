

//深度复制对象
const deepCopy = function (obj){
  if(typeof obj !== 'object' || obj.length) return obj;
  var newobj = {};
  for ( var attr in obj) newobj[attr] = deepCopy(obj[attr]);
  return newobj;
}

//获取随机字符串UUID
const getUuid = function(){
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  // s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  return uuid;
}


/**
 * 实现 $.entend 的功能的函数
 * @returns {*}
 */
const extent = function () {
  var self = this;
  var args = [];
  args = arguments;
  if (args.length < 2) return;
  var temp = deepCopy(args[0]); //调用复制对象方法
  for (var n = 1; n < args.length; n++) {
    for (var i in args[n]) {
      temp[i] = deepCopy(args[n][i]);
    }
  }
  return temp;
}



//只有前者存在方可被覆盖
const extentPro = function () {
  var self = this;
  var args = [];
  args = arguments;
  if (args.length < 2) return;
  var temp = deepCopy(args[0]); //调用复制对象方法
  for (var n = 1; n < args.length; n++) {
    for (var i in args[n]) {
      // if(typeof (temp[i]) !== 'undefined' && typeof (temp[i]) !== 'null' && args[n][i]) temp[i] = deepCopy(args[n][i]);
      if(typeof (temp[i]) !== 'undefined' && typeof (temp[i]) !== 'null') temp[i] = deepCopy(args[n][i]);
    }
  }
  return temp;
}

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

const format = function(date,fmt){
  return new Date(date).Format(fmt);
}

const tool  = {
  deepCopy,
  getUuid,
  extent,
  extentPro,
  format
}

export default tool;
