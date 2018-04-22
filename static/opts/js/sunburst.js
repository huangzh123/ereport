import template from './template'

let opt = {
  //   名称
  name: 'sunburst',
  //  Grid 配置
  //  可配置项
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
  },],
  //  内容（chart配置）
  contents: {
    title: {
      show: true,
      text: "极坐标图",
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

    series: [{
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
    }],
    backgroundColor: "#fff"
  },
  others: {
    openMenu: [1, 2, 3],
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
