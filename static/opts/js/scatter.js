import template from './template'

let opt = {
  //   名称
  name: 'scatter',
  //  Grid 配置
  //  可配置项
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
        }

        // {
        //   title: '文本格式化',
        //   describe: '',
        //   remark: '{a}:系列名，{b}:数据名，{c}:数据值',
        //   model: "contents.series[0].label.formatter",
        //   component: 'webInputText'
        // },
      ]
    }, {
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
    }, {
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
              value: ['none', 'none'],
            }, {
              label: '右边箭头',
              value: ['none', 'arrow'],
            },
            {
              label: '左边箭头',
              value: ['arrow', 'none'],
            },
            {
              label: '双边箭头',
              value: ['arrow', 'arrow'],
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
              value: ['none', 'none'],
            }, {
              label: '上边箭头',
              value: ['none', 'arrow'],
            },
            {
              label: '下边箭头',
              value: ['arrow', 'none'],
            },
            {
              label: '双边箭头',
              value: ['arrow', 'arrow'],
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
            return contents.tooltip.axisPointer.type !== 'shadow';
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
            return contents.tooltip.axisPointer.type !== 'shadow';
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
            return contents.tooltip.axisPointer.type !== 'shadow';
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
            return contents.tooltip.axisPointer.type === 'shadow';
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
            return contents.tooltip.axisPointer.type === 'cross';
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
            return contents.tooltip.axisPointer.type === 'cross';
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
            return contents.tooltip.axisPointer.type === 'cross'
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
      text: "散点图",
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
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'line',
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
      data: ['13', '9'],
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
