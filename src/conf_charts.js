/**
 * 所有种类图表的配置项目
 */
export const CONF = {
  // 线图
  line: {
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
        groupName: '常规&通用',
        groupType: 'g1',
        members: [{
            title: '标题', // 名称
            describe: '标题名称', // 描述
            remark: '30个字符', // 备注
            model: "contents.title.text", //绑定的字段
            component: 'webInputText', //使用的web组件
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
        groupName: '布局&设计',
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
        groupName: '图 例',
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
          fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
          fontFamily: 'sans-serif', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        }
      },
      xAxis: {
        name: "年份",
        show: true,
        type: 'category',
        axisTick: {
          show: true, //坐标轴刻度
        },
        axisLabel: {
          show: true //隐藏刻度
        },
        boundaryGap: false, //中间描点
      },
      yAxis: {
        name: "销售量",
        show: true,
        type: "value",
        axisTick: {
          show: true, //坐标轴刻度
        },
        axisLabel: {
          show: true //隐藏刻度
        }
      },
      legend: {
        show: true //是否显示图例
      },
      grid: {
        show: true, //是否显示网格
      },
      series: [{
        type: 'line',
        areaStyle: null, //分割区域样式 {} 或 null
        smooth: false, // 曲线
        // encode: {
        //   // 将 "amount" 列映射到 X 轴。
        //   x: '',
        //   // 将 "product" 列映射到 Y 轴。
        //   y: ''
        // }
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
        ]
      },
      backgroundColor: "#fff"
    },
    others: {
      openMenu: [1, 2, 3, 5, 6, 7, 8],
      datasways: 1, //获取方式
      datasource: "", //数据源
      datasql: "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name", //sql语句
      datasurl: "", //URL地址
      datajson: "",
      updated: 1

    }
  },
  // 柱图
  bar: {
    //   名称
    name: 'bar',
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
    //  可配置项
    opts: [{
        groupName: '常规&通用',
        groupType: 'g1',
        members: [{
            title: '标题', // 名称
            describe: '标题名称', // 描述
            remark: '30个字符', // 备注
            model: "contents.title.text", //绑定的字段
            component: 'webInputText', //使用的web组件
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
        groupName: '布局&设计',
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
            title: '柱体颜色',
            describe: '',
            remark: '',
            model: "contents.series[0].itemStyle.color",
            component: 'webInputColor'
          },
          {
            title: '圆角半径',
            describe: '',
            remark: '',
            min: 0,
            max: 10,
            model: "contents.series[0].itemStyle.barBorderRadius",
            component: 'webInputSlider',
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
            title: '字体颜色',
            describe: '',
            remark: '',
            model: "contents.series[0].label.color",
            component: 'webInputColor'
          },
          {
            title: '字体大小',
            describe: '',
            remark: '',
            min: 12,
            model: "contents.series[0].label.fontSize",
            component: 'webInputNum'
          },
          {
            title: '位 置',
            describe: '',
            remark: '',
            model: "contents.series[0].label.position",
            component: 'webSelect',
            options: [{
                label: "顶部",
                value: 'top'
              },
              {
                label: "内部",
                value: 'inside'
              },
              {
                label: "内部-左侧",
                value: 'insideLeft'
              },
              {
                label: "内部-右侧",
                value: 'insideRight'
              },
              {
                label: "内部-顶部",
                value: 'insideTop'
              },
              {
                label: "内部-底部",
                value: 'insideBottom'
              },
            ]
          },
          {
            title: '旋 转',
            describe: '',
            remark: '',
            min: -90,
            max: 90,
            model: "contents.series[0].label.rotate",
            component: 'webInputSlider',
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
        text: "柱图",
      },
      xAxis: {
        name: "年份",
        show: true,
        type: 'category',
        axisTick: {
          show: true, //坐标轴刻度
        },
        axisLabel: {
          show: true //隐藏刻度
        },
        boundaryGap: true, //中间描点
      },
      yAxis: {
        name: "销售量",
        show: true,
        type: "value",
        axisTick: {
          show: true, //坐标轴刻度
        },
        axisLabel: {
          show: true //隐藏刻度
        }
      },
      legend: {
        show: true //是否显示图例
      },
      grid: {
        show: true, //是否显示网格
      },
      series: [{
        type: 'bar',
        label: {
          show: false,
          position: 'top',
          rotate: 0,
          color: "#E55D23",
          fontSize: '12'
        },
        itemStyle: {
          color: '#c23531',
          barBorderRadius: 0
        },
        encode: {
          // 将 "amount" 列映射到 X 轴。
          x: '',
          // 将 "product" 列映射到 Y 轴。
          y: ''
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
      openMenu: [1, 2, 3, 5, 6, 7, 8],
      datasways: 1, //获取方式
      datasource: "", //数据源
      datasql: "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name", //sql语句
      datasurl: "", //URL地址
      datajson: "",
      updated: 1

    }

  },
  //饼图
  pie: {
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
        groupName: '常规&通用',
        groupType: 'g1',
        members: [{
            title: '标题', // 名称
            describe: '标题名称', // 描述
            remark: '30个字符', // 备注
            model: "contents.title.text", //绑定的字段
            component: 'webInputText', //使用的web组件
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
        groupName: '布局&设计',
        groupType: 'g1',
        members: [{
            title: 'X轴位置',
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
            title: 'Y轴位置',
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
    ],
    //  内容（chart配置）
    contents: {
      title: {
        show: true,
        text: "饼图",
      },
      legend: {
        show: true //是否显示图例
      },
      series: [{
        type: 'pie',
        radius: ['0%', '50%'],
        center: ['50%', '50%'],
        label: {
          show: true,
          position: 'outside',
          formatter: "{b}"
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 12,
          smooth: false
        },

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
    }

  },
  //气泡地图
  mapBubble: {
    //   名称
    name: 'map-bubble',
    //  Grid 配置
    grid: {
      "position-x": "0",
      "position-y": "0",
      "width": "12",
      "height": "12",
      "max-width": "12",
      "min-width": "1",
      "max-height": "100",
      "min-height": "1"
    },
    //  可配置项
    opts: [{
        groupName: '常规&通用',
        groupType: 'g1',
        members: [{
            title: '标题', // 名称
            describe: '标题名称', // 描述
            remark: '30个字符', // 备注
            model: "contents.title.text", //绑定的字段
            component: 'webInputText', //使用的web组件
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
        groupName: '地图&位置',
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
            title: 'X轴位置',
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
            title: 'Y轴位置',
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
            title: '图形颜色',
            describe: '',
            remark: '',
            model: "contents.geo.itemStyle.color",
            component: 'webInputColor'
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
    ],
    //  内容（chart配置）
    contents: {
      title: {
        show: true,
        text: "气泡地图",
      },
      legend: {
        show: true //是否显示图例
      },
      visualMap: {
        min: 0,
        max: 200,
        calculable: true,
        inRange: {
          color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.name + ' : ' + params.value[2];
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
        type: 'scatter',
        name: "销售额",
        map: 'china',
        coordinateSystem: 'geo',
        symbolSize: 28,
        data: [{
            name: '北京',
            value: [116.46, 39.92, 188],
          },
          {
            name: '泉州',
            value: [118.58, 24.93, 126],
          },
          {
            name: '拉萨',
            value: [91.11, 29.97, 15],
          },
          {
            name: '丹东',
            value: [124.37, 40.13, 89],
          },
          {
            name: '张家口',
            value: [114.87, 40.82, 110],
          },
          {
            name: '东莞',
            value: [113.75, 23.04, 168],
          },
          {
            name: '咸阳',
            value: [108.72, 34.36, 66],
          },
          {
            name: '合肥',
            value: [117.27, 31.86, 79],
          },
          {
            name: '聊城',
            value: [115.97, 36.45, 18],
          },
          {
            name: '武汉',
            value: [114.31, 30.52, 89],
          },
          {
            name: '兰州',
            value: [103.73, 36.03, 101],
          },
        ],
      }],
      backgroundColor: "#404a59"
    },
    others: {
      openMenu: [1, 2, 3, 6, 7, 8]
    }
  },
  //色彩地图
  mapColor: {
    //   名称
    name: 'map-color',
    //  Grid 配置
    grid: {
      "position-x": "0",
      "position-y": "0",
      "width": "12",
      "height": "12",
      "max-width": "12",
      "min-width": "1",
      "max-height": "100",
      "min-height": "1"
    },
    //  可配置项
    opts: [{
        groupName: '常规&通用',
        groupType: 'g1',
        members: [{
            title: '标题', // 名称
            describe: '标题名称', // 描述
            remark: '30个字符', // 备注
            model: "contents.title.text", //绑定的字段
            component: 'webInputText', //使用的web组件
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
        groupName: '地图&位置',
        groupType: 'g1',
        members: [{
            title: '地理&区域',
            describe: '',
            remark: '',
            model: "contents.series[0].map",
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
            title: 'X轴位置',
            describe: '',
            remark: '',
            format(val) {
              return val + '%';
            },
            initformat(val) {
              return parseInt(val.substr(0, val.length - 1))
            },
            model: "contents.series[0].layoutCenter[0]",
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
            model: "contents.series[0].layoutCenter[1]",
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
            model: "contents.series[0].layoutSize",
            component: 'webInputSlider'
          },
          {
            title: '缩放和平移',
            describe: '',
            remark: '',
            model: "contents.series[0].roam",
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
            model: "contents.series[0].itemStyle.areaColor",
            component: 'webInputColor'
          },
          {
            title: '边界颜色',
            describe: '',
            remark: '',
            model: "contents.series[0].itemStyle.borderColor",
            component: 'webInputColor'
          },
          {
            title: '图形颜色',
            describe: '',
            remark: '',
            model: "contents.series[0].itemStyle.color",
            component: 'webInputColor'
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
            title: '字体颜色',
            describe: '',
            remark: '',
            model: "contents.series[0].label.color",
            component: 'webInputColor'
          },
          {
            title: '字体大小',
            describe: '',
            remark: '',
            min: 12,
            model: "contents.series[0].label.fontSize",
            component: 'webInputNum'
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
            model: "contents.series[0].emphasis.label.show",
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
            model: "contents.series[0].emphasis.label.color",
            component: 'webInputColor'
          },
          {
            title: '字体大小',
            describe: '',
            remark: '',
            min: 12,
            model: "contents.series[0].emphasis.label.fontSize",
            component: 'webInputNum'
          },
          {
            title: '区域颜色',
            describe: '',
            remark: '',
            model: "contents.series[0].emphasis.itemStyle.areaColor",
            component: 'webInputColor'
          },
          {
            title: '边界颜色',
            describe: '',
            remark: '',
            model: "contents.series[0].emphasis.itemStyle.borderColor",
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
    ],
    //  内容（chart配置）
    contents: {
      title: {
        show: true,
        text: "色彩地图",
      },
      legend: {
        show: true //是否显示图例
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
      },
      tooltip: {
        trigger: 'item'
      },
      series: [{
        type: 'map',
        name: "销售额",
        map: "china",
        roam: false,
        layoutCenter: ['50%', '50%'],
        layoutSize: '90%',
        label: {
          show: false,
          position: 'top',
          rotate: 0,
          color: "#10475B",
          fontSize: '12'
        },
        itemStyle: {
          areaColor: "#eee",
          color: "rgba(238, 238, 238, 0)",
          borderColor: "#CF5656",
        },
        emphasis: {
          label: {
            show: true,
            position: 'top',
            rotate: 0,
            color: "#10475B",
            fontSize: '12'
          },
          itemStyle: {
            areaColor: "rgba(255, 234, 0, 1)",
            color: "#eee",
            borderColor: "rgba(234, 77, 10, 1)",
          },
        }

      }],
      dataset: {
        source: [{
            name: '北京',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '天津',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '上海',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '重庆',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '河北',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '河南',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '云南',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '辽宁',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '黑龙江',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '湖南',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '安徽',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '山东',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '新疆',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '江苏',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '浙江',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '江西',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '湖北',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '广西',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '甘肃',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '山西',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '内蒙古',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '陕西',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '吉林',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '福建',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '贵州',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '广东',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '青海',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '西藏',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '四川',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '宁夏',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '海南',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '台湾',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '香港',
            value: Math.round(Math.random() * 1000)
          },
          {
            name: '澳门',
            value: Math.round(Math.random() * 1000)
          }
        ],
      },
      backgroundColor: "#fff"
    },
    others: {
      openMenu: [1, 2, 3, 6, 7, 8]
    }
  },
  //仪表盘
  gauge: {
    //   名称
    name: 'gauge',
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
      groupName: '常规&通用',
      groupType: 'g1',
      members: [{
          title: '标题', // 名称
          describe: '标题名称', // 描述
          remark: '30个字符', // 备注
          model: "contents.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        },
      ]
    }, ],
    //  内容（chart配置）
    contents: {
      title: {
        show: true,
        text: "仪表盘",
      },
      legend: {
        show: true //是否显示图例
      },
      series: [{
        type: 'gauge',
        radius: '75%',
        startAngle: 225,
        endAngle: -45,
        clockwise: true, //是否顺时针增长
        splitNumber: 10, //刻度
        axisLine: { //轴线
          show: true,
          width: 30, //轴线宽度
          lineStyle: {
            color: [
              [0.2, '#91c7ae'],
              [0.8, '#63869e'],
              [1, '#c23531']
            ],
            shadowBlur: 0, //阴影模糊大小
            shadowColor: '#fff', //阴影颜色
          },

        },
        splitLine: { //分割线样式
          show: true,
          length: 30,
          lineStyle: {
            width: 2, //线宽
            type: 'solid',
            color: [
              [0.2, '#91c7ae'],
              [0.8, '#63869e'],
              [1, '#c23531']
            ],
            shadowBlur: 0, //阴影模糊大小
            shadowColor: '#fff', //阴影颜色
          },
        },
        asisTick: { //刻度
          show: true,
          splitNumber: 5,
          length: 8,
          lineStyle: {
            width: 2, //线宽
            type: 'solid',
            color: [
              [0.2, '#91c7ae'],
              [0.8, '#63869e'],
              [1, '#c23531']
            ],
            shadowBlur: 0, //阴影模糊大小
            shadowColor: '#fff', //阴影颜色
          },
        },
        pointer: { //指针
          show: true,
          length: '80%',
          width: 8,
        },
        itemStyle: { //指针样式
          color: 'auto'
        },
        title: {
          show: true,
          color: '#333'
        },
        detail: {
          show: true
        },
        offsetCenter: [0, '-40%'],
        data: [{
          value: 50,
          name: '完成率'
        }]

      }],
      // dataset: {
      //   source: [

      //   ],
      // },
      backgroundColor: "#fff"
    }

  },
  //雷达图
  radar: {
    //   名称
    name: 'radar',
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
      groupName: '常规&通用',
      groupType: 'g1',
      members: [{
          title: '标题', // 名称
          describe: '标题名称', // 描述
          remark: '30个字符', // 备注
          model: "contents.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        },
      ],
    }, ],
    //  内容（chart配置）
    contents: {
      title: {
        text: '雷达图'
      },
      tooltip: {},
      legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [{
            name: '销售（sales）',
            max: 6500
          },
          {
            name: '管理（Administration）',
            max: 16000
          },
          {
            name: '信息技术（Information Techology）',
            max: 30000
          },
          {
            name: '客服（Customer Support）',
            max: 38000
          },
          {
            name: '研发（Development）',
            max: 52000
          },
          {
            name: '市场（Marketing）',
            max: 25000
          }
        ]
      },
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）'
          }
        ]
      }],
      backgroundColor: "#fff"
    }
  },
  //散点图
  scatter: {
    //   名称
    name: 'scatter',
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
      groupName: '常规&通用',
      groupType: 'g1',
      members: [{
          title: '标题', // 名称
          describe: '标题名称', // 描述
          remark: '30个字符', // 备注
          model: "contents.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        },
      ]
    }, ],
    //  内容（chart配置）
    contents: {
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        type: 'scatter'
      }],
      backgroundColor: "#fff"
    }
  },
  //漏斗图
  sunburst: {
    //   名称
    name: 'sunburst',
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
      groupName: '常规&通用',
      groupType: 'g1',
      members: [{
          title: '标题', // 名称
          describe: '标题名称', // 描述
          remark: '30个字符', // 备注
          model: "contents.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        },
      ]
    }, ],
    //  内容（chart配置）
    contents: {
      series: {
        type: 'sunburst',
        // highlightPolicy: 'ancestor',
        data: [{
          name: 'Grandpa',
          children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
              name: 'Cousin Jack',
              value: 2
            }, {
              name: 'Cousin Mary',
              value: 5,
              children: [{
                name: 'Jackson',
                value: 2
              }]
            }, {
              name: 'Cousin Ben',
              value: 4
            }]
          }, {
            name: 'Father',
            value: 10,
            children: [{
              name: 'Me',
              value: 5
            }, {
              name: 'Brother Peter',
              value: 1
            }]
          }]
        }, {
          name: '极坐标图',
          children: [{
            name: 'Uncle Nike',
            children: [{
              name: 'Cousin Betty',
              value: 1
            }, {
              name: 'Cousin Jenny',
              value: 2
            }]
          }]
        }],
        radius: [0, '90%'],
        label: {
          rotate: 'radial'
        }
      },
      backgroundColor: "#fff"
    }
  },
  //漏斗图
  funnel: {
    //   名称
    name: 'funnel',
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
      groupName: '常规&通用',
      groupType: 'g1',
      members: [{
          title: '标题', // 名称
          describe: '标题名称', // 描述
          remark: '30个字符', // 备注
          model: "contents.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        },
      ]
    }, ],
    //  内容（chart配置）
    contents: {
      title: {
        text: '漏斗图',
        subtext: '纯属虚构'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          dataView: {
            readOnly: false
          },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['展现', '点击', '访问', '咨询', '订单']
      },
      calculable: true,
      series: [{
        name: '漏斗图',
        type: 'funnel',
        left: '10%',
        top: 60,
        //x2: 80,
        bottom: 60,
        width: '80%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          normal: {
            show: true,
            position: 'inside'
          },
          emphasis: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        labelLine: {
          normal: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 1
          }
        },
        data: [{
            value: 60,
            name: '访问'
          },
          {
            value: 40,
            name: '咨询'
          },
          {
            value: 20,
            name: '订单'
          },
          {
            value: 80,
            name: '点击'
          },
          {
            value: 100,
            name: '展现'
          }
        ]
      }],
      backgroundColor: "#fff"
    }
  },
}
