import template from './template'

let datas = [{
  "fromName": "北京",
  "toName": "上海",
  "coords": [
    [116.4551, 40.2539],
    [121.4648, 31.2891]
  ]
}, {
  "fromName": "北京",
  "toName": "广州",
  "coords": [
    [116.4551, 40.2539],
    [113.5107, 23.2196]
  ]
}, {
  "fromName": "北京",
  "toName": "大连",
  "coords": [
    [116.4551, 40.2539],
    [122.2229, 39.4409]
  ]
}, {
  "fromName": "北京",
  "toName": "南宁",
  "coords": [
    [116.4551, 40.2539],
    [108.479, 23.1152]
  ]
}, {
  "fromName": "北京",
  "toName": "南昌",
  "coords": [
    [116.4551, 40.2539],
    [116.0046, 28.6633]
  ]
}, {
  "fromName": "北京",
  "toName": "拉萨",
  "coords": [
    [116.4551, 40.2539],
    [91.1865, 30.1465]
  ]
}, {
  "fromName": "北京",
  "toName": "长春",
  "coords": [
    [116.4551, 40.2539],
    [125.8154, 44.2584]
  ]
}, {
  "fromName": "北京",
  "toName": "包头",
  "coords": [
    [116.4551, 40.2539],
    [110.3467, 41.4899]
  ]
}, {
  "fromName": "北京",
  "toName": "重庆",
  "coords": [
    [116.4551, 40.2539],
    [107.7539, 30.1904]
  ]
}, {
  "fromName": "北京",
  "toName": "常州",
  "coords": [
    [116.4551, 40.2539],
    [119.4543, 31.5582]
  ]
}];

let opt = {
  //   名称
  name: 'mapLines',
  //  Grid 配置
  grid: {
    "position-x": "0",
    "position-y": "0",
    "width": "30",
    "height": "12",
    "max-width": "60",
    "min-width": "1",
    "max-height": "100",
    "min-height": "1"
  },
  //  可配置项
  opts: [{
      groupName: '常规&通用',
      groupType: 'g1',
      members: [{
          title: '地理&区域',
          describe: '',
          remark: '',
          model: "contents.geo.map",
          component: 'webSelect',
          options: [{
              label: "世界",
              value: 'world'
            },
            {
              label: "中国",
              value: 'china'
            },
            {
              label: "中国2",
              value: 'china-contour'
            },
            // {
            //   label: "中国3",
            //   value: 'china-cities'
            // },
            {
              label: "福建",
              value: 'fujian'
            },
            {
              label: "北京",
              value: 'beijing'
            },
            {
              label: "天津",
              value: 'tianjin'
            },
            {
              label: "四川",
              value: 'sichuan'
            },
            {
              label: "山西",
              value: 'shanxi'
            },
            {
              label: "陕西",
              value: 'shanxi1'
            },
            {
              label: "上海",
              value: 'shanghai'
            },
            {
              label: "山东",
              value: 'shandong'
            },
            {
              label: "青海",
              value: 'qinghai'
            },
            {
              label: "安徽",
              value: 'anhui'
            },
            {
              label: "重庆",
              value: 'chongqing'
            },
            {
              label: "广东",
              value: 'guangdong'
            },
            {
              label: "广西",
              value: 'guangxi'
            },
            {
              label: "湖北",
              value: 'hubei'
            },
            {
              label: "湖南",
              value: 'hunan'
            },
            {
              label: "江西",
              value: 'jiangxi'
            },
            {
              label: "浙江",
              value: 'zhejiang'
            },
            {
              label: "吉林",
              value: 'jilin'
            },
            {
              label: "黑龙江",
              value: 'heilongjiang'
            },
            {
              label: "辽宁",
              value: 'liaoning'
            },
            {
              label: "甘肃",
              value: 'gansu'
            },
            {
              label: "河南",
              value: 'henan'
            },
            {
              label: "江苏",
              value: 'jinagsu'
            },
            {
              label: "河北",
              value: 'hebei'
            },
            {
              label: "贵州",
              value: 'guizhou'
            },
            {
              label: "宁夏",
              value: 'ningxia'
            },
            {
              label: "内蒙古",
              value: 'neimenggu'
            },
            {
              label: "云南",
              value: 'yunnna'
            },
            {
              label: "西藏",
              value: 'xizang'
            },
            {
              label: "新疆",
              value: 'xinjiang'
            },
            {
              label: "香港",
              value: 'xianggang'
            },
            {
              label: "澳门",
              value: 'aomen'
            },
            {
              label: "台湾",
              value: 'taiwan'
            },

          ]
        },
        {
          title: '水平位置',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.geo.layoutCenter[0]",
          component: 'webInputSlider'
        },
        {
          title: '垂直位置',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.geo.layoutCenter[1]",
          component: 'webInputSlider'
        },
        {
          title: '地图大小',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          max: 150,
          model: "contents.geo.layoutSize",
          component: 'webInputSlider'
        },
        {
          title: '缩放和平移',
          describe: '',
          remark: '',
          model: "contents.geo.roam",
          component: 'webInputRadio',
          options: [{
              label: "允许",
              value: true
            },
            {
              label: "禁止",
              value: false
            },
          ]
        },
        {
          title: '区域颜色',
          describe: '',
          remark: '',
          model: "contents.geo.itemStyle.areaColor",
          component: 'webInputColor'
        },
        {
          title: '边界颜色',
          describe: '',
          remark: '',
          model: "contents.geo.itemStyle.borderColor",
          component: 'webInputColor'
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        },
      ]
    },
    {
      groupName: '标题&副标题',
      groupType: 'g1',
      members: [{
          title: '标题', // 名称
          describe: '标题名称', // 描述
          remark: '10个字符', // 备注
          model: "contents.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '副标题', // 名称
          describe: '副标题名称', // 描述
          remark: '', // 备注
          model: "contents.title.subtext", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '超链接',
          describe: '主标题跳转的地址',
          remark: '',
          model: "contents.title.link", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '打开方式',
          describe: '标题点击后的超链接',
          remark: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval('contents.title.link');
          },
          model: "contents.title.target", //绑定的字段
          component: 'webInputRadio', //使用的web组件
          options: [{
              label: "当前窗口",
              value: 'self'
            },
            {
              label: "新的窗口",
              value: 'blank'
            },
          ]
        },
        {
          title: 'X轴位置',
          describe: '',
          remark: '',
          min: -1,
          format(val) {
            if (val === -1) return 'auto';
            return val + '%';
          },
          initformat(val) {
            if (val === 'auto') return -1;
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.title.left",
          component: 'webInputSlider'
        },
        {
          title: 'Y轴位置',
          describe: '',
          remark: '',
          min: -1,
          format(val) {
            if (val === -1) return 'auto';
            return val + '%';
          },
          initformat(val) {
            if (val === 'auto') return -1;
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.title.top",
          component: 'webInputSlider'
        },
        {
          title: '字体系列',
          describe: '',
          remark: '',
          model: "contents.title.textStyle.fontFamily",
          component: 'webSelect',
          options: [{
              label: '宋体',
              value: 'SimSun',
            },
            {
              label: '黑体',
              value: 'SimHei',
            },
            {
              label: '微软雅黑',
              value: 'Microsoft Yahei',
            },
            {
              label: '微软正黑体',
              value: 'Microsoft JhengHei',
            },
            {
              label: '楷体',
              value: 'KaiTi',
            },
            {
              label: '新宋体',
              value: 'NSimSun',
            },
            {
              label: '仿宋',
              value: 'FangSong',
            },
          ]
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.title.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.title.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '字体粗细',
          describe: '',
          remark: '',
          model: "contents.title.textStyle.fontWeight",
          component: 'webSelect',
          options: [{
              label: '细体',
              value: 'lighter',
            },
            {
              label: '正常',
              value: 'normal',
            },
            {
              label: '粗体',
              value: 'bold',
            },
            {
              label: '大粗体',
              value: 'bolder',
            },
          ]
        },
      ]
    },
    {
      groupName: '标签',
      groupType: 'g1',
      members: [{
          title: '标 签',
          describe: '',
          remark: '',
          model: "contents.geo.label.show",
          component: 'webInputRadio',
          options: [{
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            },
          ]
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.geo.label.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          model: "contents.geo.label.fontSize",
          component: 'webInputNum'
        },
      ]
    },
    {
      groupName: '路径&动画',
      groupType: 'g1',
      members: [{
          title: '路径颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].lineStyle.color",
          component: 'webInputColor'
        }, {
          title: '路径宽度',
          describe: '',
          remark: '',
          max: 10,
          model: "contents.series[0].lineStyle.width",
          component: 'webInputSlider'
        },
        {
          title: '弯曲程度',
          describe: '',
          remark: '',
          step: 0.1,
          max: 1,
          model: "contents.series[0].lineStyle.curveness",
          component: 'webInputSlider'
        }, {
          title: '轴线箭头',
          describe: '',
          remark: '',
          model: "contents.series[0].symbol",
          component: 'webSelect',
          options: [{
              label: '无',
              value: ['none', 'none'],
            }, {
              label: '终点箭头',
              value: ['none', 'arrow'],
            },
            {
              label: '起点箭头',
              value: ['arrow', 'none'],
            },
            {
              label: '双边箭头',
              value: ['arrow', 'arrow'],
            }
          ]
        },
        {
          title: '标记图形',
          describe: '',
          isShow() {
            return 0;
          },
          remark: '',
          model: "contents.series[0].effect.symbol",
          component: 'webSelect',
          options: [{
              label: '圆',
              value: 'circle',
            },
            {
              label: '矩形',
              value: 'rect',
            },
            {
              label: '圆边矩形',
              value: 'roundRect',
            },
            {
              label: '三角形',
              value: 'triangle',
            },
            {
              label: '菱形',
              value: 'diamond',
            },
            {
              label: '头钉',
              value: 'pin',
            },
            {
              label: '箭头',
              value: 'arrow',
            },
          ]
        },
        {
          title: '图形颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].effect.color",
          component: 'webInputColor'
        },
        {
          title: '图形尺寸',
          describe: '',
          remark: '',
          max: 30,
          model: "contents.series[0].effect.symbolSize",
          component: 'webInputSlider'
        },
        {
          title: '尾迹长度',
          describe: '',
          remark: '如果和‘路径宽度’一起设置的话，地图自适应时可能会出现残影',
          max: 1,
          step: 0.1,
          model: "contents.series[0].effect.trailLength",
          component: 'webInputSlider'
        },
        {
          title: '动画时长',
          describe: '',
          remark: '如果设置了固定速度（值不为0）,则改字段会无效',
          step: 0.1,
          max: 30,
          min: 0,
          model: "contents.series[0].effect.period",
          component: 'webInputSlider',
        },
        {
          title: '固定速度',
          describe: '',
          remark: '如果设置了该字段（值不为0）,则动画时长会无效',
          model: "contents.series[0].effect.constantSpeed",
          component: 'webInputSlider',
        },

      ]
    },
    {
      groupName: '激活&高亮',
      groupType: 'g1',
      members: [{
          title: '标 签',
          describe: '',
          remark: '',
          model: "contents.geo.emphasis.label.show",
          component: 'webInputRadio',
          options: [{
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            },
          ]
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.geo.emphasis.label.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          model: "contents.geo.emphasis.label.fontSize",
          component: 'webInputNum'
        },
        {
          title: '区域颜色',
          describe: '',
          remark: '',
          model: "contents.geo.emphasis.itemStyle.areaColor",
          component: 'webInputColor'
        },
        {
          title: '边界颜色',
          describe: '',
          remark: '',
          model: "contents.geo.emphasis.itemStyle.borderColor",
          component: 'webInputColor'
        },
      ]
    },
    {
      groupName: '提示框',
      groupType: 'g1',
      members: [{
          title: '提示框',
          describe: '',
          remark: '',
          model: "contents.tooltip.show",
          component: 'webInputRadio',
          options: [{
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            },
          ]
        },
        {
          title: '提示浮层',
          describe: '',
          remark: '',
          model: "contents.tooltip.showContent",
          component: 'webInputRadio',
          options: [{
            label: "是",
            value: true
          }, {
            label: "否",
            value: false
          }, ]
        },
        {
          title: '浮层常驻',
          describe: '',
          remark: '',
          model: "contents.tooltip.alwaysShowContent",
          component: 'webInputRadio',
          options: [{
            label: "是",
            value: true
          }, {
            label: "否",
            value: false
          }, ]
        },
        {
          title: '触发方式',
          describe: '',
          remark: '',
          model: "contents.tooltip.triggerOn",
          component: 'webSelect',
          options: [{
              label: "鼠标移动",
              value: 'mousemove'
            }, {
              label: "鼠标点击",
              value: 'click'
            },
            {
              label: "移动或点击",
              value: 'mousemove|click'
            },
          ]
        },
        {
          title: '格式化',
          describe: '',
          remark: '{a}, {b},{c}分别表示系列名，数据名，数据值',
          model: "contents.tooltip.formatter",
          component: 'webInputText',
        },
        {
          title: '浮层背景色',
          describe: '',
          remark: '',
          model: "contents.tooltip.backgroundColor",
          component: 'webInputColor'
        },
        {
          title: '浮层字大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.tooltip.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '浮层字颜色',
          describe: '',
          remark: '',
          model: "contents.tooltip.textStyle.color",
          component: 'webInputColor'
        },
      ]
    },
    {
      groupName: '图例',
      groupType: 'g1',
      members: [{
        title: '图 例',
        describe: '',
        remark: '',
        model: "contents.legend.show",
        component: 'webInputRadio',
        options: [{
            label: "显示",
            value: true
          },
          {
            label: "隐藏",
            value: false
          },
        ]
      }, ]
    },
    {
      groupName: '数据&请求',
      groupType: 'g2',
      members: [{
          title: '获取方式',
          describe: '',
          remark: '',
          model: "others.datasways",
          component: 'webInputRadio',
          options: [{
              label: "静态数据",
              value: 1
            },
            {
              label: "REST请求",
              value: 2
            },
            {
              label: "平台数据",
              value: 3
            },
          ]
        },
        {
          title: 'URL地址',
          describe: '请输入URL地址',
          remark: '',
          isShow(opt) {
            let others = opt.others;
            return eval('others.datasways === 2')
          },
          model: "others.datasurl",
          component: 'webInputText',
          options: []
        },
        {
          title: '数据源',
          describe: '',
          remark: '',
          isShow(opt) {
            let others = opt.others;
            return eval('others.datasways === 3')
          },
          init(opt, cb) {
            let self = opt.self;
            let setting = opt.setting;
            let _js = "self.$api.get(self.CONFIG.REST.dataSourceList).then(data => {if (data.status === 'ok') {let arr = [];for (let i = 0; i < data.data.length; i++) {let o = {label: data.data[i]['dsname'],value: data.data[i]['dsid']};arr.push(o);}setting.options = arr;}});"
            eval(_js);

            if (cb) cb();
          },
          model: "others.datasource",
          component: 'webSelect',
          options: []
        },
        {
          title: 'SQL语句',
          describe: '请输入SQL语句',
          rows: 8,
          remark: '',
          isShow(opt) {
            let others = opt.others;
            return eval('others.datasways === 3')
          },
          model: "others.datasql",
          component: 'webInputTextarea',
          options: []
        },
        {
          title: '请求JSON数据',
          describe: '',
          remark: '',
          isShow(opt) {
            let others = opt.others;
            return eval('others.datasways === 3')
          },
          click(opt, cb) {
            let self = opt.self;
            let setting = opt.setting;
            let contents = opt.contents;
            let others = opt.others;
            let _js = "self.$api.post(self.CONFIG.REST.connectDataSource,{chartType:'0301',dsId:others.datasource,dataMode:0,dataExpr:others.datasql}).then(data => {if (data.status === 'ok') {contents.series[0].data = data.data;contents.series[0].data = data.data;others.updated++;}});"
            eval(_js);
            if (cb) cb();
          },
          component: 'webInputConfirm',
          options: []
        },
        {
          title: '请求结果',
          describe: '请求后的JSON数据',
          rows: 14,
          remark: '',
          format(val) {
            let str = '';
            if (typeof val === 'object')
              try {
                str = JSON.stringify(val, null, ' ')
              } catch (e) {
                str = val;
              }
            return str;
          },
          reformat(val) {
            let str = [];
            if (typeof val === 'string')
              try {
                str = JSON.parse(val)
              } catch (e) {
                // str = val;
              }
            return str;
          },
          disabled: true,
          model: "contents.series[0].data",
          component: 'webInputTextarea',
        },
      ]
    },
  ],
  //  内容（chart配置）
  contents: {
    title: {
      show: true,
      text: "路径地图",
      link: "", //超链接
      target: "blank", //指定窗口打开超链接 self\blank
      textStyle: {
        color: "rgba(211, 211, 211, 1)",
        fontStyle: "normal", // normal\italic\oblique
        fontWeight: "bold", //normal\bold\bolder\lighter 100\200\300\400
        fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 18,
      },
      rich: {},
      subtext: '',
      left: 'auto',
      top: 'auto',
    },
    legend: {
      show: false //是否显示图例
    },
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
      alwaysShowContent: false,
      triggerOn: "mousemove|click",
      formatter: '',
      backgroundColor: 'rgba(50,50,50,0.7)',
      textStyle: {
        color: "#fff",
        fontSize: 12
      }
    },
    geo: {
      map: 'china',
      roam: false,
      layoutCenter: ['50%', '50%'],
      layoutSize: '100%',
      label: {
        show: false,
        position: 'top',
        rotate: 0,
        color: "rgba(184, 229, 245, 1)",
        fontSize: '12'
      },
      itemStyle: {
        areaColor: "#323c48",
        color: "#fff",
        borderColor: "#111",
      },
      emphasis: {
        label: {
          show: false,
          position: 'top',
          rotate: 0,
          color: "#10475B",
          fontSize: '12'
        },
        itemStyle: {
          areaColor: "#2a333d",
          color: "#111",
          borderColor: "#111",
        },
      }
    },
    series: [{
      type: 'lines',
      name: "航班数",
      map: 'china',
      zlevel: 1,
      effect: {
        show: true,
        period: 6, //时间
        // delay: 0,
        constantSpeed: 0,
        symbol: 'circle',
        symbolSize: 5,
        color: 'rgba(212, 255, 255, 1)',
        trailLength: 0.7,
      },
      lineStyle: {
        color: "#a6c84c",
        width: 1,
        opacity: 0.6,
        curveness: 0.2
      },
      symbol: ['none', 'arrow'],
      // symbolSize: 10,
      data: datas,
    }],
    backgroundColor: "#404a59"
  },
  others: {
    openMenu: [1, 2, 10],
    datasways: 1, //获取方式
    datasource: "", //数据源
    datasql: "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name", //sql语句
    datasurl: "", //URL地址
    datajson: "",
    updated: 1
  }
};



opt = Object.assign({}, template, opt);
export default opt;
