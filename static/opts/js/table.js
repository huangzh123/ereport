import template from './template'

let opt = {
  //   名称
  name: 'table',
  // 是否是自定义组件
  component :'cutmTable',
  opts: [{
      groupName: '常规',
      groupType: 'g1',
      members: [{
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
          model: "contents.grid.left",
          component: 'webInputSlider'
        },
        {
          title: '右侧距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          max: 50,
          model: "contents.grid.right",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          model: "contents.grid.top",
          component: 'webInputSlider'
        },
        {
          title: '底部距离',
          describe: '',
          remark: '',
          model: "contents.grid.bottom",
          component: 'webInputSlider'
        },
        {
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
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
        // {
        //   title: '文本格式化',
        //   describe: '',
        //   remark: '{a}:系列名，{b}:数据名，{c}:数据值',
        //   model: "contents.series[0].label.formatter",
        //   component: 'webInputText'
        // },
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
      groupName: '柱体&标签',
      groupType: 'g1',
      members: [{
          title: '柱体宽度',
          describe: '',
          remark: '为0时,自适应宽度大小',
          model: "contents.series[0].barWidth",
          component: 'webInputSlider'
        },
        {
          title: '柱体圆角',
          describe: '',
          max: 20,
          remark: '',
          model: "contents.series[0].itemStyle.barBorderRadius",
          component: 'webInputSlider'
        },
        {
          title: '柱体颜色',
          describe: '',
          remark: '',
          model: "contents.series[0].itemStyle.color",
          component: 'webInputColor'
        },
        {
          title: '标签文本',
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
          title: '文本位置',
          describe: '',
          remark: '',
          model: "contents.series[0].label.position",
          component: 'webSelect',
          options: [{
              value: "top",
              label: '顶部'
            },
            {
              value: "inside",
              label: '内部'
            },
            {
              value: "insideTop",
              label: '内部-顶部'
            },
            {
              value: "insideBottom",
              label: '内部-底部'
            },
          ]
        },
        {
          title: '文本角度',
          describe: '',
          remark: '',
          isShow() {
            return false;
          },
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
      ]
    },
    {
      groupName: 'X轴',
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
          title: '轴类型',
          describe: '',
          remark: '',
          model: "contents.xAxis.type",
          component: 'webInputRadio',
          options: [{
              label: "数值轴",
              value: 'value'
            },
            {
              label: "类目轴",
              value: 'category'
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
        {
          title: '位 置',
          describe: '',
          remark: '',
          isShow() {
            return false;
          },
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
          isShow() {
            return false;
          },
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
          title: '标签字体',
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
          title: '标签边距',
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
          title: '分割线',
          describe: '',
          remark: '',
          model: "contents.yAxis.splitLine.show",
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
          title: '分割区域',
          describe: '',
          remark: '',
          model: "contents.yAxis.splitArea.show",
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
          title: '标题',
          describe: '',
          remark: '',
          model: "contents.xAxis.name",
          component: 'webInputText'
        },
        {
          title: '标题字体',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.xAxis.nameTextStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '标题颜色',
          describe: '',
          remark: '',
          model: "contents.xAxis.nameTextStyle.color",
          component: 'webInputColor'
        },
        // {
        //   title: '标题角度',
        //   describe: '',
        //   remark: '',
        //   min: -90,
        //   max: 90,
        //   model: "contents.xAxis.nameRotate",
        //   component: 'webInputSlider',
        // },
        {
          title: '标题位置',
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
      ]
    },
    {
      groupName: 'Y轴',
      groupType: 'g1',
      members: [{
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
          title: '轴类型',
          describe: '',
          remark: '',
          model: "contents.yAxis.type",
          component: 'webInputRadio',
          options: [{
              label: "数值轴",
              value: 'value'
            },
            {
              label: "类目轴",
              value: 'category'
            },
          ]
        },
        {
          title: '描 点',
          describe: '',
          remark: '',
          model: "contents.yAxis.boundaryGap",
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
        {
          title: '位 置',
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
            },
          ]
        },
        {
          title: '刻度标签',
          describe: '',
          remark: '',
          model: "contents.yAxis.axisLabel.show",
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
          model: "contents.yAxis.axisLabel.interval",
          component: 'webInputNum',
        },
        {
          title: '标签模式',
          describe: '',
          remark: '',
          model: "contents.yAxis.axisLabel.inside",
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
          model: "contents.yAxis.axisLabel.color",
          component: 'webInputColor'
        },
        {
          title: '标签字体',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.yAxis.axisLabel.fontSize",
          component: 'webInputNum',
        },
        {
          title: '标签角度',
          describe: '',
          remark: '',
          max: 90,
          min: -90,
          model: "contents.yAxis.axisLabel.rotate",
          component: 'webInputSlider',
        },
        {
          title: '标签边距',
          describe: '',
          remark: '',
          max: 20,
          model: "contents.yAxis.axisLabel.margin",
          component: 'webInputSlider',
        },
        {
          title: '标签格式化',
          describe: '',
          remark: '',
          max: 20,
          model: "contents.yAxis.axisLabel.formatter",
          component: 'webInputText',
        },
        {
          title: '最小标签',
          describe: '',
          remark: '',
          model: "contents.yAxis.axisLabel.showMinLabel",
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
          model: "contents.yAxis.axisLabel.showMaxLabel",
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
          title: '坐标反转',
          describe: '',
          remark: '',
          model: "contents.yAxis.inverse",
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
          model: "contents.yAxis.axisLine.show",
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
          model: "contents.yAxis.axisLine.symbol",
          component: 'webSelect',
          options: [{
              label: '无',
              value: eval("['none','none']"),
            }, {
              label: '上边箭头',
              value: eval("['none','arrow']"),
            },
            {
              label: '下边箭头',
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
          model: "contents.yAxis.axisLine.lineStyle.color",
          component: 'webInputColor'
        },
        {
          title: '刻 度',
          describe: '',
          remark: '',
          model: "contents.yAxis.axisTick.show",
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
          model: "contents.yAxis.axisTick.inside",
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
          title: '标题',
          describe: '',
          remark: '',
          model: "contents.yAxis.name",
          component: 'webInputText'
        },
        {
          title: '标题字体',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.yAxis.nameTextStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '标题颜色',
          describe: '',
          remark: '',
          model: "contents.yAxis.nameTextStyle.color",
          component: 'webInputColor'
        },
        // {
        //   title: '标题角度',
        //   describe: '',
        //   remark: '',
        //   min: -90,
        //   max: 90,
        //   model: "contents.yAxis.nameRotate",
        //   component: 'webInputSlider',
        // },
        {
          title: '标题位置',
          describe: '',
          remark: '',
          model: "contents.yAxis.nameLocation",
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
          title: '指示器类型',
          describe: '',
          remark: '',
          model: "contents.tooltip.axisPointer.type",
          component: 'webSelect',
          options: [{
              label: '直线指示器',
              value: 'line'
            },
            {
              label: '阴影指示器',
              value: 'shadow'
            },
            {
              label: '十字准星指示器',
              value: 'cross'
            },
          ]
        },
        {
          title: '坐标轴',
          describe: '',
          remark: '',
          model: "contents.tooltip.axisPointer.axis",
          component: 'webInputRadio',
          options: [{
              label: "默认",
              value: 'auto'
            }, {
              label: "x轴",
              value: 'x'
            },
            {
              label: "y轴",
              value: 'y'
            },
          ]
        },
        {
          title: '线的颜色',
          describe: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval("contents.tooltip.axisPointer.type !== 'shadow'");
          },
          remark: '',
          model: "contents.tooltip.axisPointer.lineStyle.color",
          component: 'webInputColor'
        },
        {
          title: '线的宽度',
          describe: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval("contents.tooltip.axisPointer.type !== 'shadow'");
          },
          remark: '',
          model: "contents.tooltip.axisPointer.lineStyle.width",
          component: 'webInputNum'
        },
        {
          title: '线的类型',
          describe: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval("contents.tooltip.axisPointer.type !== 'shadow'");
          },
          remark: '',
          model: "contents.tooltip.axisPointer.lineStyle.type",
          component: 'webSelect',
          options: [{
              label: "实线",
              value: 'solid'
            }, {
              label: "虚线",
              value: 'dashed'
            },
            {
              label: "点",
              value: 'dotted'
            },
          ]
        },
        {
          title: '阴影颜色',
          describe: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval("contents.tooltip.axisPointer.type === 'shadow'");
          },
          remark: '',
          model: "contents.tooltip.axisPointer.shadowStyle.color",
          component: 'webInputColor'
        },
        {
          title: '线2的颜色',
          describe: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval("contents.tooltip.axisPointer.type === 'cross'");
          },
          remark: '',
          model: "contents.tooltip.axisPointer.crossStyle.color",
          component: 'webInputColor'
        },
        {
          title: '线2的宽度',
          describe: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval("contents.tooltip.axisPointer.type === 'cross'");
          },
          remark: '',
          model: "contents.tooltip.axisPointer.crossStyle.width",
          component: 'webInputNum'
        },
        {
          title: '线2的类型',
          describe: '',
          isShow(opts) {
            let self = opts.self || this;
            let contents = opts.contents;
            return eval("contents.tooltip.axisPointer.type === 'cross'");
          },
          remark: '',
          model: "contents.tooltip.axisPointer.crossStyle.type",
          component: 'webSelect',
          options: [{
              label: "实线",
              value: 'solid'
            }, {
              label: "虚线",
              value: 'dashed'
            },
            {
              label: "点",
              value: 'dotted'
            },
          ]
        },
        {
          title: '自动吸附',
          describe: '',
          remark: '',
          isShow() {
            return false;
          },
          model: "contents.tooltip.axisPointer.snap",
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
        {
          title: '底部标签',
          describe: '',
          remark: '',
          model: "contents.tooltip.axisPointer.label.show",
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
          title: '标签格式化',
          describe: '',
          remark: '',
          model: "contents.tooltip.axisPointer.label.formatter",
          component: 'webInputText',
        },
        {
          title: '标签字大小',
          describe: '',
          remark: '',
          min: 0,
          model: "contents.tooltip.axisPointer.label.fontSize",
          component: 'webInputNum'
        },
        {
          title: '标签字颜色',
          describe: '',
          remark: '',
          model: "contents.tooltip.axisPointer.label.color",
          component: 'webInputColor'
        },
        {
          title: '标签背景色',
          describe: '',
          remark: '',
          model: "contents.tooltip.axisPointer.label.backgroundColor",
          component: 'webInputColor'
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
            return others.datasways === 2
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
            return others.datasways === 3
          },
          init(opt, cb) {
            let self = opt.self;
            let setting = opt.setting;
            self.$api.get(self.CONFIG.REST.dataSourceList).then(data => {
              if (data.status === 'ok') {
                let arr = [];
                for (let i = 0; i < data.data.length; i++) {
                  let o = {
                    label: data.data[i]['dsname'],
                    value: data.data[i]['dsid']
                  };
                  arr.push(o);
                }
                setting.options = arr;
              }
            });
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
            return others.datasways === 3
          },
          reformat(value) {
            return value.replace(/[\n\r]/g, ' ')
          },
          model: "others.datasql",
          component: 'webInputTextarea',
          options: []
        },
        {
          title: '请求JSON数据',
          describe: '',
          icon: 'icon-msnui-cloud-download',
          remark: '',
          loading: false,
          isShow(opt) {
            let others = opt.others;
            return others.datasways === 3;
          },
          click(opt, cb) {
            let self = opt.self;
            let setting = opt.setting;
            let contents = opt.contents;
            let others = opt.others;
            setting.loading = true;
            let str = "self.$options.methods.getChartData(self,'" + others.datasource + "','" + others.datasql + "',cb)";
            self.$options.methods.triggerMethod(self, str, (err, data) => {
              if (!err) {
                others.datajson = data;
              } else {
                self.$message.error('请求失败');
              }
              setTimeout(() => {
                setting.loading = false;
              }, 800);
              if (cb) cb();
            })
          },
          component: 'webInputConfirm',
          options: []
        },
        {
          title: '数据/结果',
          describe: '请求后的JSON数据',
          rows: 14,
          loading: false,
          remark: '',
          init(opt, cb) {
            let others = opt.others;
            let contents = opt.contents;
            others.datajson = contents.dataset.source;
            if (cb) cb();
          },
          format(val) {
            let str = val;
            if (typeof val === 'object')
              try {
                str = JSON.stringify(val, null, ' ')
              } catch (e) {
                str = val;
              }
            return str;
          },
          reformat(val) {
            let str = val;
            if (typeof val === 'string')
              try {
                str = JSON.parse(val)
              } catch (e) {
                str = val;
              }
            return str;
          },
          disabled: true,
          model: "others.datajson",
          component: 'webInputTextarea',
        },
        {
          title: ' 更新数据',
          describe: '',
          loading: false,
          btnclass: 'dn_daset_rfbtn',
          icon: 'icon-shuaxin1',
          remark: '',
          click(opt, cb) {
            let self = opt.self;
            let contents = opt.contents;
            let json = opt.others.datajson;
            opt.setting.loading = true;
            if (typeof opt.others.datajson === 'string') {
              let temp = opt.others.datajson.replace(/\'/g, "\"");
              try {
                json = JSON.parse(temp)
              } catch (e) {
                setTimeout(() => {
                  opt.setting.loading = false;
                }, 500);
                return self.$message.error('更新失败：数据集不是有效的JSON字符串');
              }
            }
            contents.dataset.source = json;
            self.$emit("updateValue", contents.dataset.source, "contents.dataset.source", opt.cid);
            opt.others.updated++;
            setTimeout(() => {
              opt.setting.loading = false;
            }, 500);
            if (cb) cb();
          },
          component: 'webInputConfirm',
          options: []
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
            let arr = [];
            let d = opt.contents.dataset.source;
            if (d && d !== '') {
              let type = self.$tool.getType(d);
              if (type === 'string') d = JSON.parse(d);
              type = self.$tool.getType(d);
              if (type === 'array' && d.length > 0)
                for (let k in d[0]) {
                  arr.push({
                    label: k,
                    value: k
                  });
                  if (typeof d[0][k] === 'string') {
                    // opt.contents.series[0].encode.x = k;
                  }
                }
            }
            opt.setting.options = arr;
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
            let arr = [];
            let d = opt.contents.dataset.source;
            if (d && d !== '') {
              let type = self.$tool.getType(d);
              if (type === 'string') d = JSON.parse(d);
              type = self.$tool.getType(d);
              if (type === 'array' && d.length > 0)
                for (let k in d[0]) {
                  arr.push({
                    label: k,
                    value: k
                  });
                  let x = '';
                  if (typeof d[0][k] === 'number') {
                    // opt.contents.series[0].encode.y = k;
                  }
                }
            }
            opt.setting.options = arr;
            if (cb) cb();
          },
          model: "contents.series[0].encode.y",
          component: 'webSelect',
          options: []
        },
      ]
    },
    {
      groupName: '联动',
      groupType: 'g2',
      members: [{
          title: '联 动',
          describe: '',
          remark: '',
          model: "others.isLinkage",
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
          title: '触发方式',
          describe: '',
          remark: '',
          model: "others.triggerLink",
          component: 'webSelect',
          options: [{
              label: '点击',
              value: 'click'
            },
            {
              label: '双击',
              value: 'dblclick'
            }
          ]
        },
        {
          title: '联动类型',
          describe: '',
          remark: '',
          model: "others.linkageType",
          component: 'webSelect',
          options: [{
              label: '维度',
              value: 'x'
            },
            {
              label: '度量',
              value: 'y'
            }
          ]
        },
        {
          title: '联动图表',
          describe: '选择联动的图表',
          remark: '',
          visibleChange(opt) {
            let self = opt.self;
            if (opt.status) {
              let str = 'self.$options.methods.getAllActiveReport(self,"' + opt.cid + '",cb)'
              self.$options.methods.triggerMethod(self, str, (arr) => {
                opt.setting.options = arr || [];
              })
            }
          },
          multiple: true,
          model: "others.linkArrs",
          component: 'webSelect',
          options: []
        },
      ]
    },
    {
      groupName: '钻取',
      groupType: 'g2',
      members: [{
          title: '钻 取',
          describe: '',
          remark: '',
          model: "others.isDrill",
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
          title: '触发方式',
          describe: '',
          remark: '',
          model: "others.triggerType",
          component: 'webSelect',
          options: [{
              label: '点击',
              value: 'click'
            },
            {
              label: '双击',
              value: 'dblclick'
            }
          ]
        },
        {
          title: '钻取类型',
          describe: '',
          remark: '',
          model: "others.drillType",
          component: 'webSelect',
          options: [{
              label: '维度',
              value: 'x'
            },
            {
              label: '度量',
              value: 'y'
            }
          ]
        },
        {
          title: ' 编辑钻取页面',
          describe: '',
          btnclass: 'dn_drillbtn',
          icon: 'icon-baocunbingxiayibu',
          remark: '',
          click(opt, cb) {
            let self = opt.self;
            let cid = opt.cid;
            let others = opt.others;
            let parentId = self.$route.query.reportId;
            others.childId = others.childId || self.$tool.getUuid();
            let url = 'http://localhost:8080/#/design-child?parentId=' + parentId + '&moduleId=' + cid + '&rid=' + others.childId;
            window.open(url);
            return;
            self.$confirm('是否保存当前页面，并打开钻取的页面?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let str = "self.$options.methods.save(self,cb)";
              self.$options.methods.triggerMethod(self, str, (result) => {
                if (!result) return;
                let url = 'http://localhost:8080/#/design-child?parentId=' + parentId + '&moduleId=' + cid;
                window.open(url);
              })
            })
            if (cb) cb();
          },
          component: 'webInputConfirm',
          options: []
        },

      ]
    },
  ],
  //  内容（chart配置）
  contents: {
    title: {
      show: true,
      text: "表格",
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
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        axis: 'auto',
        label: {
          show: true,
          formatter: '{value}',
          color: '#fff',
          fontSize: '12',
          backgroundColor: '#000',
        },
        lineStyle: {
          color: '#555',
          width: 1,
          type: 'solid',
        },
        shadowStyle: {
          color: 'rgba(150,150,150,0.3)'
        },
        crossStyle: {
          color: '#555',
          width: 1,
          type: 'solid'
        },
      },
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
    legend: {
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
    grid: {
      show: true,
      left: '4%',
      top: 65,
      right: '4%',
      bottom: 17,
      height: 'auto',
      width: 'auto',
      backgroundColor: 'transparent',
      borderColor: '#ccc',
      borderWidth: 1,
      containLabel: true
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
      boundaryGap: true, //中间描点
    },
    yAxis: {
      name: "销售量",
      position: 'left',
      show: true,
      type: 'value',
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
      splitLine: {
        show: true
      },
      splitArea: {
        show: false
      },
      boundaryGap: false, //中间描点
    },
    series: [{
      name: '销售量',
      type: 'bar',
      smooth: false, // 曲线
      step: false,
      barWidth: 0,
      barGap: 0,
      label: {
        show: false,
        position: 'top',
        rotate: 0,
        fontSize: 12,
        color: '#333',
        // formatter:'',
      },
      itemStyle: {
        color: '#d53a35',
        barBorderRadius: 0
      },
      encode: {
        x: '年份',
        y: '销售量'
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
          '销售量': 2850
        },
        {
          '年份': '2021',
          '销售量': 2100
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
    openMenu: [1, 2, 9],
    datasways: 1, //获取方式
    datasource: "", //数据源
    datasql: "select a.natural_village_name,count(b.building_id ) as count from building b left join natural_village a on a.natural_village_id=b.natural_village_id GROUP BY a.natural_village_name", //sql语句
    datasurl: "", //URL地址
    datajson: [],
    updated: 1,
    isDrill: false,
    drillType: 'x',
    triggerType: 'click',
    childId: '',
    isLinkage: false,
    linkageType: 'x',
    triggerLink: 'click',
    linkArrs: [],
  }
};



opt = Object.assign({}, template, opt);
export default opt;
