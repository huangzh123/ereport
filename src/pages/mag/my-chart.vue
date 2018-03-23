<template>
  <div id="my-form">
    <div class="top-bar">
      <div class="title">
        <h1 class="web-font">我的页面 <i class="iconfont icon-wenhao"></i></h1>
      </div>
      <div class="menu">
        <a class="zhbtn" @click="showCreateForm"><i class="iconfont icon-add1"></i>新建页面</a>
        <!--<a class="zhbtn primary">删除</a>-->
      </div>
    </div>
    <div class="child-container">
      <div class="child-form">
        <div class="menus">
          <a class="zhbtn" @click="deleteItems"><i class="iconfont icon-lajixiang"></i>删除所选</a>
          <div class="search">
            <el-input placeholder="请输入检索关键字" @change="keywordchange" v-model="keyword" icon="search"></el-input>
          </div>
        </div>
        <el-table ref="multipleTable" :data="rows" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column align="left" header-align="left" type="selection" width="31" show-overflow-tooltip></el-table-column>
          <el-table-column align="center" header-align="center" label="名称" min-width="100" show-overflow-tooltip>
<template slot-scope="scope">
   {{ scope.row.reportname }}
</template>
          </el-table-column>
          <el-table-column align="center" header-align="center" prop="type" label="类型" width="90" show-overflow-tooltip>
<template slot-scope="scope">
   {{ scope.row.typename || '无' }}
</template>
          </el-table-column>
           <el-table-column align="center" header-align="center" sortable label="编码" width="120">
            <template slot-scope="scope">{{ scope.row.reportcode }}
</template>
          </el-table-column>
           
          <el-table-column class="myc_tb_date" align="center" header-align="center" sortable label="修改日期" width="115" show-overflow-tooltip>
<template slot-scope="scope">
   {{ $tool.Format(scope.row.createtime,'yyyy-MM-dd') }}
</template>
          </el-table-column>
          <el-table-column align="center" header-align="center" label="操作" width="250">
<template slot-scope="scope">
    <a class="zhbtn primary" @click="getToEditer(scope.row.reportid)"><i class="iconfont icon-sheji"></i><span>设计</span></a>
    <a class="zhbtn" @click="showEditForm(scope.row)"><i class="iconfont icon-bianji "></i><span>修改</span></a>
    <a class="zhbtn"@click="showQrcodeModel(scope.row)"><i class="iconfont icon-yulan"></i><span>预览</span></a>

    <!-- <button class="zhibtn" @click="getToEditer(scope.row.reportid)"> <i class="iconfont icon-sheji "></i><span>设计</span></button>
    <button class="zhibtn" @click="showEditForm(scope.row)"><i class="iconfont icon-bianji"></i><span>修改</span></button>
    <button class="zhibtn"><i class="iconfont icon-yulan nomargin" @click="showQrcodeModel(scope.row)"></i><span>预览</span></button> -->
</template>
          </el-table-column>
        </el-table>
          <div class="ftpage">
            <el-pagination
             @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :pageSize="pageSize"
            :currentPage="currentPage"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog  title="新建页面" size="small"  :visible.sync="dialog_form">
        <el-form label-position="left" label-width="80px">
          <el-form-item label="页面名称">
            <el-input  auto-complete="off" placeholder="中文,10个字符内" v-model="form.reportName"></el-input>
          </el-form-item>
          <el-form-item label="编码/Key">
            <el-input  auto-complete="off" placeholder="唯一标识" v-on:change="verifReportCode(form.reportCode,(r) => {illegalCode = !r})" v-model="form.reportCode"></el-input>
            <span class="myc_illegalCode" v-show="illegalCode"><i class="iconfont icon-gantanhao"></i>该编码已存在，请重新输入!</span>
          </el-form-item>
          
          <el-form-item label="页面类型">
            <el-select  placeholder="请选择页面类型"  v-model="form.reportType">
              <el-option  v-for="(item,index) in types" :key="index" :label="item.typename" :value="item.typecode"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog_form = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog  title="编辑页面信息" size="small"  :visible.sync="dialog_form_edit">
        <el-form label-position="left" label-width="80px">
          <el-form-item label="页面名称">
            <el-input  auto-complete="off" placeholder="中文,10个字符内" v-model="form_edit.reportName"></el-input>
          </el-form-item>
          <el-form-item label="编码/Key">
            <el-input  auto-complete="off" disabled placeholder="唯一标识" v-model="form_edit.reportCode"></el-input>
          </el-form-item>
          <el-form-item label="页面类型">
            <el-select  placeholder="请选择页面类型"  v-model="form_edit.reportType">
              <el-option  v-for="(item,index) in types" :key="index" :label="item.typename" :value="item.typecode"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog_form_edit = false">取 消</el-button>
          <el-button type="primary" @click="edit">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog class="qrcode" :title="qrcode.title" :visible.sync="dialog_qrcode" size="tiny">
        <div class="content" v-loading.body="loading" element-loading-text="正在生成二维码">
          <img id="qrimg" src="" alt="">
          <div class="qrcmsg" v-show="!loading">
            <h1>二维码已生成，</h1>
            <br>
            <h2>用手机扫描二维码吧！</h2>
          </div>
        </div>
        <div class="notice">
          <el-input placeholder="请输入内容" :value="qrcode.path">
<template slot="prepend">
   访问地址：
</template>
            <el-button slot="append">复制</el-button>
          </el-input>
          <!--<a class="zhbtn primary">复制</a>-->
        </div>
      </el-dialog>
      <div id="qrcodeImg" v-show="0"></div>
  </div>
</template>

<script>
// let defaultImg = require("../../assets/demo/shop4.png");
export default {
  data() {
    let self = this;
    return {
      // defaultImg: defaultImg,
      pageSize: 8,
      currentPage: 1,
      total: 0,
      rows: [],
      keyword: "",
      dialog_form: false,
      dialog_form_edit:false,
      //非法code /重复
      illegalCode:false,
      types: [],
      code_fun: "",
      model: "",
      apps: [],
      loading: true,
      form: {
        reportType: "", //报表类型
        reportName: "", //报表名称
        reportCode: "", //编码
        dataJson: "", //JSON
        reportid: "", //页面ID
        isDrillDown: "", //是否钻取页
        drillDownModule: "" //钻取模块ID
      },
      form_edit: {
        reportType: "", //报表类型
        reportName: "", //报表名称
        reportCode: "", //编码
        reportId:"",
      },
      icon_img: "",
      upload_status: "",
      qrcode: {
        title: "",
        path: "http://www.baidu.com"
      },
      dialog_qrcode: false,
      multipleSelection: [],
      handleCurrentChange(val) {
        if (self.currentPage === val) return;
        self.currentPage = val;
        self.$options.methods.getRows(self);
      },
      keywordchange(val) {
        self.$options.methods.getRows(self);
      }
    };
  },
  methods: {
    //获取所属类别（下拉项）
    getDownlists(vm, cb) {
      let self = vm || this;
      let p = {};
      self.$api.post(self.CONFIG.REST.getChartTypes, p).then(data => {
        if (data.status === "ok") self.types = data.data;
        console.log(self.types);
        if (cb) cb();
      });
    },
    //保存/新增页面
    save(id) {
      let self = this;
      if(self.illegalCode) return;
      let url =  self.CONFIG.REST.saveChart;
      self.form["reportId"] = this.$tool.getUuid();
      function judgeNull(param) {
        if (param === null || param === undefined || param.trim() === "")
          return true;
      }
      if (judgeNull(self.form.reportName))
        return self.$tool.dialog("请输入页面名称", "warning");
      if (judgeNull(self.form.reportCode))
        return self.$tool.dialog("请输入编码/key", "warning");
      if (judgeNull(self.form.reportType))
        return self.$tool.dialog("请选择所属类型", "warning");
      self.$api.post(url, self.form).then(data => {
        if (data.status === "ok") {
          self.$tool.dialog("保存成功", "success");
          self.dialog_form = false;
          self.$options.methods.getRows(self);
        } else {
          self.$tool.dialog("保存失败", "error");
        }
      });
    },
    //保存/编辑页面
    edit() {
      let self = this;
      let url =  self.CONFIG.REST.editChart;
      function judgeNull(param) {
        if (param === null || param === undefined || param.trim() === "")
          return true;
      }
      if (judgeNull(self.form_edit.reportName))
        return self.$tool.dialog("请输入页面名称", "warning");
      if (judgeNull(self.form_edit.reportCode))
        return self.$tool.dialog("请输入编码/key", "warning");
      if (judgeNull(self.form_edit.reportType))
        return self.$tool.dialog("请选择所属类型", "warning");
      self.$api.post(url, self.form_edit).then(data => {
        if (data.status === "ok") {
          self.$tool.dialog("修改成功", "success");
          self.dialog_form_edit = false;
          self.$options.methods.getRows(self);
        } else {
          self.$tool.dialog("修改失败", "error");
        }
      });
    },
    //获取页面列表
    getRows(self, cb) {
      self = self || this;
      let p = {
        pageSize: self.pageSize,
        pageNum: self.currentPage,
        reportName: self.keyword
      };
      self.$api.post(self.CONFIG.REST.getChartList, p).then(data => {
        if (data.status === "ok") {
          self.rows = data.data;
          self.total = data.totalRow;
        }
        if (!self.total) self.total = 1;
        if (cb) cb();
      });
    },
    //调转至编辑器
    getToEditer(id) {
      this.$router.push("/design?reportId=" + id);
    },
    //打开新增模态框
    showCreateForm() {
      let self = this;
      Object.assign(this.$data.form, this.$options.data().form);
      this.upload_status = "";
      this.code_fun = "";
      this.icon_img = "";
     this.dialog_form = true
    },
    //打开编辑模态框
    showEditForm(item) {
      let self = this;
      Object.assign(this.$data.form, this.$options.data().form);
      self.form_edit.reportType = item.typecode;
      self.form_edit.reportName = item.reportname;
      self.form_edit.reportCode = item.reportcode;
      self.form_edit.reportId = item.reportid;
      self.dialog_form_edit = true;
      console.log(self.form_edit)
      // this.$options.methods.getChartDetail(this, id, data => {
      //   if (data.status === "ok" && data.data.length>0) {
      //     let d = data.data[0];
      //   } else {
      //     self.$tool.dialog("获取项目信息失败", "error");
      //   }
      // });
    },
    //获取页面详情
    getChartDetail(self, id, cb) {
      self = self || this;
      let p = {
        reportId: id
      };
      self.$api.post(self.CONFIG.REST.getChartDetail, p).then(data => {
        if (cb) cb(data);
      });
    },
    //删除
    deleteItems() {
      let arr = [];
      if (this.multipleSelection.length <= 0)
        return this.$tool.dialog("请先选择要删除的记录", "warning");
      this.$tool.confirm("是否确定删除所选项？", () => {
        this.multipleSelection.forEach(item => {
          arr.push(item.reportid);
          console.log(item);
        });
        let p = {
          reportId: arr.toString()
        };
        this.$api.post(this.CONFIG.REST.deleteChart, p).then(data => {
          if (data.status === 'ok') {
            this.$tool.dialog("删除成功", "success");
            this.$options.methods.getRows(this);
          }else{
            this.$tool.dialog("删除失败", "error");
          }
        });
      });
    },
    //验证报表编码重复性
    verifReportCode(code,cb){
      let p ={
        chartCode:code
      }
      this.$api.post(this.CONFIG.REST.verifReportCode, p).then(data => {
          if (data.status === 'ok') {
            cb(true)
          }else{
            cb(false)
          }
        });
    },
    showQrcodeModel(item,cb) {
      return;
      $("#qrimg").attr("src", "");
      this.qrcode.title = item.name;
      if (item.pageType === "1") {
        // this.qrcode.path = this.CONFIG.IP_APP + "/#/app?code=" + item.code;
        this.qrcode.path =
          location.origin + location.pathname + "#/app?code=" + item.code;
      } else {
        this.qrcode.path = item.externalUrl;
      }
      this.loading = true;
      this.dialog_qrcode = true;
      setTimeout(() => {
        this.loading = false;
        let qrcode = $("#qrcodeImg")
          .qrcode({
            text: this.qrcode.path
          })
          .hide();
        let canvas = qrcode.find("canvas").get(0);
        $("#qrimg").attr("src", canvas.toDataURL("image/jpg"));
      }, 1000);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    saveToTemplate(id) {
      Object.assign(this.$data.form, this.$options.data().form);
      this.$options.methods.getDetail(this, id, data => {
        if (data.success) {
          this.form.type = data.info.cateId;
          this.form.key = data.info.code;
          this.form.name = data.info.name;
          this.form.status = data.info.pageStatus;
          this.form.contents = data.info.contents;
          this.form.components = data.info.components;
        }
        this.dialog_form = true;
      });
    },
    save_template() {
      let p = {
        tempId: this.form.id,
        code: this.form.key,
        name: this.form.name,
        cateId: this.form.type,
        status: this.form.status,
        contents: this.form.contents,
        components: this.form.components
      };
      if (p.code.trim() === "")
        return this.$tool.dialog("请输入编码/key", "warning");
      if (p.name.trim() === "")
        return this.$tool.dialog("请输入名称", "warning");
      if (p.cateId.trim() === "")
        return this.$tool.dialog("请选择所属类别", "warning");
      this.$api.post(this.CONFIG.REST.saveTemplate, p).then(data => {
        if (data.success) {
          this.$tool.dialog("另存模板成功", "success");
          this.dialog_form = false;
        }
      });
    },
    
  },
  mounted() {
    this.$nextTick(function() {
      this.currentPage = 1;
      this.$options.methods.getRows(this);
      this.$options.methods.getDownlists(this);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/msg/my-form.css";
</style>
