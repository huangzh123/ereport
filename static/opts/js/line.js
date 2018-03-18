import template from './template'

let opt = {
  //   名称
  name: 'line',
  //  Grid 配置
  grid: {
    "position-x": "0",
    "position-y": "0",
    "width": "12",
    "height": "7",
    "max-width": "12",
    "min-width": "1",
    "max-height": "100",
    "min-height": "1"
  },
  //  可配置项（菜单组）
  opts: [{
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
            console.log(contents)
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
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.title.left",
          component: 'webInputSlider'
        },
        {
          title: 'Y轴位置',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
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
      groupName: '布局&设计',
      groupType: 'g1',
      members: [{
          title: '高度',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.grid.height",
          component: 'webInputSlider'
        },
        {
          title: '宽度',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.grid.width",
          component: 'webInputSlider'
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
          max: 50,
          model: "contents.grid.left",
          component: 'webInputSlider'
        },
        {
          title: '垂直位置',
          describe: '',
          remark: '',
          max: 50,
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.grid.top",
          component: 'webInputSlider'
        },
        {
          title: '网格背景',
          describe: '',
          remark: '',
          model: "contents.grid.backgroundColor",
          component: 'webInputColor'
        },
        {
          title: '边线颜色',
          describe: '',
          remark: '',
          model: "contents.grid.borderColor",
          component: 'webInputColor'
        },
        {
          title: '线 形',
          describe: '',
          remark: '',
          model: "contents.series[0].smooth",
          component: 'webInputRadio',
          options: [{
              label: "直线",
              value: false
            },
            {
              label: "曲线",
              value: true
            },
          ]
        },
        {
          title: '面 积',
          describe: '',
          remark: '',
          model: "contents.series[0].areaStyle",
          component: 'webInputRadio',
          options: [{
              label: "覆盖",
              value: {}
            },
            {
              label: "不覆盖",
              value: null
            },
          ]
        },
        {
          title: '描 点',
          describe: '',
          remark: '',
          model: "contents.xAxis.boundaryGap",
          component: 'webInputRadio',
          options: [{
              label: "中间",
              value: true
            },
            {
              label: "边上",
              value: false
            },
          ]
        },


      ]
    },
    {
      groupName: 'X轴 & Y轴',
      groupType: 'g1',
      members: [{
          title: 'X 轴',
          describe: '',
          remark: '',
          model: "contents.xAxis.show",
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
          title: '位 置',
          describe: '',
          remark: '',
          model: "contents.xAxis.position",
          component: 'webSelect',
          options: [{
              label: '底部',
              value: 'bottom',
            },
            {
              label: '顶部',
              value: 'top',
            },
          ]
        },
        {
          title: '名 称',
          describe: '',
          remark: '',
          model: "contents.xAxis.name",
          component: 'webInputText'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.xAxis.nameTextStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '名称颜色',
          describe: '',
          remark: '',
          model: "contents.xAxis.nameTextStyle.color",
          component: 'webInputColor'
        },
        {
          title: '名称角度',
          describe: '',
          remark: '',
          min: -90,
          max: 90,
          model: "contents.xAxis.nameRotate",
          component: 'webInputSlider',
        },
        {
          title: '名称位置',
          describe: '',
          remark: '',
          model: "contents.xAxis.nameLocation",
          component: 'webSelect',
          options: [{
              label: '起始位置',
              value: 'start',
            },
            {
              label: '中间位置',
              value: 'center',
            },
            {
              label: '末尾位置',
              value: 'end',
            },
          ]
        },
        {
          title: '坐标反转',
          describe: '',
          remark: '',
          model: "contents.xAxis.inverse",
          component: 'webInputRadio',
          options: [{
              label: "是",
              value: true
            },
            {
              label: "否",
              value: false
            },
          ]
        },
        {
          title: '轴 线',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLine.show",
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
          title: '轴线箭头',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLine.symbol",
          component: 'webSelect',
          options: [{
              label: '无',
              value: eval("['none','none']"),
            }, {
              label: '右边箭头',
              value: eval("['none','arrow']"),
            },
            {
              label: '左边箭头',
              value: eval("['arrow','none']"),
            },
            {
              label: '双边箭头',
              value: eval("['arrow','arrow']"),
            },

          ]
        },
        {
          title: '轴线颜色',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLine.lineStyle.color",
          component: 'webInputColor'
        },
        {
          title: '刻 度',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisTick.show",
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
          title: '刻度模式',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisTick.inside",
          component: 'webInputRadio',
          options: [{
              label: "内部",
              value: true
            },
            {
              label: "外部",
              value: false
            },
          ]
        },
        {
          title: '刻度标签',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLabel.show",
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
          title: '标签间隔',
          describe: '',
          remark: '设置为0强制显示所有标签',
          min: 0,
          isShow(opts) {
            return false;
          },
          model: "contents.xAxis.axisLabel.interval",
          component: 'webInputNum',
        },
        {
          title: '标签模式',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLabel.inside",
          component: 'webInputRadio',
          options: [{
              label: "内部",
              value: true
            },
            {
              label: "外部",
              value: false
            },
          ]
        },
        {
          title: '标签颜色',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLabel.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.xAxis.axisLabel.fontSize",
          component: 'webInputNum',
        },
        {
          title: '标签角度',
          describe: '',
          remark: '',
          max: 90,
          min: -90,
          model: "contents.xAxis.axisLabel.rotate",
          component: 'webInputSlider',
        },
        {
          title: '标签上边距',
          describe: '',
          remark: '',
          max: 20,
          model: "contents.xAxis.axisLabel.margin",
          component: 'webInputSlider',
        },
        {
          title: '标签格式化',
          describe: '',
          remark: '',
          max: 20,
          model: "contents.xAxis.axisLabel.formatter",
          component: 'webInputText',
        },
        {
          title: '最小标签',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLabel.showMinLabel",
          component: 'webInputRadio',
          options: [{
              label: "默认",
              value: null
            }, {
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
          title: '最大标签',
          describe: '',
          remark: '',
          model: "contents.xAxis.axisLabel.showMaxLabel",
          component: 'webInputRadio',
          options: [{
              label: "默认",
              value: null
            }, {
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
          title: 'Y 轴',
          describe: '',
          remark: '',
          model: "contents.yAxis.show",
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
          title: 'Y轴名称',
          describe: '',
          remark: '',
          model: "contents.yAxis.name",
          component: 'webInputText'
        },
        {
          title: 'Y轴位置',
          describe: '',
          remark: '',
          model: "contents.yAxis.position",
          component: 'webSelect',
          options: [{
              label: '左侧',
              value: 'left',
            },
            {
              label: '右侧',
              value: 'right',
            }
          ]
        },
      ]
    },
    {
      groupName: '图例',
      groupType: 'g1',
      members: [{
          title: '图例',
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
          model: "contents.legend.left",
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
          model: "contents.legend.top",
          component: 'webInputSlider'
        },
        {
          title: '图例项高',
          describe: '',
          remark: '',
          model: "contents.legend.itemHeight",
          component: 'webInputNum'
        },
        {
          title: '图例项宽',
          describe: '',
          remark: '',
          model: "contents.legend.itemWidth",
          component: 'webInputNum'
        },

        {
          title: '图例选择',
          describe: '',
          remark: '',
          model: "contents.legend.selectedMode",
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

      ]
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
            let _js = "self.$api.post(self.CONFIG.REST.connectDataSource,{dsId:others.datasource,dataMode:0,dataExpr:others.datasql}).then(data => {if (data.status === 'ok') {contents.dataset.source = data.data;contents.dataset.source = data.data;others.updated++;}});"
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
          model: "contents.dataset.source",
          component: 'webInputTextarea',
        },
      ]
    },
    {
      groupName: '维度&度量',
      groupType: 'g2',
      members: [{
          title: '维 度',
          describe: '',
          remark: '',
          init(opt, cb) {
            let self = opt.self;
            let setting = opt.setting;
            let others = opt.others;
            let contents = opt.contents;
            let _js = "let arr = [];let d = contents.dataset.source;if(d && d !== ''){let type = self.$tool.getType(d);if(type === 'string') d = JSON.parse(d);type = self.$tool.getType(d);if(type === 'array' && d.length > 0) for (let k in d[0]) arr.push({label: k,value: k});}setting.options = arr;if(cb) cb();"
            eval(_js)
            if (cb) cb();
          },
          model: "contents.series[0].encode.x",
          component: 'webSelect',
          options: []
        },
        {
          title: '度 量',
          describe: '',
          remark: '',
          init(opt, cb) {
            let self = opt.self;
            let setting = opt.setting;
            let others = opt.others;
            let contents = opt.contents;
            let _js = "let arr = [];let d = contents.dataset.source;if(d && d !== ''){let type = self.$tool.getType(d);if(type === 'string') d = JSON.parse(d);type = self.$tool.getType(d);if(type === 'array' && d.length > 0) for (let k in d[0]) arr.push({label: k,value: k});}setting.options = arr;if(cb) cb();"
            eval(_js)
            if (cb) cb();
          },
          model: "contents.series[0].encode.y",
          component: 'webSelect',
          options: []
        },
      ]
    },
  ],
  //  内容（chart配置）
  contents: {
    title: {
      show: true,
      text: "线图",
      link: "", //超链接
      target: "blank", //指定窗口打开超链接 self\blank
      textStyle: {
        color: "#333",
        fontStyle: "normal", // normal\italic\oblique
        fontWeight: "bold", //normal\bold\bolder\lighter 100\200\300\400
        fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 18,
        align: 'left', //left\center\right
        verticalAlign: 'middle', //top\middle\bottm
        lineHeight: 0,
        width: 'auto',
        height: 'auto',
        textShadowColor: 'transparent',
        textShadowBlur: 0,
        textShadowOffsetX: '0',
        textShadowOffsetY: '0',
      },
      rich: {},
      subtext: '',
      sublink: '',
      subtarget: 'blank',
      subtextStyle: {
        color: "#999",
        fontStyle: "normal", // normal\italic\oblique
        fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
        fontFamily: 'Microsoft YaHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 12,
        align: 'left', //left\center\right
        verticalAlign: 'middle', //top\middle\bottm
        lineHeight: 0,
        width: 'auto',
        height: 'auto',
        textShadowColor: 'transparent',
        textShadowBlur: 0,
        textShadowOffsetX: '0',
        textShadowOffsetY: '0',
      },
      padding: 5,
      itemGap: 10,
      left: 'auto',
      top: 'auto',
      bottom: 'auto',
      right: 'auto',
      backgroundColor: 'transparent',
      borderColor: '#ccc',
      borderWidth: 0,
      borderRadius: 0,
      shadowBlur: 0,
      shadowColor: "#fff",
      shadowOffsetX: 0,
      shadowOffsetY: 0,
    },
    legend: {
      show: true, //是否显示图例
      left: '20%',
      top: '2%',
      orient: 'horizontal', //vertical\horizontal
      itemGap: 10, //间隔距离
      itemWidth: 30, //图例宽度
      itemHeight: 12,
      formatter: '',
      selectedMode: true, //允许选择
    },
    grid: {
      show: true,
      left: '8%',
      top: '23%',
      height: '60%',
      width: '86%',
      backgroundColor: 'transparent',
      borderColor: '#ccc',
      borderWidth: 1,
    },
    xAxis: {
      name: "年份",
      position: 'bottom',
      show: true,
      type: 'category',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#333',
        fontSize: '12'
      },
      nameRotate: 0,
      inverse: false,
      axisLine: {
        show: true,
        symbol: 'none',
        lineStyle: {
          color: "#333"
        }
      },
      axisTick: {
        show: true, //坐标轴刻度
        interval: 'auto',
        inside: false,
        length: 5,
      },
      axisLabel: {
        interval: 0,
        inside: false,
        rotate: 0,
        margin: 8,
        formatter: '{value}',
        showMinLabel: null,
        showMaxLabel: null,
        color: "",
        fontSize: 12,
        show: true //隐藏刻度
      },
      boundaryGap: false, //中间描点
    },
    yAxis: {
      name: "销售量",
      show: true,
      type: "value",
      position: 'left',
      axisTick: {
        show: true, //坐标轴刻度
      },
      axisLabel: {
        show: true //隐藏刻度
      }
    },
    series: [{
      type: 'line',
      areaStyle: null, //分割区域样式 {} 或 null
      smooth: false, // 曲线
      //   encode: {
      //     // 将 "amount" 列映射到 X 轴。
      //     x: '',
      //     // 将 "product" 列映射到 Y 轴。
      //     y: ''
      //   }
    }],
    dataset: {
      source: [{
          '年份': '201520152015201520152015201520152015',
          '销售量': 820
        },
        {
          '年份': '2016',
          '销售量': 932
        },
        {
          '年份': '2017',
          '销售量': 1820
        },
        {
          '年份': '2018',
          '销售量': 2820
        },
        {
          '年份': '2019',
          '销售量': 3820
        },
        {
          '年份': '2020',
          '销售量': 2820
        },
        {
          '年份': '2021',
          '销售量': 1820
        },
        {
          '年份': '2022',
          '销售量': 2820
        },
      ]
    },
    backgroundColor: "#fff"
  },
  others: {
    openMenu: [1, 3, 4, 6, 7, 8],
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
