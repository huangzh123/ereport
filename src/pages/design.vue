<template>
    <div id="design" class="dn_ctn" :class="[showReviewModel?'dn_reviewing':'',containerType === 'app'?'dn_app_container':'']">
        <div class="dn_head">
            <div class="dn_backbtn" @click="$router.go(-1)"><i class="iconfont icon-back"></i></div>
            <div class="dn_toptitle">
                <span class="dn_title"><i class="iconfont dn_ticn icon-icon"></i><span>{{title}}</span><i class="iconfont dn_tmd icon-xiugai"></i></span>
            </div>
            <div class="dn_btngroup">
                <div class="dn_btngroup_item" @click="review(null)" v-show="showReviewModel">
                    <i class="iconfont dn_ticn icon-bukejian"></i><span>取消预览</span>
                </div>
                <div class="dn_btngroup_item" @click="designModel = 'pc'" v-show=" designModel === 'app' && !showReviewModel">
                    <i class="iconfont dn_ticn icon-qiehuanzhanghao"></i><span>切换PC端设计</span>
                </div>
                <div class="dn_btngroup_item" @click="designModel = 'app'" v-show=" designModel === 'pc' && !showReviewModel ">
                    <i class="iconfont dn_ticn icon-qiehuanzhanghao"></i><span>切换手机端设计</span>
                </div>
                <div class="dn_btngroup_item" v-show="!showReviewModel">
                    <i class="iconfont dn_ticn icon-review"></i><span>预览</span><i class="iconfont dn_down icon-xiala1"></i>
                    <div class="dn_mod">
                        <ul>
                            <li @click="review('pc')"><i class="iconfont dn_ticn icon-PC "></i><span>PC端预览</span></li>
                            <li @click="review('app')"><i class="iconfont dn_ticn icon-shouji1"></i><span>手机端预览</span></li>
                        </ul>
                    </div>
                </div>
                <div class="dn_btngroup_item" >
                    <i class="iconfont dn_ticn icon-tubiao212"></i><span>分享</span>
                </div>
                <div class="dn_btngroup_item"  v-show="!showReviewModel">
                    <i class="iconfont dn_ticn icon-baocun"></i><span>保存</span><i class="iconfont dn_down icon-xiala1"></i>
                    <div class="dn_mod">
                        <ul>
                            <li @click="save"><i class="iconfont dn_ticn icon-baocun1"></i><span>保存</span></li>
                            <li><i class="iconfont dn_ticn icon-lingcunwei1"></i><span>另存为</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="dn_body">
            <div id="dn_work" class="dn_work">
                <div class="dn_work_content" >
                    <div class="review-phtitle">{{title}}</div>
                    <div class="dn_work_body" v-loading='loading_total'  element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)">
                         <div class="dn_tip" v-show="temps.length<=0 && !showReviewModel">
                                <h1 class="dn_tip_title">请“双击”右侧数据图表，开始吧！<i class="iconfont icon-emizhifeiji"></i></h1>
                        </div>
                        <div class="grid-stack" id="phone_design">
                           
                        </div>
                    </div>   
                </div>
            </div>
            <div class="dn_opts">
                <div class="dn_opts_menu">
                    <ul>
                        <li @click="menuIndex = 1" :class="[menuIndex === 1?'active':'']">页面设置</li>
                        <li @click="menuIndex = 2" :class="[menuIndex === 2?'active':'']">图表设置</li>
                        <li @click="menuIndex = 3" :class="[menuIndex === 3?'active':'']">模 板</li>
                    </ul>
                    <ul v-show="menuIndex === 2" class="child">
                        <li @click="menuIndex_child = 1" :class="[menuIndex_child === 1?'active':'']">仪表板</li>
                        <li @click="menuIndex_child = 2" :class="[menuIndex_child === 2?'active':'']">数据集</li>
                    </ul>
                    <div class="dn_opts_contmenu" v-show="menuIndex === 3">
                        <el-radio-group v-model="radio5" size="small">
                            <el-radio-button label="我的模板"></el-radio-button>
                            <el-radio-button label="系统模板"></el-radio-button>
                        </el-radio-group>
                        <div class="dn_opts_modselt">
                            <el-select value="全部">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <!-- 常规配置 -->
                <div class="dn_opts_cont" v-show="menuIndex === 1">
                    <inputText style="margin-top:15px" title="页面标题" placeholder="请输入页面标题" :value="title" remark="" v-on:updateValue="(v)=>{title = v}"></inputText>
                    <webInputColor style="margin-top:15px" :setting="{title:'背景颜色'}"></webInputColor>
                    <inputText style="margin-top:15px" title="页面描述" placeholder="请输入页面描述" :value="title" remark="" v-on:updateValue="(v)=>{title = v}"></inputText>
                </div>
                <!-- 图表配置-仪表板 -->
                <div class="dn_opts_cont" v-show="menuIndex === 2 && menuIndex_child === 1">
                    <el-collapse :value='(temps[currentIndex] && temps[currentIndex].others && temps[currentIndex].others.openMenu)? temps[currentIndex].others.openMenu : [1,2,3,4,5,6,7,8,9]'>
                        <el-collapse-item title="数据图表" :name="1">
                            <div class="dn_opts_datatype">
                                <el-tooltip v-for="(item,index) in tables" :key="index" class="item" :enterable="false" effect="dark" :content="item.name" :placement="item.position || 'top'">
                                    <div class="dn_opts_dtitm" @dblclick="addGrid(item.type)" :class="[index === tableSelect?'active':'']">
                                        <!-- <div class="dn_opts_dtitm" @dblclick="addGrid(item.type)" @click="tableSelect = index" :class="[index === tableSelect?'active':'']"> -->
                                        <img :src="item.img" alt="">
                                    </div>
                                </el-tooltip>
                            </div>
                        </el-collapse-item>
                        <template v-if="temps[currentIndex] && temps[currentIndex].opts ">
                            <el-collapse-item v-if="item.groupType === 'g1'"  v-for="(item,index) in temps[currentIndex].opts"  :key="index+'_opts_g1'"  :title="item.groupName" :name="index+2" >
                                <template v-for="(member,j) in item.members">
                                    <div 
                                        :is="member.component" 
                                        :key="j+'_opts_g1'" 
                                        :cid = "temps[currentIndex].id"
                                        :setting="member" 
                                        :contents="temps[currentIndex].contents" 
                                        :others="temps[currentIndex].others" 
                                        v-on:updateValue="updateValue">
                                    </div>
                                </template>
                            </el-collapse-item>
                        </template>
                    </el-collapse>
                </div>
                <!-- 图表配置-数据集 -->
                <div class="dn_opts_cont" v-show="menuIndex === 2 && menuIndex_child === 2">
                    <el-collapse :value='(temps[currentIndex] && temps[currentIndex].others && temps[currentIndex].others.openMenu)? temps[currentIndex].others.openMenu : [1,2,3,4,5,6,7,8,9]'>
                        <template v-if="temps[currentIndex] && temps[currentIndex].opts ">
                            <el-collapse-item v-if="item.groupType === 'g2'" v-for="(item,index) in temps[currentIndex].opts" :key="index+'_opts_g2'" :title="item.groupName" :name="index+2">
                                <template v-for="(member,j) in item.members">
                                    <div 
                                        :is="member.component" 
                                        :key="j+'_opts_g2'" 
                                        :cid = "temps[currentIndex].id"
                                        :watch = "temps[currentIndex].others?temps[currentIndex].others.updated:null"
                                        :setting="member" 
                                        :contents="temps[currentIndex].contents" 
                                        :others="temps[currentIndex].others" 
                                        v-on:updateValue="updateValue">
                                    </div>
                                </template>
                            </el-collapse-item>
                        </template>
                    </el-collapse>
                    <div class="dn_daset_btn dn_daset_rfbtn">
                        <el-button type="primary" size="medium" @click="refresh"><i class="iconfont dn_ticn icon-shuaxin"></i>更新图表</el-button>
                    </div>
                </div>
                <!-- 模板 -->
                <div class="dn_opts_cont" v-show="menuIndex === 3">
                    <div class="dn_opts_rdo">
                        <div class="dn_opts_modbdy">
                            <div class="dn_moditm dn_moditm_pc">
                                <img src="../assets/mod2.jpg" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                            <div class="dn_moditm dn_moditm_pc">
                                <img src="../assets/mod2.jpg" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                            <div class="dn_moditm dn_moditm_pc">
                                <img src="../assets/mod2.jpg" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                            <div class="dn_moditm dn_moditm_pc">
                                <img src="../assets/mod2.jpg" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                            <div class=" dn_moditm dn_moditm_app">
                                <img src="../assets/mod1.png" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                            <div class=" dn_moditm dn_moditm_app">
                                <img src="../assets/mod1.png" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                            <div class=" dn_moditm dn_moditm_app">
                                <img src="../assets/mod1.png" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                            <div class=" dn_moditm dn_moditm_app">
                                <img src="../assets/mod1.png" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--缓存拖拉插件-->
        <div id="dummy" v-show="0">
            <div class="grid-stack-item" data-gs-auto-position v-for="(temp,index) in temps" :key="index" :index="index" v-if="temp" :id="temp.id">
                <div class="grid-stack-item-content">
                    <div class="dn_grid_body" @click="selectGrid(temp.id,index)" :class="{active:index === currentIndex}" :id="temp.id+'_dump'"  v-loading='temp.loading_sigle'></div>
                    <i class="iconfont dn_delbtn icon-iconset0127" @click="delGrid(temp.id)"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let config = require("../conf_charts.js").CONF;
import _opts from "../../static/opts/js/index";
import { Loading } from "element-ui";
import webInputText from "../components/web/inputText.vue";
import webInputTextarea from "../components/web/inputTextarea.vue";
import webInputColor from "../components/web/inputColor.vue";
import webInputRadios from "../components/web/inputRadios.vue";
import webSelect from "../components/web/select.vue";
import webSelectMap from "../components/web/selectMap.vue";
import webTips from "../components/web/tips.vue";
import webInputRadio from "../components/web/inputRadio.vue";
import webInputNum from "../components/web/inputNum.vue";
import webInputDate from "../components/web/inputDate.vue";
import webOptions from "../components/web/options.vue";
import webInputSlider from "../components/web/inputSlider.vue";
import webInputConfirm from "../components/web/inputConfirm.vue";
// others
import inputText from "../components/others/inputText.vue";
export default {
  data() {
    return {
      //页面标题
      title: "",
      //请求后台接口的源数据
      source: null,
      //缓存GRID插件数组
      temps: [],
      //当前被选中的图表
      currentIndex: 0,
      //右侧配置菜单的选中项
      menuIndex: 2,
      //图表设置子菜单的选中项
      menuIndex_child: 1,
      radio_source: "1", //数据源的获取方式
      radio5: "我的模板",
      //0：pc 1：app
      containerType: "pc",
      //设计模式
      designModel: "pc",
      //预览
      showReviewModel: null,
      //仪表盘种类
      tables: [
        {
          img: require("../assets/line.png"),
          name: "线图",
          type: "line"
        },
        {
          img: require("../assets/bar.png"),
          name: "柱图",
          type: "bar"
        },
        {
          img: require("../assets/pie.png"),
          name: "饼图",
          type: "pie"
        },
        {
          img: require("../assets/map-bubble.png"),
          name: "气泡地图",
          type: "mapBubble"
        },
        {
          img: require("../assets/map-color.png"),
          name: "色彩地图",
          type: "mapColor"
        },
        {
          img: require("../assets/gauge.png"),
          name: "仪盘表",
          type: "gauge"
        },
        {
          img: require("../assets/radar.png"),
          name: "雷达图",
          type: "radar",
          position: "bottom"
        },
        {
          img: require("../assets/scatter.png"),
          name: "散点图",
          type: "scatter",
          position: "bottom"
        },
        {
          img: require("../assets/funnel.png"),
          name: "漏斗图",
          type: "funnel",
          position: "bottom"
        },
        // {
        //     img: require("../assets/indicator.png"),
        //     name: "指标看板",
        //     position: "bottom"
        // },
        {
          img: require("../assets/polar.png"),
          name: "极坐标图",
          type: "sunburst",
          position: "bottom"
        }
        // {
        //     img: require("../assets/wordcolor.png"),
        //     name: "词云图",
        //     position: "bottom"
        // },
      ],
      //当前选中的仪表盘
      tableSelect: "",
      //数据源
      setting_datasource: {
        title: "数据源",
        desc: "",
        options: [],
        placeholder: "请选择数据库"
      },
      loading_total: true,
      map: null,
      temp_loading: {},
      //
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ]
    };
  },
  methods: {
    // 新增图表
    addGrid(type) {
      let self = this;
      let temp = this.$tool.copy_echarts(_opts[type || "line"], true);
      // let temp = this.$tool.copy_echarts(config[type || 'line'], true);
      temp["id"] = this.$tool.getUuid();
      temp.loading_sigle = true;
      self.$options.methods.renderChart(self, temp, "phone_design", myChart => {
        myChart.resize();
      });
    },
    //渲染图表
    renderChart(self, temp, containerID, cb, auto) {
      self = self || this;
      self.temps.push(temp);
      if (auto === undefined) auto = true;
      self.currentIndex = self.temps.length - 1;
      self.$nextTick(vm => {
        var myChart = self.CONFIG.ECHARTS.init(
          document.getElementById(temp.id + "_dump")
        );
        let option = temp.contents;
        self.$options.methods.resetOption(self, myChart, option);
        let gridstack = $("#" + containerID).data("gridstack");
        gridstack.addWidget(
          "#" + temp.id,
          temp["grid"]["position-x"],
          temp["grid"]["position-y"],
          temp["grid"]["width"],
          temp["grid"]["height"],
          auto,
          temp["grid"]["min-width"],
          temp["grid"]["max-width"],
          temp["grid"]["min-height"],
          temp["grid"]["max-height"]
        );
        setTimeout(() => {
          temp.loading_sigle = false;
        }, 500);
        if (cb) cb(myChart);
      });
    },
    //根据配置渲染编辑器
    renderChartsByConfig(self, conf, containerID, cb) {
      self = self || this;
      let t = 500;
      if (conf && typeof conf === "object") {
        containerID = containerID || "phone_design";
        let gridstack = $("#" + containerID).data("gridstack");
        gridstack.removeAll();
        for (let i = 0; i < conf.length; i++) {
          let temp = conf[i];
          let _t = self.$tool.copy_echarts(_opts[temp.name || "line"], true);
          temp.opts = _t.opts;
          temp["id"] = self.$tool.getUuid();
          self.$options.methods.renderChart(
            self,
            temp,
            containerID,
            myChart => {
              myChart.resize();
            },
            false
          );
        }
        t = conf.length * 100;
      }
      setTimeout(() => {
        self.loading_total = false;
      }, t);
    },
    //重设echarts参数
    resetOption(self, myChart, option) {
      self = self || this;
      try {
        if (option.series[0].type.indexOf("map") !== -1) {
          self.$options.methods.getJson(self, option.series[0].map, () => {
            myChart.setOption(option);
          });
        } else if (option.series[0].type.indexOf("scatter") !== -1) {
          self.$options.methods.getJson(self, option.geo.map, () => {
            myChart.setOption(option);
          });
        } else {
          myChart.setOption(option);
        }
      } catch (e) {
        myChart.setOption(option);
      }
    },
    // 删除图表
    delGrid(id) {
      this.currentIndex = null;
      let gridstack = $("#phone_design").data("gridstack");
      gridstack.removeWidget("#" + id);
    },
    //选中图表
    selectGrid(id, index) {
      if (this.showReviewModel) return;
      this.currentIndex = index;
      //   if (this.setmenu_index === 0) this.setmenu_index = 1;
    },
    //获取地图配置文件
    getJson(self, name, cb) {
      self = self || this;
      self.$api
        .get("../../static/map/json/province/" + name + ".json")
        .then(data => {
          self.CONFIG.ECHARTS.registerMap(name, data);
          if (cb) cb();
        });
    },
    //数据更新
    updateValue(value, model, id) {
      eval("this.temps[" + this.currentIndex + "]." + model + "=value");
      if (!id) return;
      let echartsInstance = this.CONFIG.ECHARTS.getInstanceByDom(
        document.getElementById(id + "_dump")
      );
      this.$options.methods.resetOption(
        this,
        echartsInstance,
        this.temps[this.currentIndex].contents
      );
    },
    //更新图表
    refresh() {
      let id = this.temps[this.currentIndex].id;
      let echartsInstance = this.CONFIG.ECHARTS.getInstanceByDom(
        document.getElementById(id + "_dump")
      );
      this.$options.methods.resetOption(
        this,
        echartsInstance,
        this.temps[this.currentIndex].contents
      );
    },
    //自适应图表的尺寸
    resizeEcharts(self, containerID, cb) {
      self = self || this;
      let echartsInstance = self.CONFIG.ECHARTS.getInstanceByDom(
        document.getElementById(containerID + "_dump")
      );
      echartsInstance.resize();
      if (cb) cb();
    },
    //调整当前所有图表的尺寸
    resizeAll(self, containerID) {
      self = self || this;
      containerID = containerID || "phone_design";
      _.map($("#" + containerID + " > .grid-stack-item:visible"), el => {
        let index = el.getAttribute("index");
        let id = el.id;
        let echartsInstance = self.CONFIG.ECHARTS.getInstanceByDom(
          document.getElementById(id + "_dump")
        );
        self.$options.methods.showLoading(self, echartsInstance, id);
        setTimeout(() => {
          echartsInstance.resize();
          setTimeout(() => {
            self.$options.methods.hideLoading(self, echartsInstance, id);
          }, 500);
        }, 800);
      });
    },
    //预览
    review(type) {
      let self = this;
      self.showReviewModel = type;
      let gridstack = $("#phone_design").data("gridstack");
      if (type) {
        gridstack.disable();
      } else {
        this.containerType = this.designModel;
        gridstack.enable();
      }
      if (type) this.containerType = type;
    },
    //保存
    save() {
      const self = this;
      let result = {
        dataJson: [],
        reportId: self.$route.query.reportId
      };
      let length = $("#phone_design > .grid-stack-item:visible").length;
      result.dataJson = [];
      _.map($("#phone_design > .grid-stack-item:visible"), function(el) {
        el = $(el);
        const node = el.data("_gridstack_node");
        let index = node.el[0].getAttribute("index");
        let obj = Object.assign({}, self.temps[index], {
          grid: {
            "position-x": node.x,
            "position-y": node.y,
            width: node.width,
            height: node.height
          }
        });
        obj.opts = undefined;
        result.dataJson.push(obj);
        // console.log(JSON.stringify(obj,null,"    "));
      });
      self.$api.post(self.CONFIG.REST.editChart, result).then(data => {
        if (data.status === "ok") {
          self.$tool.dialog("保存成功", "success");
        } else {
          self.$tool.dialog("保存失败", "error");
        }
      });
      //   console.log(JSON.stringify(result));
    },
    //获取页面详情
    getChartDetail(self, cb) {
      self = self || this;
      self.loading_total = true;
      let p = {
        reportId: self.$route.query.reportId
      };
      self.$api.post(self.CONFIG.REST.getChartDetail, p).then(data => {
        if (data.status === "ok") {
          self.source = data.data[0];
          self.title = data.data[0].reportname;
          let conf = data.data[0].datajson;
          if (typeof conf === "string") conf = JSON.parse(conf);
          self.$options.methods.renderChartsByConfig(self, conf, cb);
        } else {
          self.$tool.dialog("获取配置信息失败", "error");
        }
      });
    },
    //展示图表loading
    showLoading(self, myChart, target) {
      self = self || this;
      if (target) {
        let p = {
          target: document.getElementById(target)
        };
        if (self.temp_loading[target]) self.temp_loading[target].close();
        self.temp_loading[target] = Loading.service(p);
      } else {
        myChart.showLoading("default", {
          text: "",
          color: "#23b7e5",
          textColor: "#000",
          maskColor: "#ffffffde",
          zlevel: 0
        });
      }
    },
    //隐藏图表loading
    hideLoading(self, myChart, target) {
      self = self || this;
      if (target && self.temp_loading[target]) {
        self.temp_loading[target].close();
        self.temp_loading[target] = undefined;
      } else {
        myChart.hideLoading();
      }
    }
  },
  watch: {
    containerType(value) {
      this.$options.methods.resizeAll(this);
    },
    showReviewModel(value, old) {
      this.$options.methods.resizeAll(this);
    },
    designModel(val) {
      this.containerType = val;
    }
  },
  mounted() {
    let self = this;
    let options_design = {
      auto: false,
      // float: true,
      verticalMargin: 0,
      cellHeight: 40,
      // animate: true,
      rtl: true,
      placeholderClass: "dn_stack_placeholder"
    };
    self.loading_total = true;
    //拖拉控件初始化
    $("#phone_design").gridstack(options_design);
    //获取配置信息
    self.$options.methods.getChartDetail(self);
    //监听拖拉、移动 实时调整echarts的尺寸
    $(".grid-stack").on("change", (event, items) => {
      if (!items) return;
      for (let i = 0; i < items.length; i++)
        self.$options.methods.resizeEcharts(self, items[i].el[0].id);
    });
    //监听窗口变化 实时调整echarts的尺寸
    let width = document.documentElement.clientWidth;
    let setTime = null;
    window.onresize = () => {
      let w = document.documentElement.clientWidth;
      if (w === width) return;
      width = w;
      if (setTime) clearTimeout(setTime);
      setTime = setTimeout(() => {
        self.$options.methods.resizeAll(self);
      }, 500);
    };
  },
  components: {
    webInputText,
    webInputTextarea,
    webInputColor,
    webSelect,
    webSelectMap,
    webInputRadio,
    webInputRadios,
    webInputNum,
    webInputDate,
    webTips,
    webOptions,
    webInputSlider,
    webInputConfirm,
    inputText
  }
};
</script>

<style scoped>
@import "../assets/css/design.css";
</style>
