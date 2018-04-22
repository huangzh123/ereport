import template from './template'

let opt = {
  //   名称
  name: 'carousel',
  // 是否是自定义组件
  component: 'cutmCarousel',
  grid: {
    "position-x": "0",
    "position-y": "0",
    "width": "16",
    "height": "7",
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
        title: '字体颜色',
        describe: '',
        remark: '',
        model: "contents.itemTextStyle.color",
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
        model: "contents.itemTextStyle.fontSize",
        component: 'webInputNum'
      },
      {
        title: '对齐方式',
        describe: '',
        remark: '',
        model: "contents.itemTextStyle.textAlign",
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
        title: '鼠标悬停',
        describe: '',
        remark: '',
        model: "contents.isHoverStop",
        component: 'webSelect',
        options: [{
            label: "无",
            value: false
          }, {
            label: "停止滚动",
            value: true
          },

        ]
      },
      {
        title: '速  度',
        describe: '',
        remark: '速度不能大于等于延时时长',
        step: 100,
        max: 3000,
        model: "contents.speed",
        component: 'webInputSlider'
      },
      {
        title: '延  时',
        describe: '',
        remark: '速度不能大于等于延时时长',
        step: 100,
        max: 3000,
        model: "contents.delay",
        component: 'webInputSlider'
      },
      {
        title: '单元高度',
        describe: '',
        remark: '',
        format(val) {
          return val + 'px';
        },
        initformat(val) {
          return parseInt(val.substr(0, val.length - 2))
        },
        model: "contents.itemTextStyle.height",
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
    itemTextStyle: {
      height: "50px",
      fontSize: "12px",
      color: "#333",
      textAlign: "left",
    },
    isLoop: true,
    speed: 800,
    delay: 1000,
    backgroundColor: "#fff",
    isHoverStop: true,
    dataset: [
      '这是一条普通消息1,这是一条普通消息1',
      '这是一条普通消息2,这是一条普通消息2',
      '这是一条普通消息3,这是一条普通消息3',
      '这是一条普通消息4,这是一条普通消息4',
      '这是一条普通消息5,这是一条普通消息5',
      '这是一条普通消息6,这是一条普通消息6'
    ]
  },
  others: {
    openMenu: [1, 2, 3],
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
