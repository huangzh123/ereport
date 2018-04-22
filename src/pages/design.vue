<template>
    <div id="design" class="dn_ctn" :class="[showReviewModel?'dn_reviewing':'',containerType === 'app'?'dn_app_container':'']">
        <div class="dn_head">
            <div class="dn_backbtn" @click="$router.go(-1)" v-show="!isDrillDown"><i class="iconfont icon-back"></i></div>
            <div class="dn_toptitle">
                <span class="dn_title"><i class="iconfont dn_ticn icon-icon"></i><span>{{title}}</span><i class="iconfont dn_tmd icon-xiugai"></i></span>
            </div>
            <div class="dn_btngroup">
                <div class="dn_btngroup_item" @click="reviewResult(null)" v-show="showReviewModel">
                    <i class="iconfont dn_ticn icon-bukejian"></i><span>取消预览</span>
                </div>
                <div class="dn_btngroup_item"  v-show="!showReviewModel" >
                    <i class="iconfont dn_ticn icon-set"></i><span>设置</span><i class="iconfont dn_down icon-xiala1"></i>
                    <div class="dn_mod">
                        <ul>
                            <li @click="designModel = 'pc'" v-show=" designModel === 'app'"><i class="iconfont dn_ticn icon-qiehuanzhanghao"></i><span>切换PC端设计</span></li>
                            <li @click="designModel = 'app'" v-show=" designModel === 'pc'"><i class="iconfont dn_ticn icon-qiehuanzhanghao"></i><span>切换手机端设计</span></li>
                            <li @click="revokeModify(null)"><i class="iconfont icon-10chexiao"></i><span>恢复初始状态</span></li>
                            <li @click="clearReports(null)"><i class="iconfont icon-saoba"></i><span>清空所有报表</span></li>
                        </ul>
                    </div>
                </div>
                <!-- <div class="dn_btngroup_item" @click="designModel = 'pc'" v-show=" designModel === 'app' && !showReviewModel">
                    <i class="iconfont dn_ticn icon-qiehuanzhanghao"></i><span>切换PC端设计</span>
                </div>
                <div class="dn_btngroup_item" @click="designModel = 'app'" v-show=" designModel === 'pc' && !showReviewModel ">
                    <i class="iconfont dn_ticn icon-qiehuanzhanghao"></i><span>切换手机端设计</span>
                </div> -->
                <div class="dn_btngroup_item" v-show="!showReviewModel">
                    <i class="iconfont dn_ticn icon-review"></i><span>预览</span><i class="iconfont dn_down icon-xiala1"></i>
                    <div class="dn_mod">
                        <ul>
                            <li @click="reviewResult('pc')"><i class="iconfont dn_ticn icon-PC "></i><span>PC端预览</span></li>
                            <li @click="reviewResult('app')"><i class="iconfont dn_ticn icon-shouji1"></i><span>手机端预览</span></li>
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
                            <li @click="save(null)"><i class="iconfont dn_ticn icon-baocun1"></i><span>保存</span></li>
                            <li @click="saveTypeDialog = true"><i class="iconfont dn_ticn icon-lingcunwei1"></i><span>另存为</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="dn_body">
            <div id="dn_work" class="dn_work">
                <div class="dn_work_content" >
                    <div class="review-phtitle">{{title}}</div>
                    <div class="dn_work_body"
                     :class="[imageLocation]"
                     :style="{backgroundColor:backgroundColor,backgroundImage:'url('+backgroundImage+')'}" 
                    v-loading='loading_total'  element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)">
                         <div class="dn_tip" v-show="temps.length<=0 && !showReviewModel">
                                <h1 class="dn_tip_title">请“双击”右侧数据图表，开始吧！<i class="iconfont icon-emizhifeiji"></i></h1>
                        </div>
                        <!-- <div class="grid-stack" id="phone_design" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)"> -->
                          <div class="grid-stack" :data-gs-height="dataGsHeight" id="phone_design" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)">
                           
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
                            <el-select value="全部" v-model="select_model">
                                <el-option v-for="item in options_model" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <!-- 常规配置 -->
                <div class="dn_opts_cont" v-show="menuIndex === 1">
                    <inputText style="margin-top:15px" title="页面标题" placeholder="请输入页面标题" :value="title" remark="" v-on:updateValue="(v)=>{title = v;}"></inputText>
                    <inputColor style="margin-top:15px" title="背景颜色"  :value="backgroundColor" remark="" v-on:updateValue="(v)=>{backgroundColor = v;}"></inputColor>
                    <inputImage style="margin-top:15px" title="背景图片"  :value="backgroundImage" remark="" v-on:updateValue="(v)=>{backgroundImage = v;}"></inputImage>
                    <inputSelect style="margin-top:15px" title="图片位置" :options="options_bgimage"  :value="imageLocation" remark="" v-on:updateValue="(v)=>{imageLocation = v;}"></inputSelect>
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
                                        v-on:triggerMethod="triggerMethod"
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
                                        v-on:triggerMethod="triggerMethod"
                                        v-on:updateValue="updateValue">
                                    </div>
                                </template>
                            </el-collapse-item>
                        </template>
                    </el-collapse>
                    <div class="dn_daset_btn dn_daset_rfbtn">
                        <!-- <el-button type="primary" size="medium" @click="refresh"><i class="iconfont dn_ticn icon-shuaxin"></i>更新图表</el-button> -->
                    </div>
                </div>
                <!-- 模板 -->
                <div class="dn_opts_cont" v-show="menuIndex === 3">
                    <div class="dn_opts_rdo">
                        <div class="dn_opts_modbdy">
                            <div v-for="(item,index) in rows_model" :key="index" class="dn_moditm dn_moditm_pc" @click="modelClick(item.reportid)">
                                <!-- <img :src="item.screenshot || modelImg" alt=""> -->
                                <div class="dn_mod_img" :style="{backgroundImage:'url('+(item.screenshot || modelImg)+')'}"></div>
                                <div class="dn_modbdy_title">{{item.reportname}}</div>
                            </div>
                            <!-- <div class=" dn_moditm dn_moditm_app">
                                <img src="../assets/mod1.png" alt="">
                                <div class="dn_modbdy_title">情人节</div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--缓存拖拉插件-->
        <div id="dummy" v-show="0">
            <div class="grid-stack-item" data-gs-auto-position v-for="(temp,index) in temps" :key="index" :index="index" v-if="temp" :id="temp.id">
                <div class="grid-stack-item-content">
                    <div v-if="!temp.component" class="dn_grid_body" @click="selectGrid(temp.id,index)" :class="{active:index === currentIndex}" :id="temp.id+'_dump'"  v-loading='temp.loading_sigle'></div>
                    <div v-else class="dn_grid_body" :is="temp.component" @click="selectGrid(temp.id,index)"  :class="{active:index === currentIndex}" :id="temp.id+'_dump'" v-loading='temp.loading_sigle' :contents="temp.contents">
                    </div>
                    <i class="iconfont dn_delbtn icon-iconset0127" @click="delGrid(temp.id,index)"></i>
                </div>
            </div>
        </div>
        <!-- 另存为 -->
        <el-dialog title="另存为：" class="dn_dialogStCt" :visible.sync="saveTypeDialog" width="40%" >
          <div class="dialogSaveType">
            <el-button @click="showFormDialog(0)" class="saveTypeBtn dn_stb1" type="primary"><i class="iconfont icon-iconset0335"></i>新页面</el-button>
            <el-button @click="showFormDialog(1)" class="saveTypeBtn dn_stb2" type="primary"><i class="iconfont icon-moban2"></i>新模板</el-button>
          </div>
        </el-dialog>
        <!-- 另存页面 -->
      <el-dialog id="mag_dn"  :title="form.isTemp?'另存为新模板':'另存为新页面'" size="small"  :visible.sync="dialog_form">
        <el-form label-position="left" label-width="80px">
          <el-form-item :label="form.isTemp?'模板名称':'页面名称'">
            <el-input clearable auto-complete="off" placeholder="中文,10个字符内" v-model="form.reportName"></el-input>
          </el-form-item>
          <el-form-item  label="编码/Key">
            <el-input clearable auto-complete="off" placeholder="唯一标识,确定后不能更改" v-on:change="verifReportCode(form.reportCode,(r) => {illegalCode = !r})" v-model="form.reportCode"></el-input>
            <span class="myc_illegalCode" v-show="illegalCode"><i class="iconfont icon-gantanhao"></i>该编码已存在，请重新输入!</span>
          </el-form-item>
          <el-form-item v-show="!form.isTemp" label="页面分类">
            <el-select  placeholder="请选择分类"  v-model="form.reportType">
              <el-option v-for="(item,index) in types" :key="index" :label="item.typename" :value="item.typecode"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="页面模式">
            <el-select  placeholder="请选择模式"  v-model="form.isMobile">
              <el-option  :key="1" label="全屏模式" :value="0"></el-option>
              <el-option  :key="2" label="滚动模式" :value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog_form = false">取 消</el-button>
          <el-button type="primary" @click="saveNewSave(null)">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
let config = require("../conf_charts.js").CONF;
import _opts from "../../static/opts/js/index";
import { Loading } from "element-ui";
import webInputTextEle from "../components/web/inputTextEle.vue";
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
import inputColor from "../components/others/inputColor.vue";
import inputImage from "../components/others/inputImage.vue";
import inputRadio from "../components/others/inputRadio.vue";
import inputSelect from "../components/others/select.vue";
//custom
import cutmTable from "../components/custom/table.vue";
import cutmCardboard from "../components/custom/cardboard.vue";
import cutmCarousel from "../components/custom/carousel.vue";
export default {
  data() {
    return {
      //页面标题
      title: "",
      //背景颜色
      backgroundColor: "#ececec",
      //背景图片
      backgroundImage: null,
      //背景图片位置
      imageLocation: "tianchong",
      //是否为模板
      isTemp: 0,
      //是否另存为模板
      saveOfTemp: 0,
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
      //数据源的获取方式
      radio_source: "1",
      radio5: "我的模板",
      //是否已被修改
      isModify: false,
      //0：pc 1：app
      containerType: "pc",
      //设计模式
      designModel: "pc",
      //预览
      showReviewModel: null,
      //网格的最大高度
      dataGsHeight: 0,
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
          img: require("../assets/map-lines.png"),
          name: "路径地图",
          type: "mapLines"
        },
        {
          img: require("../assets/gauge.png"),
          name: "仪盘表",
          type: "gauge"
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
        {
          img: require("../assets/radar.png"),
          name: "雷达图",
          type: "radar",
          position: "bottom"
        },
        {
          img: require("../assets/polar.png"),
          name: "极坐标图",
          type: "sunburst",
          position: "bottom"
        },
        // {
        //   img: require("../assets/table.png"),
        //   name: "表格",
        //   type: "table",
        //   position: "bottom"
        // },
        {
          img: require("../assets/indicator.png"),
          name: "指标看板",
          type: "cardboard",
          position: "bottom"
        },
        {
          img: require("../assets/wordcolor.png"),
          name: "消息轮播",
          type: "carousel",
          position: "bottom"
        }
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
      //带删除的钻取页面
      delayDelPage: [],
      loading_total: true,
      map: {},
      temp_loading: {},
      //是否是钻取页面
      isDrillDown: 0,
      //是否是滚动的页面
      isScroll: "",
      //选择另存模板dialog
      saveTypeDialog: false,
      //重复code
      illegalCode: false,
      //另存页面
      dialog_form: false,
      //另存页面参数
      form: {
        reportType: "", //报表分类
        reportName: "", //报表名称
        reportCode: "", //编码
        dataJson: "", //JSON
        reportConfig: "",
        reportId: "", //页面ID
        isDrillDown: 0, //是否钻取页
        drillDownModule: "", //钻取模块ID
        isMobile: 0,
        isTemp: 0
      },
      isSaveTemp: 0,
      //页面分类
      types: [],
      select_model: 0,
      options_model: [
        {
          label: "全部",
          value: 0
        },
        {
          label: "付费",
          value: 1
        },
        {
          label: "免费",
          value: 2
        }
      ],
      pageSize: 8,
      currentPage: 1,
      total: 0,
      rows_model: [],
      // 背景位置下拉框
      options_bgimage: [
        {
          label: "填充",
          value: "tianchong"
        },
        {
          label: "拉伸",
          value: "lashen"
        },
        {
          label: "适应",
          value: "shiying"
        },
        {
          label: "平铺",
          value: "pingpu"
        }
      ],
      //模板默认图片
      modelImg: require("../assets/mod2.png")
    };
  },
  methods: {
    //验证报表编码重复性
    verifReportCode(code, cb) {
      let p = {
        chartCode: code
      };
      this.$api.post(this.CONFIG.REST.verifReportCode, p).then(data => {
        if (data.status === "ok") {
          cb(true);
        } else {
          cb(false);
        }
      });
    },
    //获取所属类别（下拉项）
    getDownlists(vm, cb) {
      let self = vm || this;
      let p = {};
      self.$api.post(self.CONFIG.REST.getChartTypes, p).then(data => {
        if (data.status === "ok") self.types = data.data;
        if (cb) cb();
      });
    },
    //打开另存页面模态框
    showFormDialog(isSaveTemp) {
      let self = this;
      Object.assign(this.$data.form, this.$options.data().form);
      self.form.isTemp = isSaveTemp;
      self.illegalCode = false;
      self.$options.methods.getDownlists(self);
      self.form.reportName = self.title;
      self.form.isMobile = self.isScroll == "1" ? 1 : 0;
      self.dialog_form = true;
      setTimeout(() => {
        self.saveTypeDialog = false;
      }, 500);
    },
    //获取当前所有报表数据（提交）
    getCurrentReports(self) {
      self = self || this;
      let arr = [];
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
        arr.push(obj);
      });
      return arr;
    },
    //获取全局报表配置
    getTotalReportConfig(self) {
      self = self || this;
      return {
        backgroundColor: self.backgroundColor,
        backgroundImage: self.backgroundImage,
        imageLocation: self.imageLocation
      };
    },
    //保存另存页面模态框
    saveNewSave(self) {
      self = self || this;
      if (self.loading_total)
        return self.$tool.dialog("页面初始化中,请稍等一下!", "warning");
      self.form["reportId"] = this.$tool.getUuid();
      function judgeNull(param) {
        if (param === null || param === undefined || param.trim() === "")
          return true;
      }
      if (self.illegalCode)
        return self.$tool.dialog("编码已存在，请重新输入", "warning");
      if (judgeNull(self.form.reportName))
        if (self.form.isTemp) {
          return self.$tool.dialog("请输入模板名称", "warning");
        } else {
          return self.$tool.dialog("请输入页面名称", "warning");
        }

      if (judgeNull(self.form.reportCode))
        return self.$tool.dialog("请输入编码/key", "warning");
      if (judgeNull(self.form.reportType) && !self.form.isTemp)
        return self.$tool.dialog("请选择分类", "warning");
      self.form.reportConfig = JSON.stringify(
        self.$options.methods.getTotalReportConfig(self)
      );
      self.form.dataJson = self.$options.methods.getCurrentReports(self);
      self.$api.post(self.CONFIG.REST.saveChart, self.form).then(data => {
        if (data.status === "ok") {
          self.$tool.dialog(
            self.form.isTemp ? "成功保存新模板" : "成功保存新页面",
            "success"
          );
          self.dialog_form = false;
        } else {
          self.$tool.dialog("保存失败", "error");
        }
      });
    },
    //新增图表
    addGrid(type) {
      let self = this;
      if (self.loading_total)
        return self.$tool.dialog("页面初始化中,请稍等一下!", "warning");
      let temp = this.$tool.copy_echarts(_opts[type || "line"], true);
      temp["id"] = temp["id"] || self.$tool.getUuid();
      temp.loading_sigle = true;
      self.isModify = true;
      self.$options.methods.renderChart(self, temp, "phone_design", myChart => {
        $(".dn_work_body").animate(
          { scrollTop: $("#phone_design").height() },
          1000
        );
        if (myChart) myChart.resize();
      });
    },
    //渲染页面
    renderChart(self, temp, containerID, cb, auto) {
      self = self || this;
      self.temps.push(temp);
      self.currentIndex = self.temps.length - 1;
      if (auto === undefined) auto = true;
      self.$nextTick(vm => {
        var myChart = null;
        if (!temp.component) {
          // 渲染报表组件
          myChart = self.CONFIG.ECHARTS.init(
            document.getElementById(temp.id + "_dump"),
            "light"
          );
          self.$options.methods.getChartData(self, myChart, temp, undefined);
        } else {
          // 渲染自定义组件
        }
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
    //渲染自定义组件
    renderCustom(self, temp, containerID, cb, auto) {
      self = self || this;
      self.temps.push(temp);
      if (auto === undefined) auto = true;
      self.currentIndex = self.temps.length - 1;
      self.$nextTick(vm => {
        var myChart = self.CONFIG.ECHARTS.init(
          document.getElementById(temp.id + "_dump"),
          "light"
        );
        self.$options.methods.getChartData(self, myChart, temp, undefined);
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
    renderChartsByConfig(self, conf, cb) {
      self = self || this;
      let t = 500;
      if (conf && typeof conf === "object") {
        let containerID = "phone_design";
        let gridstack = $("#" + containerID).data("gridstack");
        gridstack.removeAll();
        let j = 0;
        for (let i = 0; i < conf.length; i++) {
          let temp = conf[i];
          let _t = self.$tool.copy_echarts(_opts[temp.name || "line"], true);
          temp.opts = _t.opts;
          temp["id"] = temp["id"] || self.$tool.getUuid();
          self.$options.methods.renderChart(
            self,
            temp,
            containerID,
            myChart => {
              if (j >= conf.length - 1) self.$options.methods.resizeAll(self);
              j++;
            },
            false
          );
        }
        self.currentIndex = 0;
        t = conf.length * 100;
      }
      setTimeout(() => {
        self.loading_total = false;
      }, t);
    },
    //撤销修改
    revokeModify(self) {
      self = self || this;
      self
        .$confirm("是否恢复到未修改前的状态", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          self.$options.methods.setReportOptions(self, self.source);
          self.isModify = false;
        });
    },
    //清空报表
    clearReports(self) {
      self = self || this;
      self
        .$confirm("是否确认清空所有报表", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          self.temps = [];
          let gridstack = $("#phone_design").data("gridstack");
          if (gridstack) gridstack.removeAll();
          self.isModify = true;
        });
    },
    //获取图表数据（根据平台数据源）
    getChartData_DB(self, db, sql, replace, cb) {
      self = self || this;
      if (replace === undefined) {
        replace = " null or 1=1";
      } else if (typeof replace === "string") {
        replace = '"' + replace + '"';
      }
      //替换字符串
      sql = sql.replace(/\{value\}/g, replace);
      self.$api
        .post(self.CONFIG.REST.connectDataSource, {
          chartType: "0301",
          dsId: db,
          dataMode: 0,
          dataExpr: sql
        })
        .then(
          data => {
            if (data.status === "ok") {
              cb(null, data.data);
            } else {
              cb("error", null);
            }
          },
          err => {
            cb("error", null);
          }
        );
    },
    //获取图表数据（根据URL接口请求）
    getChartData_REST(self, url, replace, cb) {
      self = self || this;
      //替换字符串
      url = url.replace(/\{value\}/g, replace);
      self.$api.get(url).then(
        data => {
          if (data.status === "ok") {
            cb(null, data.data);
          } else {
            cb("error", null);
          }
        },
        err => {
          cb("error", null);
        }
      );
    },
    //获取图表数据
    getChartData(self, mychart, temp, query, cb) {
      self = self || this;
      if (typeof mychart === "string")
        mychart = self.CONFIG.ECHARTS.getInstanceByDom(
          document.getElementById(mychart)
        );
      if (typeof temp === "string") {
        let index = document.getElementById(temp).getAttribute("index");
        temp = self.temps[index];
      }
      let between = temp.others.between || 0;
      let interval = null;

      let t = self.$options.methods.getReferKey(temp.contents);
      self.$options.methods.setReferKey(temp.contents, []);
      let loading = false;
      let setDate = data => {
        self.$options.methods.setReferKey(temp.contents, data);
        self.$options.methods.resetOption(self, mychart, temp.contents);
      };
      let requestDate = type => {
        switch (type) {
          case 2:
            {
              self.$options.methods.getChartData_REST(
                self,
                temp.others.datasurl,
                query,
                (err, data) => {
                  if (!err) {
                    setDate(data);
                  }
                  if (cb) cb(err, data);
                }
              );
            }
            break;
          case 3:
            {
              self.$options.methods.getChartData_DB(
                self,
                temp.others.datasource,
                temp.others.datasql,
                query,
                (err, data) => {
                  if (cb) return cb(err, data);
                  if (!err) {
                    setDate(data);
                  } else {
                    setDate([{}]);
                  }
                }
              );
            }
            break;
          case 1:
          default:
            {
              self.$options.methods.setReferKey(temp.contents, t);
              setDate(t);
              clearInterval(interval);
              if (cb) cb(null);
            }
            break;
        }
        if (!between) clearInterval(interval);
      };
      interval = setInterval(() => {
        requestDate(temp.others.datasways);
      }, between);
    },
    //获取contents数据
    getReferKey(contents) {
      if (
        contents.dataset !== undefined &&
        contents.dataset.source !== undefined
      ) {
        return contents.dataset.source;
      } else {
        return contents.series[0].data;
      }
    },
    //设置contents数据
    setReferKey(contents, rows) {
      if (
        contents.dataset !== undefined &&
        contents.dataset.source !== undefined
      ) {
        contents.dataset.source = rows;
      } else {
        contents.series[0].data = rows;
      }
    },
    //重设echarts参数
    resetOption(self, myChart, option) {
      self = self || this;
      try {
        if (option.series[0].type.indexOf("map") !== -1) {
          self.$options.methods.getJson(self, option.series[0].map, () => {
            myChart.setOption(option);
          });
        } else if (
          option.series[0].type.indexOf("scatter") !== -1 ||
          option.series[0].type.indexOf("effectScatter") !== -1 ||
          option.series[0].type.indexOf("lines") !== -1
        ) {
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
    //删除图表
    delGrid(id, index) {
      let self = this;
      let del = () => {
        let gridstack = $("#phone_design").data("gridstack");
        if (self.currentIndex === index) self.currentIndex = null;
        gridstack.removeWidget("#" + id);
      };
      if (!self.temps[index].others.childId) return del();
      self
        .$confirm("报表含有钻取页面，是否继续删除", "提示", {
          confirmButtonText: "仍然删除",
          cancelButtonText: "我再考虑",
          type: "warning"
        })
        .then(() => {
          self.delayDelPage.push(id);
          del();
          self.isModify = true;
        });
    },
    //删除钻取页面
    delDrillPages(self, cb) {
      let pages = self.delayDelPage;
      self = self || this;
      if (!pages || pages.length <= 0) return;
      self.$api
        .post(self.CONFIG.REST.deleteDrillDownByModuleId, {
          moduleId: pages.join(",")
        })
        .then(data => {
          self.delayDelPage = [];
          if (data.status === "ok") {
            if (cb) cb(true);
          }
        });
    },
    //获取所有效的报表ID
    getAllActiveReport(self, id, cb) {
      self = self || this;
      let len = $("#phone_design > .grid-stack-item:visible").length;
      let arr = [];
      _.map($("#phone_design > .grid-stack-item:visible"), function(el) {
        el = $(el);
        const node = el.data("_gridstack_node");
        let index = node.el[0].getAttribute("index");
        let temp = self.temps[index];
        len--;
        if (temp.id !== id) {
          arr.push({
            label: temp.contents.title.text,
            value: temp.id + "_dump"
          });
        }
        if (len <= 0) cb(arr);
      });
    },
    //关联报表
    connectCharts(self, ids) {
      self = self || this;
      if (!ids) return;
      ids = ids.split(",");
      let arr = [];
      for (let i = 0; i < ids.length; i++) {
        let echartsInstance = self.CONFIG.ECHARTS.getInstanceByDom(
          document.getElementById(ids[i])
        );
        arr.push(echartsInstance);
      }
      self.CONFIG.ECHARTS.connect(arr);
    },
    //取消关联报表
    disconnectCharts(self) {
      self = self || this;
      self.$options.methods.getAllActiveReport(self, null, ids => {
        for (let i = 0; i < ids.length; i++) {
          let echartsInstance = self.CONFIG.ECHARTS.getInstanceByDom(
            document.getElementById(ids[i].value)
          );
          echartsInstance.group = null;
        }
      });
    },
    //选中图表
    selectGrid(id, index) {
      console.log(this.currentIndex);
      if (this.showReviewModel) return;
      this.currentIndex = index;
      console.log(this.currentIndex);
      //   if (this.setmenu_index === 0) this.setmenu_index = 1;
    },
    //获取地图配置文件
    getJson(self, name, cb) {
      self = self || this;
      if (self.map[name] !== undefined) {
        if (cb) cb();
        return;
      }
      self.map[name] = 1;
      self.$api
        .get("../../static/map/json/province/" + name + ".json")
        .then(data => {
          self.CONFIG.ECHARTS.registerMap(name, data);
          if (cb) cb();
        });
    },
    //数据更新
    updateValue(value, model, id) {
      try {
        eval("this.temps[" + this.currentIndex + "]." + model + "=value");
      } catch (e) {
        console.error(
          "强更新字段出错了！",
          "this.temps[" + this.currentIndex + "]." + model + "=value"
        );
        let arr = model.split(".");
        let str = "this.temps[" + this.currentIndex + "]";
        for (let i = 0; i < arr.length; i++) {
          str = str + "['" + arr[i] + "']";
          let v = eval(str);
          if (v === undefined) {
            eval(str + "={}");
          }
        }
        eval("this.temps[" + this.currentIndex + "]." + model + "=value");
      }
      if (!id) return;
      let echartsInstance = this.CONFIG.ECHARTS.getInstanceByDom(
        document.getElementById(id + "_dump")
      );
      if (echartsInstance)
        this.$options.methods.resetOption(
          this,
          echartsInstance,
          this.temps[this.currentIndex].contents
        );
      self.isModify = true;
    },
    //函数触发
    triggerMethod(str, cb) {
      let self = this;
      eval(str);
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
      if (echartsInstance) echartsInstance.resize();
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
          if (echartsInstance) echartsInstance.resize();
          setTimeout(() => {
            self.$options.methods.hideLoading(self, echartsInstance, id);
          }, 500);
        }, 800);
      });
    },
    //预览
    reviewResult(type) {
      let self = this;
      self.showReviewModel = type;
      let gridstack = $("#phone_design").data("gridstack");
      if (type) {
        this.containerType = type;
        gridstack.disable();
      } else {
        this.containerType = this.designModel;
        gridstack.enable();
      }
    },
    //保存
    save(self, cb) {
      self = self || this;
      if (self.loading_total)
        return self.$tool.dialog("页面初始化中,请稍等一下!", "warning");
      self.reportId = self.reportId || self.$route.query.reportId;
      let url = "self.CONFIG.REST.saveChart";
      if (self.reportId) url = self.CONFIG.REST.editChart;
      let result = {
        reportId: self.reportId || self.$route.query.rid,
        dataJson: [],
        isMobile: self.isScroll,
        reportName: self.title,
        reportConfig: JSON.stringify(
          self.$options.methods.getTotalReportConfig(self)
        ),
        parentId: self.$route.query.parentId,
        drillDownModule: self.$route.query.moduleId,
        isTemp: self.isTemp,
        isDrillDown: self.isDrillDown
      };
      result.dataJson = self.$options.methods.getCurrentReports(self);
      self.$api.post(url, result).then(data => {
        if (data.status === "ok") {
          self.isModify = false;
          self.$tool.dialog("保存成功", "success");
          self.$options.methods.delDrillPages(self);
          if (cb) cb(true);
        } else {
          self.$tool.dialog("保存失败", "error");
          if (cb) cb(false);
        }
      });
      //   console.log(JSON.stringify(result));
    },
    //设置报表参数
    setReportOptions(self, data, isModel, cb) {
      self = self || this;
      if (!isModel) {
        self.source = data;
        self.reportId = data.reportid;
        self.title = data.reportname;
      }
      let param = data.reportconfig;
      try {
        param = JSON.parse(param);
      } catch (e) {
        param = {};
      }
      param = param || {};
      self.backgroundColor = param.backgroundColor || "#ececec";
      self.backgroundImage = param.backgroundImage || "";
      self.imageLocation = param.imageLocation || "tianchong";
      self.isTemp = data.istemp || 0;
      self.isScroll = data.ismobile;
      // self.designModel = data.ismobile == "1" ? "app" : "pc";
      let conf = data.datajson || "[]";
      conf = conf.replace(/[\n\r]/g, " ");
      if (typeof conf === "string") conf = JSON.parse(conf);
      self.$options.methods.initGrid(self, () => {
        self.$options.methods.renderChartsByConfig(self, conf, cb);
      });
    },
    //获取页面详情
    getChartDetail(self, cb, id) {
      self = self || this;
      self.loading_total = true;
      let url = "";
      let p = {};
      if (self.$route.query.reportId || id) {
        url = self.CONFIG.REST.getChartDetail;
        self.reportId = self.$route.query.reportId;
        p.reportId = id || self.$route.query.reportId;
        self.isDrillDown = 0;
      } else {
        url = self.CONFIG.REST.getReportByParentId;
        p.parentId = self.$route.query.parentId;
        p.moduleId = self.$route.query.moduleId;
        self.isDrillDown = 1;
      }
      self.$api.post(url, p).then(data => {
        if (data.status === "ok" && data.data.length > 0) {
          self.$options.methods.setReportOptions(self, data.data[0], id, cb);
        } else if (self.reportId) {
          self.$tool.dialog("获取配置信息失败", "error");
        } else {
          self.$options.methods.initGrid(self, () => {
            self.loading_total = false;
          });
        }
      });
    },
    //获取模板列表
    getModelList(self, cb) {
      self = self || this;
      let p = {
        pageSize: self.pageSize,
        pageNum: self.currentPage,
        isTemp: 1
      };
      self.$api.post(self.CONFIG.REST.getChartList, p).then(data => {
        if (data.status === "ok") {
          self.rows_model = data.data;
          self.total = data.totalRow;
        }
        if (!self.total) self.total = 1;
        if (cb) cb();
      });
    },
    //模板点击后
    modelClick(id) {
      let self = this;
      self
        .$confirm("是否应用该模板,替换当前页面内容?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          self.isModify = true;
          self.$options.methods.getChartDetail(self, () => {}, id);
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
        if (myChart) myChart.hideLoading();
      }
    },
    //网格初始化
    initGrid(self, cb) {
      self = self || this;
      if (self.isScroll) {
        self.dataGsHeight = 0;
        self.$options.methods.initGridSetting(self, 40, cb);
      } else {
        // 是否浮动（如果页面不滚动则开放浮动功能）
        let isFloat = !self.isScroll;
        //计算页面的高度（默认将页面以1080为标准，分为27块）
        let workHeight = $(".dn_work_body").get(0).offsetHeight;
        self.dataGsHeight = 27;
        let cellHeight = (workHeight - 2) / self.dataGsHeight; //2为误差范围
        self.$options.methods.initGridSetting(self, cellHeight, cb);
      }
    },
    //初始化datagrid配置
    initGridSetting(self, cellHeight, cb) {
      self = self || this;
      let p = {
        // auto: false,
        // float: isFloat,
        verticalMargin: 0,
        cellHeight: cellHeight,
        width: 60,
        // rtl: true,
        placeholderClass: "dn_stack_placeholder"
      };
      //拖拉控件初始化
      setTimeout(() => {
        $("#phone_design").gridstack(p);
        self.$nextTick(() => {
          if (cb) cb();
        });
        //监听拖拉、移动 实时调整echarts的尺寸
        $(".grid-stack").on("change", (event, items) => {
          if (!items) return;
          for (let i = 0; i < items.length; i++)
            self.$options.methods.resizeEcharts(self, items[i].el[0].id);
        });
      }, 100);
    }
  },
  watch: {
    //设计模式
    containerType(value, old) {
      this.$options.methods.resizeAll(this);
    },
    //预览模式
    showReviewModel(value, old) {
      let self = this;
      if (this.containerType === "app" && (value === null || value === "app"))
        return;
      this.$options.methods.resizeAll(this);
    },
    designModel(val) {
      this.containerType = val;
    }
  },
  created() {
    this.loading_total = true;
  },
  mounted() {
    let self = this;
    self.loading_total = true;
    self.isModify = false;
    //获取配置信息
    self.$options.methods.getChartDetail(self);
    //监听窗口变化 实时调整echarts的尺寸
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let setTime = null;
    self.$options.methods.getModelList(self);
    window.onresize = () => {
      let w = document.documentElement.clientWidth;
      let h = document.documentElement.clientHeight;
      if (w === width && height === h) return;
      width = w;
      height = h;
      if (setTime) clearTimeout(setTime);
      setTime = setTimeout(() => {
        if (self.containerType === "pc") {
          if (!self.isScroll) {
            let workHeight = $(".dn_work_body").get(0).offsetHeight;
            let cellHeight = (workHeight - 2) / self.dataGsHeight; //2为误差范围
            let gridstack = $("#phone_design").data("gridstack");
            if (gridstack) gridstack.cellHeight(cellHeight);
          }
          self.$options.methods.resizeAll(self);
        }
      }, 500);
    };
    window.onbeforeunload = function() {
      console.log(self.isModify);
      return "确定要关闭窗口吗>现代浏览器？";
    };
  },
  components: {
    webInputTextEle,
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
    inputText,
    inputColor,
    inputImage,
    inputRadio,
    inputSelect,
    cutmTable,
    cutmCardboard,
    cutmCarousel
  }
};
</script>

<style scoped>
@import "../assets/css/design.css";
</style>
