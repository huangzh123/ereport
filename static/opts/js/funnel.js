import template from './template'

let opt = {
  //   名称
  name: 'funnel',
  //  Grid 配置
  //  可配置项
  opts: [{
      groupName: '常规',
      groupType: 'g1',
      members: [{
          title: '排 序',
          describe: '',
          remark: '',
          model: "contents.series[0].sort",
          component: 'webInputRadio',
          options: [{
              label: "升序",
              value: 'ascending'
            },
            {
              label: "降序",
              value: 'descending'
            },
          ]
        },
        {
          title: '左侧距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          max: 50,
          model: "contents.series[0].left",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          model: "contents.series[0].top",
          component: 'webInputSlider'
        },
        {
          title: '底部距离',
          describe: '',
          remark: '',
          model: "contents.series[0].bottom",
          component: 'webInputSlider'
        },
        {
          title: '宽度',
          describe: '',
          remark: '',
          model: "contents.series[0].width",
          component: 'webInputSlider',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          }
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
        }


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
          title: '图例名称',
          describe: '',
          remark: '',
          model: "contents.series[0].name",
          component: 'webInputText',
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
      text: "漏斗图",
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
      show: true,
      showContent: true,
      alwaysShowContent: false,
      triggerOn: "mousemove|click",
      formatter: '',
      backgroundColor: 'rgba(50,50,50,0.7)',
      textStyle: {
        color: "#fff",
        fontSize: 12
      },
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}%"
    },
    // toolbox: {
    //   feature: {
    //     dataView: {
    //       readOnly: false
    //     },
    //     restore: {},
    //     saveAsImage: {}
    //   }
    // },
    legend: {
      data: ['展现', '点击', '访问', '咨询', '订单'],
      show: true, //是否显示图例
      right: '0%',
      top: '2%',
      orient: 'horizontal', //vertical\horizontal
      itemGap: 10, //间隔距离
      itemWidth: 30, //图例宽度
      itemHeight: 12,
      selectedMode: true, //允许选择
      textStyle: {
        color: '#333',
        fontSize: 12,
      },
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
  },
  others: {
    openMenu: [1, 2, 6],
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
