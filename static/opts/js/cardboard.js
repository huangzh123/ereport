import template from './template'

let opt = {
  //   名称
  name: 'cardboard',
  // 是否是自定义组件
  component: 'cutmCardboard',
  grid: {
    "position-x": "0",
    "position-y": "0",
    "width": "12",
    "height": "6",
    "max-width": "60",
    "min-width": "1",
    "max-height": "100",
    "min-height": "1"
  },
  opts: [{
      groupName: '常规',
      groupType: 'g1',
      members: [{
          title: '背景色',
          describe: '',
          remark: '',
          model: "contents.backgroundColor",
          component: 'webInputColor'
        },
        {
          title: '主看板',
          describe: '',
          remark: '',
          model: "contents.card.show",
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
          title: '副看板-1',
          describe: '',
          remark: '',
          model: "contents.card_2.show",
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
          title: '副看板-2',
          describe: '',
          remark: '',
          model: "contents.card_3.show",
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
      ]
    },
    {
      groupName: '主看板-标题',
      groupType: 'g1',
      members: [{
          title: '标 题', // 名称
          describe: '主看板标题', // 描述
          remark: '10个字符', // 备注
          model: "contents.card.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.card.title.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          format(val) {
            return val + 'px';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 2))
          },
          min: 0,
          model: "contents.card.title.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '对齐方式',
          describe: '',
          remark: '',
          model: "contents.card.title.textStyle.textAlign",
          component: 'webSelect',
          options: [{
              label: '左对齐',
              value: 'left',
            },
            {
              label: '居中',
              value: 'center',
            },
            {
              label: '右对齐',
              value: 'right',
            }
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
          model: "contents.card.title.textStyle.left",
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
          model: "contents.card.title.textStyle.right",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.card.title.textStyle.top",
          component: 'webInputSlider'
        },
      ]
    },
    {
      groupName: '主看板-数据',
      groupType: 'g1',
      members: [{
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.card.data.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          format(val) {
            return val + 'px';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 2))
          },
          min: 0,
          model: "contents.card.data.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '对齐方式',
          describe: '',
          remark: '',
          model: "contents.card.data.textStyle.textAlign",
          component: 'webSelect',
          options: [{
              label: '左对齐',
              value: 'left',
            },
            {
              label: '居中',
              value: 'center',
            },
            {
              label: '右对齐',
              value: 'right',
            }
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
          model: "contents.card.data.textStyle.left",
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
          model: "contents.card.data.textStyle.right",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.card.data.textStyle.top",
          component: 'webInputSlider'
        },
      ]
    },
    {
      groupName: '副看板1-标题',
      groupType: 'g1',
      members: [{
          title: '标 题', // 名称
          describe: '主看板标题', // 描述
          remark: '10个字符', // 备注
          model: "contents.card_2.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.card_2.title.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          format(val) {
            return val + 'px';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 2))
          },
          min: 0,
          model: "contents.card_2.title.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '对齐方式',
          describe: '',
          remark: '',
          model: "contents.card_2.title.textStyle.textAlign",
          component: 'webSelect',
          options: [{
              label: '左对齐',
              value: 'left',
            },
            {
              label: '居中',
              value: 'center',
            },
            {
              label: '右对齐',
              value: 'right',
            }
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
          model: "contents.card_2.title.textStyle.left",
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
          model: "contents.card_2.title.textStyle.right",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.card_2.title.textStyle.top",
          component: 'webInputSlider'
        },
      ]
    },
    {
      groupName: '副看板1-数据',
      groupType: 'g1',
      members: [{
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.card_2.data.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          format(val) {
            return val + 'px';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 2))
          },
          min: 0,
          model: "contents.card_2.data.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '对齐方式',
          describe: '',
          remark: '',
          model: "contents.card_2.data.textStyle.textAlign",
          component: 'webSelect',
          options: [{
              label: '左对齐',
              value: 'left',
            },
            {
              label: '居中',
              value: 'center',
            },
            {
              label: '右对齐',
              value: 'right',
            }
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
          model: "contents.card_2.data.textStyle.left",
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
          model: "contents.card_2.data.textStyle.right",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.card_2.data.textStyle.top",
          component: 'webInputSlider'
        },
      ]
    },
    {
      groupName: '副看板2-标题',
      groupType: 'g1',
      members: [{
          title: '标 题', // 名称
          describe: '主看板标题', // 描述
          remark: '10个字符', // 备注
          model: "contents.card_3.title.text", //绑定的字段
          component: 'webInputText', //使用的web组件
        },
        {
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.card_3.title.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          format(val) {
            return val + 'px';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 2))
          },
          min: 0,
          model: "contents.card_3.title.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '对齐方式',
          describe: '',
          remark: '',
          model: "contents.card_3.title.textStyle.textAlign",
          component: 'webSelect',
          options: [{
              label: '左对齐',
              value: 'left',
            },
            {
              label: '居中',
              value: 'center',
            },
            {
              label: '右对齐',
              value: 'right',
            }
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
          model: "contents.card_3.title.textStyle.left",
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
          model: "contents.card_3.title.textStyle.right",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.card_2.title.textStyle.top",
          component: 'webInputSlider'
        },
      ]
    },
    {
      groupName: '副看板2-数据',
      groupType: 'g1',
      members: [{
          title: '字体颜色',
          describe: '',
          remark: '',
          model: "contents.card_3.data.textStyle.color",
          component: 'webInputColor'
        },
        {
          title: '字体大小',
          describe: '',
          remark: '',
          min: 12,
          format(val) {
            return val + 'px';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 2))
          },
          min: 0,
          model: "contents.card_3.data.textStyle.fontSize",
          component: 'webInputNum'
        },
        {
          title: '对齐方式',
          describe: '',
          remark: '',
          model: "contents.card_3.data.textStyle.textAlign",
          component: 'webSelect',
          options: [{
              label: '左对齐',
              value: 'left',
            },
            {
              label: '居中',
              value: 'center',
            },
            {
              label: '右对齐',
              value: 'right',
            }
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
          model: "contents.card_3.data.textStyle.left",
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
          model: "contents.card_3.data.textStyle.right",
          component: 'webInputSlider'
        },
        {
          title: '顶部距离',
          describe: '',
          remark: '',
          format(val) {
            return val + '%';
          },
          initformat(val) {
            return parseInt(val.substr(0, val.length - 1))
          },
          model: "contents.card_3.data.textStyle.top",
          component: 'webInputSlider'
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
            others.datajson = contents.dataset;
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
            contents.dataset = json;
            self.$emit("updateValue", contents.dataset, "contents.dataset", opt.cid);
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
  ],
  //  内容（chart配置）
  contents: {
    card: {
      show: true,
      title: {
        text: "本月销售总额",
        textStyle: {
          textAlign: 'left',
          left: '5%',
          top: '10%',
          right: '5%',
          color: "#333",
          fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
          fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
          fontSize: '15px',
        },
      },
      data: {
        textStyle: {
          textAlign: 'left',
          left: '5%',
          top: '25%',
          right: '5%',
          color: "rgb(249, 174, 1)",
          fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
          fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
          fontSize: '28px',
        },
      },
    },
    card_2: {
      show: true,
      title: {
        text: "本月成交数",
        textStyle: {
          textAlign: 'left',
          left: '5%',
          top: '60%',
          right: '55%',
          color: "#333",
          fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
          fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
          fontSize: '14px',
        },
      },
      data: {
        textStyle: {
          textAlign: 'left',
          left: '5%',
          top: '75%',
          right: '55%',
          color: "rgb(249, 174, 1)",
          fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
          fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
          fontSize: '23px',
        },
      },
    },
    card_3: {
      show: true,
      title: {
        text: "成交率",
        textStyle: {
          textAlign: 'left',
          left: '55%',
          top: '60%',
          right: '5%',
          color: "#333",
          fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
          fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
          fontSize: '14px',
        },
      },
      data: {
        textStyle: {
          textAlign: 'left',
          left: '55%',
          top: '75%',
          right: '5%',
          color: "rgb(249, 174, 1)",
          fontWeight: "normal", //normal\bold\bolder\lighter 100\200\300\400
          fontFamily: 'SimHei', // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
          fontSize: '23px',
        },
      },
    },
    dataset: {
      data: '4,567万',
      data_2: '1,567',
      data_3: '86.70%',
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
