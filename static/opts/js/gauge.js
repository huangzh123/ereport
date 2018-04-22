import template from './template'

let opt = {
  //   名称
  name: 'gauge',
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
      groupName: '常规',
      groupType: 'g1',
      members: [{
          title: '表盘半径',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].radius",
          component: 'webInputSlider'
        },
        {
          title: '起始角度',
          describe: '',
          remark: '',
          max: 360,
          min: -360,
          model: "contents.series[0].startAngle",
          component: 'webInputSlider'
        },
        {
          title: '终点角度',
          describe: '',
          remark: '',
          max: 360,
          min: -360,
          model: "contents.series[0].endAngle",
          component: 'webInputSlider'
        },
        {
          title: '递增方向',
          describe: '',
          isShow() {
            return 0;
          },
          remark: '',
          model: "contents.series[0].clockwise",
          component: 'webInputRadio',
          options: [{
              label: "顺时针",
              value: true
            },
            {
              label: "逆时针",
              value: false
            },
          ]
        },
        {
          title: '最小值',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.series[0].min",
          component: 'webInputNum'
        },
        {
          title: '最大值',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.series[0].max",
          component: 'webInputNum'
        },
        {
          title: '分割段数',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.series[0].splitNumber",
          component: 'webInputNum'
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        }
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
      groupName: '轴线&分割线',
      groupType: 'g1',
      members: [{
          title: '轴线宽度',
          describe: '',
          remark: '',
          model: "contents.series[0].axisLine.lineStyle.width",
          component: 'webInputSlider'
        },
        {
          title: '轴1颜色',
          describe: '',
          remark: '',
          max: 1,
          step: 0.1,
          model: "contents.series[0].axisLine.lineStyle.color[0][1]",
          component: 'webInputColor'
        },
        {
          title: '轴2颜色',
          describe: '',
          remark: '',
          max: 1,
          step: 0.1,
          model: "contents.series[0].axisLine.lineStyle.color[1][1]",
          component: 'webInputColor'
        },
        {
          title: '轴3颜色',
          describe: '',
          remark: '',
          max: 1,
          step: 0.1,
          model: "contents.series[0].axisLine.lineStyle.color[2][1]",
          component: 'webInputColor'
        },
        {
          title: '轴1位置',
          describe: '',
          remark: '',
          max: 1,
          step: 0.1,
          model: "contents.series[0].axisLine.lineStyle.color[0][0]",
          component: 'webInputSlider'
        },
        {
          title: '轴2位置',
          describe: '',
          remark: '',
          max: 1,
          step: 0.1,
          model: "contents.series[0].axisLine.lineStyle.color[1][0]",
          component: 'webInputSlider'
        },
        {
          title: '轴3位置',
          describe: '',
          remark: '',
          max: 1,
          step: 0.1,
          model: "contents.series[0].axisLine.lineStyle.color[2][0]",
          component: 'webInputSlider'
        },
        {
          title: '分割线色',
          describe: '',
          remark: '',
          model: "contents.series[0].splitLine.lineStyle.color",
          component: 'webInputColor'
        },
        {
          title: '分割线长',
          describe: '',
          remark: '',
          model: "contents.series[0].splitLine.length",
          component: 'webInputSlider'
        },
        {
          title: '分割线宽',
          describe: '',
          max: 10,
          remark: '',
          model: "contents.series[0].splitLine.lineStyle.width",
          component: 'webInputSlider'
        },
      ]
    },
    {
      groupName: '刻度&标签',
      groupType: 'g1',
      members: [{
          title: '刻度数',
          describe: '',
          remark: '',
          max: 10,
          model: "contents.series[0].axisTick.splitNumber",
          component: 'webInputSlider'
        },
        {
          title: '刻度线长',
          describe: '',
          remark: '',
          max: 50,
          model: "contents.series[0].axisTick.length",
          component: 'webInputSlider'
        },
        {
          title: '刻度线宽',
          describe: '',
          remark: '',
          max: 10,
          step: 0.1,
          model: "contents.series[0].axisTick.lineStyle.width",
          component: 'webInputSlider'
        },
        {
          title: '刻度线色',
          describe: '',
          remark: '',
          model: "contents.series[0].axisTick.lineStyle.color",
          component: 'webInputColor'
        },
        {
          title: '刻度标签',
          describe: '',
          remark: '',
          model: "contents.series[0].axisLabel.show",
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
          title: '标签距离',
          describe: '',
          remark: '',
          model: "contents.series[0].axisLabel.distance",
          component: 'webInputSlider',
        },
        {
          title: '标签格式化',
          describe: '',
          remark: '',
          model: "contents.series[0].axisLabel.formatter",
          component: 'webInputText',
        },
        {
          title: '标签颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].axisLabel.color",
          component: 'webInputColor',
        },
        {
          title: '字体粗细',
          describe: '',
          remark: '',
          model: "contents.series[0].axisLabel.fontWeight",
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
        {
          title: '字体大小',
          describe: '',
          remark: '',
          max: 50,
          model: "contents.series[0].axisLabel.fontSize",
          component: 'webInputNum',
        },
      ]
    },
    {
      groupName: '指针',
      groupType: 'g1',
      members: [{
          title: '指针',
          describe: '',
          remark: '',
          model: "contents.series[0].pointer.show",
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
          title: '指针颜色',
          describe: '',
          remark: '不设置任何值时,默认会取当前的区间颜色',
          model: "contents.series[0].itemStyle.color",
          component: 'webInputColor',
        },
        {
          title: '指针宽度',
          describe: '',
          remark: '',
          max: 50,
          model: "contents.series[0].pointer.width",
          component: 'webInputSlider',
        },
        {
          title: '指针长度',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].pointer.length",
          component: 'webInputSlider',
        },
        {
          title: '描边颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].itemStyle.borderColor",
          component: 'webInputColor',
        },
        {
          title: '描边宽度',
          describe: '',
          remark: '',
          max: 10,
          model: "contents.series[0].itemStyle.borderWidth",
          component: 'webInputSlider',
        },
        {
          title: '阴影颜色',
          describe: '',
          isShow() {
            return 0
          },
          remark: '',
          model: "contents.series[0].itemStyle.shadowColor",
          component: 'webInputColor',
        },
        {
          title: '阴影大小',
          describe: '',
          isShow() {
            return 0
          },
          remark: '',
          model: "contents.series[0].itemStyle.shadowBlur",
          component: 'webInputSlider',
        },
      ]
    },
    {
      groupName: '内容&表头',
      groupType: 'g1',
      members: [{
          title: '内 容',
          describe: '',
          remark: '',
          model: "contents.series[0].detail.show",
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
          title: '水平偏移',
          describe: '',
          remark: '',
          min: -100,
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].detail.offsetCenter[0]",
          component: 'webInputSlider'
        },
        {
          title: '垂直偏移',
          describe: '',
          min: -100,
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].detail.offsetCenter[1]",
          component: 'webInputSlider'
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '不设置任何值时,默认会取当前的区间颜色',
          model: "contents.series[0].detail.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.series[0].detail.fontSize",
          component: 'webInputNum'
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          max: 10,
          model: "contents.series[0].detail.backgroundColor",
          component: 'webInputColor',
        },
        {
          title: '描边颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].detail.borderColor",
          component: 'webInputColor',
        },
        {
          title: '描边宽度',
          describe: '',
          remark: '',
          max: 10,
          model: "contents.series[0].detail.borderWidth",
          component: 'webInputSlider',
        },
        {
          title: '表 头',
          describe: '',
          remark: '',
          model: "contents.series[0].title.show",
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
          title: '水平偏移',
          describe: '',
          remark: '',
          min: -100,
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].title.offsetCenter[0]",
          component: 'webInputSlider'
        },
        {
          title: '垂直偏移',
          describe: '',
          min: -100,
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].title.offsetCenter[1]",
          component: 'webInputSlider'
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].title.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.series[0].title.fontSize",
          component: 'webInputNum'
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          max: 10,
          model: "contents.series[0].title.backgroundColor",
          component: 'webInputColor',
        }
      ]
    },
    {
      groupName: '提示框',
      groupType: 'g1',
      members: [{
          title: '显示浮层',
          describe: '',
          remark: '',
          model: "contents.tooltip.show",
          component: 'webInputRadio',
          options: [{
              label: '显示',
              value: true
            },
            {
              label: '隐藏',
              value: false
            },

          ]
        },
        {
          title: '浮层常驻',
          describe: '',
          remark: '',
          model: "contents.tooltip.alwaysShowContent",
          component: 'webInputRadio',
          options: [{
              label: '显示',
              value: true
            },
            {
              label: '隐藏',
              value: false
            },

          ]
        },
        {
          title: '格式化',
          describe: '',
          remark: '',
          model: "contents.tooltip.formatter",
          component: 'webInputText',
        },

        {
          title: '边框宽度',
          describe: '',
          remark: '',
          model: "contents.tooltip.borderWidth",
          component: 'webInputNum',
        },
        {
          title: '边框颜色',
          describe: '',
          remark: '',
          model: "contents.tooltip.borderColor",
          component: 'webInputColor',
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.tooltip.backgroundColor",
          component: 'webInputColor',
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.tooltip.textStyle.color",
          component: 'webInputColor',
        },

        //   {
        //     title: '格式化',
        //     describe: '',
        //     remark: '',
        //     model: "contents.tooltip.formatter",
        //     component: 'webInputText',
        //   },

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
      text: "仪盘表",
      link: "", //超链接
      target: "blank", //指定窗口打开超链接 self\blank
      textStyle: {
        color: "#333",
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
    tooltip: {
      show: false,
      trigger: 'item',
      backgroundColor: 'rgba(50,50,50,0.7)',
      borderColor: '#333',
      borderWidth: 1,
      textStyle: {
        color: "#fff"
      },
      showContent: true,
      alwaysShowContent: false,
      triggerOn: "mousemove|click",
      formatter: '',
      textStyle: {
        color: "#fff",
        fontSize: 12
      }
    },
    legend: {
      show: true //是否显示图例
    },
    series: [{
      type: 'gauge',
      radius: '75%',
      min: 0,
      max: 100,
      splitNumber: 10,
      startAngle: 225,
      endAngle: -45,
      clockwise: true,
      splitNumber: 10,
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [0.2, 'rgba(198, 36, 32, 1)'],
            [0.8, 'rgba(5, 147, 198, 1)'],
            [1, 'rgba(9, 200, 112, 1)']
          ],
          width: 30,
        }
      },
      splitLine: {
        show: true,
        length: 30,
        lineStyle: {
          width: 2,
          color: '#eee',
        }
      },
      axisLabel: {
        show: true,
        distance: 5,
        formatter: '{value}',
        color: '#333',
        fontSize: 12,
        fontWeight: 'normal'
      },
      axisTick: {
        show: true,
        splitNumber: 5,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 1,
        }
      },
      pointer: {
        show: true,
        width: 8,
        length: '80%'
      },
      itemStyle: {
        color: 'auto',
        borderWidth: 0,
        borderColor: '#fff',
        shadowBlur: 0,
        shadowColor: '#fff'
      },
      title: {
        show: true,
        borderColor: '#fff',
        borderWidth: 0,
        borderColor: 'transparent',
        color: '#333',
        fontSize: 20,
        backgroundColor: 'transparent',
        offsetCenter: [0, '-40%']
      },
      detail: {
        show: true,
        borderColor: '#fff',
        borderWidth: 0,
        borderColor: 'transparent',
        color: 'auto',
        fontSize: 30,
        backgroundColor: 'transparent',
        offsetCenter: [0, '40%']
      },
      data: [{
        value: 50,
        name: '完成率'
      }]

    }],
    backgroundColor: "#fff"
  },
  others: {
    openMenu: [1, 2, 9],
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
