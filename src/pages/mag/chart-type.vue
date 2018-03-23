<template>
  <div id="form-type">
    <div class="top-bar">
      <div class="title">
        <h1 class="web-font">页面类型<i class="iconfont icon-wenhao"></i></h1>
      </div>
      <div class="menu">
        <a class="zhbtn" @click="showCreateForm"><i class="iconfont icon-add1"></i>新增类型</a>
        <!--<a class="zhbtn primary">删除</a>-->
      </div>
    </div>
    <div class="child-container">
      <div class="child-form">
        <el-table ref="multipleTable" border :data="rows"  tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column align="center" header-align="center" label="名称" min-width="100" show-overflow-tooltip><template slot-scope="scope">{{ scope.row.typename }}</template></el-table-column>
          <el-table-column align="center" header-align="center" sortable label="编码"><template slot-scope="scope">{{ scope.row.typecode }}</template></el-table-column>
          <el-table-column align="center" header-align="center" label="操作" width="240">
            <template slot-scope="scope">
              <a class="zhbtn" @click="showEditForm(scope.row)"><i class="iconfont icon-bianji zhibtn"></i>编辑</a>
              <a class="zhbtn primary" @click="delItem(scope.row.typeid)"><i class="iconfont icon-lajixiang zhibtn"></i>删除</a>
            </template>
          </el-table-column>
          <!-- <el-table-column align="center" header-align="center" label="状态" width="110">
            <template slot-scope="scope">
              <el-switch on-color="#ffa72c" @change="changeStatus(scope.row)" off-color="#CBCBCB"  onValue="1" offValue="0" on-text="已激活" off-text="未激活" v-model="scope.row.status" :width="70"></el-switch>
            </template>
          </el-table-column> -->
        </el-table>
          <!-- <div class="ftpage">
            <el-pagination
             @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :pageSize="pageSize"
            :currentPage="currentPage"
            :total="total">
          </el-pagination>
          </div> -->
      </div>
    </div>
        <el-dialog title="新建类型"  :visible.sync="dialog_form" >
        <el-form label-position="left" label-width="80px">
          <el-form-item label="名称" >
            <el-input  auto-complete="off" v-model="form.typeName"></el-input>
          </el-form-item>
          <el-form-item label="编码/Key">
            <el-input auto-complete="off" v-model="form.typeCode"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog_form = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="修改类型"  :visible.sync="dialog_form_edit" >
        <el-form label-position="left" label-width="80px">
          <el-form-item label="名称" >
            <el-input  auto-complete="off" v-model="form_edit.typeName"></el-input>
          </el-form-item>
          <el-form-item label="编码/Key">
            <el-input auto-complete="off" v-model="form_edit.typeCode"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog_form_edit = false">取 消</el-button>
          <el-button type="primary" @click="edit">确 定</el-button>
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
      dialog_form: false,
      dialog_form_edit: false,
      form: {
        typeName: "",
        typeCode: ""
      },
      form_edit: {
        typeName: "",
        typeCode: "",
        typeId: ""
      },
      multipleSelection: [],
      handleCurrentChange(val) {
        if (self.currentPage === val) return;
        self.currentPage = val;
        self.$options.methods.getRows(self);
      },
      changeStatus(item) {
        let p = {
          status: item.status,
          cateId: item.cateId
        };
        let msg = "确定激活这条记录吗？";
        if (item.status === "0") msg = "确定取消激活这条记录吗？";
        this.$tool.confirm(
          msg,
          () => {
            this.$api.post(this.CONFIG.REST.saveFormType, p).then(data => {
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
      }
    };
  },
  methods: {
    //保存、新增类型
    save() {
      let self = this;
      if (self.form.typeCode.trim() === "")
        return self.$tool.dialog("请输入编码/key", "warning");
      if (self.form.typeName.trim() === "")
        return self.$tool.dialog("请输入名称", "warning");
      self.$api
        .post(self.CONFIG.REST.createChartTypes, self.form)
        .then(data => {
          if (data.status === "ok") {
            self.$tool.dialog("提交成功", "success");
            self.dialog_form = false;
            self.$options.methods.getRows(self);
          }
        });
    },
    //修改、编辑类型
    edit() {
      let self = this;
      if (self.form_edit.typeCode.trim() === "")
        return self.$tool.dialog("请输入编码/key", "warning");
      if (self.form_edit.typeName.trim() === "")
        return self.$tool.dialog("请输入名称", "warning");
      self.$api
        .post(self.CONFIG.REST.editReportType, self.form_edit)
        .then(data => {
          if (data.status === "ok") {
            self.$tool.dialog("提交成功", "success");
            self.dialog_form_edit = false;
            self.$options.methods.getRows(self);
          }
        });
    },
    //获取列表
    getRows(vm, cb) {
      let self = vm || this;
      let p = {
        rows: self.pageSize,
        page: self.currentPage
      };
      self.$api.post(self.CONFIG.REST.getChartTypes, p).then(data => {
        if (data.status === "ok") {
          self.rows = data.data;
          // self.total = data.total;
        }
        // if (!self.total) self.total = 1;
        if (cb) cb();
      });
    },
    //删除
    delItem(id) {
      let self = this;
      self.$tool.confirm("确定要删除这条数据吗？", () => {
        self.$api
          .post(self.CONFIG.REST.delReportType, { typeId: id })
          .then(data => {
            if (data.status === "ok") {
              self.$tool.dialog("删除成功", "success");
              self.$options.methods.getRows(self);
            } else {
              self.$tool.alert(data.message.error[0]);
            }
          });
      });
    },
    //打开新增模态框
    showCreateForm() {
      Object.assign(this.$data.form, this.$options.data().form);
      this.dialog_form = true;
    },
    //打开修改模态框
    showEditForm(temp) {
      Object.assign(this.$data.form, this.$options.data().form);
      this.form_edit.typeName = temp.typename;
      this.form_edit.typeCode = temp.typecode;
      this.form_edit.typeId = temp.typeid;
      this.dialog_form_edit = true;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getDetail(vm, id, cb) {
      let p = {
        cateId: id
      };
      vm.$api.post(vm.CONFIG.REST.getFormType_item, p).then(data => {
        if (data.success) {
          vm.form.id = data.info.cateId;
          vm.form.key = data.info.code;
          vm.form.name = data.info.name;
          vm.form.status = data.info.status;
        }
        if (cb) cb();
      });
    },
    getToEditer(id, code) {
      this.$router.push("/designer?source=1&id=" + id + "&code=" + code);
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.currentPage = 1;
      this.$options.methods.getRows(this);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/msg/form-type.css";
</style>
