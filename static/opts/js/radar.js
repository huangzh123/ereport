import template from './template'

let opt = {
  //   名称
  name: 'radar',
  //  Grid 配置
  grid: {
    "position-x": "0",
    "position-y": "0",
    "width": "12",
    "height": "11",
    "max-width": "12",
    "min-width": "1",
    "max-height": "100",
    "min-height": "1"
  },
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
  }, ],
  //  内容（chart配置）
  contents: {
    title: {
      show: true,
      text: "雷达图",
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
