import template from './template'

let opt = {
  //   名称
  name: 'pie',
  //  Grid 配置
  grid: {
    "position-x": "0",
    "position-y": "0",
    "width": "12",
    "height": "9",
    "max-width": "12",
    "min-width": "1",
    "max-height": "100",
    "min-height": "1"
  },
  //  可配置项
  opts: [{
      groupName: '常规',
      groupType: 'g1',
      members: [{
          title: '水平位置',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].center[0]",
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
          model: "contents.series[0].center[1]",
          component: 'webInputSlider'
        },
        {
          title: '整体半径',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].radius[1]",
          component: 'webInputSlider'
        },
        {
          title: '空心半径',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.series[0].radius[0]",
          component: 'webInputSlider'
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
      groupName: '标签&辅助线',
      groupType: 'g1',
      members: [{
          title: '标签',
          describe: '',
          remark: '',
          model: "contents.series[0].label.show",
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
          title: '标签格式',
          describe: '',
          remark: '',
          model: "contents.series[0].label.formatter",
          component: 'webSelect',
          options: [{
              label: "标题",
              value: '{b}'
            },
            {
              label: "标题,值",
              value: '{c}'
            },
            {
              label: "标题,百分比",
              value: '{b},{d}%'
            },
            {
              label: "标题,值(百分比)",
              value: '({d}%){c}'
            },
          ]
        },
        {
          title: '标签位置',
          describe: '',
          remark: '',
          model: "contents.series[0].label.position",
          component: 'webInputRadio',
          options: [{
              label: "内部",
              value: 'inner'
            },
            {
              label: "外部",
              value: 'outside'
            },
            {
              label: "居中",
              value: 'center'
            },
          ]
        },
        {
          title: '文本角度',
          describe: '',
          remark: '',
          max: 180,
          min: -180,
          model: "contents.series[0].label.rotate",
          component: 'webInputSlider'
        },
        {
          title: '文本颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].label.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.series[0].label.fontSize",
          component: 'webInputNum'
        },
        {
          title: '辅助线',
          describe: '',
          remark: '',
          model: "contents.series[0].labelLine.show",
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
          title: '线长1',
          describe: '',
          remark: '',
          max: 50,
          model: "contents.series[0].labelLine.length",
          component: 'webInputSlider'
        },
        {
          title: '线长2',
          describe: '',
          remark: '',
          max: 50,
          model: "contents.series[0].labelLine.length2",
          component: 'webInputSlider'
        },

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
      groupName: '高亮&选中',
      groupType: 'g1',
      members: [{
          title: '区域选择',
          describe: '',
          remark: '',
          model: "contents.series[0].selectedMode",
          component: 'webInputRadio',
          options: [{
              label: '无',
              value: false
            },
            {
              label: '单选',
              value: 'single'
            },
            {
              label: '多选',
              value: 'multiple'
            }
          ]
        },
        {
          title: '偏移距离',
          describe: '',
          remark: '',
          model: "contents.series[0].selectedOffset",
          component: 'webInputSlider'
        },
        {
          title: '鼠标悬停',
          describe: '',
          remark: '',
          model: "contents.series[0].hoverAnimation",
          component: 'webInputRadio',
          options: [{
              label: '无',
              value: false
            },
            {
              label: '放大',
              value: true
            }
          ]
        },
        {
          title: '放大尺寸',
          describe: '',
          remark: '',
          model: "contents.series[0].hoverOffset",
          component: 'webInputSlider'
        },
        {
          title: '标签格式',
          describe: '',
          remark: '',
          model: "contents.series[0].emphasis.label.formatter",
          component: 'webSelect',
          options: [{
              label: "标题",
              value: '{b}'
            },
            {
              label: "标题,值",
              value: '{c}'
            },
            {
              label: "标题,百分比",
              value: '{b},{d}%'
            },
            {
              label: "标题,值(百分比)",
              value: '({d}%){c}'
            },
          ]
        },
        {
          title: '文本颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].emphasis.label.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.series[0].emphasis.label.fontSize",
          component: 'webInputNum'
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
          title: '图例朝向',
          describe: '',
          remark: '',
          model: "contents.legend.orient",
          component: 'webInputRadio',
          options: [{
              label: "横向",
              value: 'horizontal'
            },
            {
              label: "纵向",
              value: 'vertical'
            },
          ]
        },
        {
          title: '图例间隔',
          describe: '',
          remark: '',
          model: "contents.legend.itemGap",
          component: 'webInputSlider',
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.legend.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.legend.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '水平位置',
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
          model: "contents.legend.right",
          component: 'webInputSlider'
        },
        {
          title: '垂直位置',
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
            let _js = "self.$api.post(self.CONFIG.REST.connectDataSource,{chartType:'0301',dsId:others.datasource,dataMode:0,dataExpr:others.datasql}).then(data => {if (data.status === 'ok') {contents.dataset.source = data.data;contents.dataset.source = data.data;others.updated++;}});"
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
          model: "contents.series[0].encode.itemName",
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
          model: "contents.series[0].encode.value",
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
      show: true, //是否显示图例
      right: '7%',
      top: '88%',
      orient: 'horizontal', //vertical\horizontal
      itemGap: 10, //间隔距离
      itemWidth: 30, //图例宽度
      itemHeight: 12,
      //   formatter: '',
      selectedMode: true, //允许选择
      textStyle: {
        color: '#333',
        fontSize: 12,
      },
    },
    series: [{
      type: 'pie',
      radius: ['0%', '50%'],
      center: ['50%', '50%'],
      hoverAnimation: true,
      selectedMode: false,
      hoverOffset: 10,
      selectedOffset: 10,
      seriesLayoutBy: 'row',
      encode: {
        itemName: '年份',
        value: '销售量'
      },
      label: {
        show: true,
        position: 'outside',
        formatter: "{b}",
        rotate: 0,
        fontSize: 12,
        color: '#333',
      },
      labelLine: {
        show: true,
        length: 20,
        length2: 12,
        smooth: false
      },
      emphasis: {
        label: {
          show: true,
          position: 'outside',
          formatter: "{b}",
          rotate: 0,
          fontSize: 12,
          color: '#333',
        },
      }
    }],
    dataset: {
      source: [{
          '年份': '2015',
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
      ],
    },
    backgroundColor: "#fff"
  },
  others: {
    openMenu: [1, 2, 8, 9],
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
