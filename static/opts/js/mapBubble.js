import template from './template'

let opt = {
  //   名称
  name: 'mapBubble',
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
        text: "冒泡地图",
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
    openMenu: [1, 2, 6, 7],
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
