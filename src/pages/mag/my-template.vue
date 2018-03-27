<template>
  <div id="my-template">
    <div class="top-bar">
      <div class="title">
        <h1 class="web-font">我的模板 <i class="iconfont icon-wenhao"></i></h1>
      </div>
      <div class="menu">
        <a class="zhbtn"  @click="showCreateForm"><i class="iconfont icon-add1"></i>创建新模板</a>
        <!--<a class="zhbtn primary">删除</a>-->
      </div>
    </div>
    <div class="child-container">
      <div class="child-form">
        <div class="menus">
          <a class="zhbtn" @click="deleteItems"><i class="iconfont icon-lajixiang"></i>删除所选</a>
          <div class="search">
            <el-input @change="keywordchange" v-model="keyword" placeholder="请输入检索关键字" icon="search"></el-input>
          </div>
        </div>
        <el-table  ref="multipleTable" :data="rows" tooltip-effect="dark" style="width: 100%"
                  @selection-change="handleSelectionChange">
          <el-table-column align="left" header-align="left" type="selection" width="31"
                           show-overflow-tooltip></el-table-column>
          <el-table-column align="center" header-align="center" sortable label="编码">
            <template slot-scope="scope">{{ scope.row.code }}</template>
          </el-table-column>
          <el-table-column align="center" header-align="center" label="名称" min-width="100" show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.name || '无' }}</template>
          </el-table-column>
          <el-table-column align="center" header-align="center" sortable label="日期" min-width="85" show-overflow-tooltip>
            <template slot-scope="scope">{{ $tool.Format(scope.row.createTime,'yyyy-MM-dd') }}</template>
          </el-table-column>
          <el-table-column align="center" header-align="center" prop="type" label="分类"  show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.catename || '无' }}</template>
          </el-table-column>
          <el-table-column align="center" header-align="center" label="操作" min-width="120">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="dark" content="进入编辑器" placement="top">
                <!-- <router-link class="zhibtn" :to="'/designer?source='+(scope.row.code==='默认'?0:1)"> -->
                <button class="zhibtn" @click="getToEditer(scope.row.tempId,scope.row.code)"> <i class="iconfont icon-sheji "></i></button>
                <!-- </router-link> -->
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="编辑" placement="top" >
                <button class="zhibtn" @click="showCreateForm('edit',scope.row.tempId)"><i class="iconfont icon-bianji" ></i></button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="预览" placement="top">
                <button class="zhibtn"><i class="iconfont icon-shouji2 zhibtn nomargin"></i></button>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column align="center" header-align="center" label="状态" width="110">
            <template slot-scope="scope">
               <el-switch on-color="#ffa72c" @change="changeStatus(scope.row)" off-color="#CBCBCB"  onValue="1" offValue="0" on-text="已激活" off-text="未激活" v-model="scope.row.status" :width="70"></el-switch>
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
      <el-dialog  title="创建新模板"  :visible.sync="dialog_form">
        <el-form label-position="left" label-width="80px">
          <el-form-item label="编码/Key"  >
            <el-input  auto-complete="off" v-model="form.key"></el-input>
          </el-form-item>
          <el-form-item label="模板名称" >
            <el-input  auto-complete="off"  v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所属类别" >
            <el-select  placeholder="请选择活动区域"  v-model="form.type">
              <el-option v-for="(item,index) in types" :key="index" :label="item.name" :value="item.cateId"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态"  >
             <el-switch on-color="#ffa72c" off-color="#CBCBCB" onValue="1" offValue="0" on-text="已激活" off-text="未激活" v-model="form.status" :width="75"></el-switch>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog_form = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>
<script>
import Tool from "../../tool/common";
export default {
  data() {
    let self = this;
    return {
      pageSize: 8,
      currentPage: 1,
      total: 0,
      rows: [],
      keyword: "",
      dialog_form: false,
      types: [],
      form: {
        id: "",
        key: "",
        name: "",
        type: "",
        status: "1" //0：未发布 1：已发布
      },
      dialog_qrcode: false,
      multipleSelection: [],
      handleCurrentChange(val) {
        if (self.currentPage === val) return;
        self.currentPage = val;
        self.$options.methods.getRows(self);
      },
      changeStatus(item) {
        let p = {
          status: item.status,
          tempId: item.tempId
        };
        let msg = "确定激活这条记录吗？";
        if (item.status === "0") msg = "确定取消激活这条记录吗？";
        this.$tool.confirm(
          msg,
          () => {
            this.$api.post(this.CONFIG.REST.saveTemplate, p).then(data => {
              if (data.success) {
                this.$tool.dialog("操作成功", "success");
                this.$options.methods.getRows(this);
              } else {
                this.$tool.alert(data.message.error[0]);
              }
            });
          },
          () => {
            item.status = item.status === "0" ? "1" : "0";
          }
        );
      },
      keywordchange(val) {
        self.$options.methods.getRows(self);
      }
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getRows(vm, cb) {
      let self = vm || this;
      let p = {
        rows: self.pageSize,
        page: self.currentPage,
        keyword: self.keyword
      };
      self.$api.post(self.CONFIG.REST.getTemplate_list, p).then(data => {
        if (data.success) {
          self.rows = data.info;
          self.total = data.total;
        }
        if (!self.total) self.total = 1;
        if (cb) cb();
      });
    },
    getDownlists(vm, cb) {
      let self = vm || this;
      let p = {};
      self.$api.post(self.CONFIG.REST.getFormTypes, p).then(data => {
        if (data.success) self.types = data.info;
        if (cb) return cb();
      });
    },
    showCreateForm(v, id) {
      Object.assign(this.$data.form, this.$options.data().form);
      if (v !== "edit") return (this.dialog_form = true);
      this.$options.methods.getDetail(this, id, () => {
        this.dialog_form = true;
      });
    },
    getDetail(vm, id, cb) {
      let p = {
        tempId: id
      };
      vm.$api.post(vm.CONFIG.REST.getTemplate_item, p).then(data => {
        if (data.success) {
          vm.form.id = data.info.tempId;
          vm.form.type = data.info.cateId;
          vm.form.key = data.info.code;
          vm.form.name = data.info.name;
          vm.form.status = data.info.status;
        }
        if (cb) cb();
      });
    },
    save() {
      let p = {
        tempId: this.form.id,
        code: this.form.key,
        name: this.form.name,
        cateId: this.form.type,
        status: this.form.status
      };
      // 初始化设计器的默认参数
      if (!p.pageId) {
        let contents = {
          title: this.form.name,
          cellHeight: 58,
          marginBottom: 0
        };
        p.contents = contents;
      }
      if (p.code.trim() === "")
        return this.$tool.dialog("请输入编码/key", "warning");
      if (p.name.trim() === "") return this.$tool.dialog("请输入名称", "warning");
      if (p.cateId.trim() === "")
        return this.$tool.dialog("请选择所属类别", "warning");
      this.$api.post(this.CONFIG.REST.saveTemplate, p).then(data => {
        if (data.success) {
          this.$tool.dialog("提交成功", "success");
          this.dialog_form = false;
          this.$options.methods.getRows(this);
        }
      });
    },
    deleteItems() {
      let arr = [];
      if (this.multipleSelection.length <= 0)
        return this.$tool.dialog("请先选择要删除的记录", "warning");
      this.$tool.confirm("是否确定删除所选项？", () => {
        this.multipleSelection.forEach(item => {
          arr.push(item.tempId);
        });
        let p = {
          tempId: arr.toString()
        };
        this.$api.post(this.CONFIG.REST.delTemplates, p).then(data => {
          if (data.success) {
            this.$tool.dialog("删除成功", "success");
            this.$options.methods.getRows(this);
          }
        });
      });
    },
    getToEditer(id, code) {
      this.$router.push("/designer?source=1&id=" + id + "&code=" + code + "&type=template");
    }
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
@import "../../assets/css/msg/my-template.css";
</style>
