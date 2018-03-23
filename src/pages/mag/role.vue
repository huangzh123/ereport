<template>
  <div id="role">
    <div class="top-bar">
      <div class="title">
        <h1 class="web-font">角色管理 <i class="iconfont icon-wenhao"></i></h1>
      </div>
      <!-- <div class="menu">
                    <a class="zhbtn"  @click="showCreateForm('create')"><i class="iconfont icon-add1"></i>保存</a>
                  </div> -->
    </div>
    <div class="child-container">
      <div class="rcontents">
        <div class="role-left">
          <div class="title">
            <h1>角 色</h1>
          </div>
          <ul>
            <li :class="{'active':current_role === item.roleId}" v-for="(item,index) in roles" @click="current_role = item.roleId" :key="index"><i class="iconfont icon-jiaose"></i>{{item.roleName}}</li>
          </ul>
        </div>
        <div class="role-right">
          <div class="title">
            <h1>轻应用</h1>
            <span>
                    <!-- <a class="zhbtn" ><i class="iconfont icon-baocun-copy-copy"></i>保存</a> -->
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            </span>
          </div>
          <div class="contents">
            <el-checkbox-group v-model="current_apps" @change="handleCheckedCitiesChange">
              <div class="app-group" v-for="(item,index) in apps" :key="index">
                <h2>{{item.groupName}}</h2>
                <div class="apps">
                  <el-checkbox v-for="(app) in item.arrs" :label="app.id" :key="app.id">
                    <div class="app-item">
                      <img :src="app.img || defaultImg" alt="">
                      <h3>{{app.name}}</h3>
                      <div class="app-checkboxs">
                        <!-- <el-checkbox></el-checkbox> -->
                      </div>
                    </div>
                  </el-checkbox>
                </div>
              </div>
            </el-checkbox-group>
          </div>
          <div class="commit">
            <a class="zhbtn" @click="resetStatus"><i class="iconfont icon-fuwei"></i>复位</a>
            <a class="zhbtn primary" @click="save"><i class="iconfont icon-baocun-copy-copy"></i>保存</a>
          </div>
        </div>
        <div class="double-arrows"><i class="iconfont icon-icon-dbArrow_right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Tool from "../../tool/common";
  // let defaultImg = require("../../assets/demo/shop4.png");
  export default {
    data() {
      let self = this;
      return {
        // defaultImg:defaultImg,
        roles: [],
        current_role: "",
        apps: [],
        app_source: [],
        current_apps: [],
        current_apps_backup: [],
        checkAll: false,
        isIndeterminate: false
      };
    },
    methods: {
      getRoles(vm) {
        let self = vm || this;
        self.$api.get(self.CONFIG.REST.getRoles).then(data => {
          if (data.success) {
            self.roles = data.info;
            if (self.roles.length > 0) self.current_role = self.roles[0].roleId;
          }
        });
      },
      getLightApps(vm) {
        let self = vm || this;
        self.$api.get(self.CONFIG.REST.getLightApps).then(data => {
          self.apps = data.records;
            self.app_source = [];
            for (let i = 0; i < self.apps.length; i++) {
              for (let j = 0; j < self.apps[i].arrs.length; j++) {
                self.app_source.push(self.apps[i].arrs[j].id);
              }
            }
        });
      },
      save(){
        let self = this;
        let p = {
          roleId:self.current_role,
          newAppId:self.current_apps.toString(),
          oldAppId:self.current_apps_backup.toString()
        }
        self.$api.post(self.CONFIG.REST.saveLightAppsAndRole,p).then(data => {
          if(data.success){
            self.current_apps_backup = self.current_apps;
            this.$tool.dialog("保存成功", "success");
          }else{
            this.$tool.dialog("保存失败", "fail");
          }
          
        });
      },
      handleCheckAllChange(event) {
        this.current_apps = event.target.checked ? this.app_source : [];
        // this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(val) {
        let checkedCount = val.length;
        this.checkAll = checkedCount === this.app_source.length;
        // this.isIndeterminate =
        //   checkedCount > 0 && checkedCount < this.app_source.length;
      },
      resetStatus() {
        this.current_apps = this.current_apps_backup;
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.$options.methods.getRoles(this);
        this.$options.methods.getLightApps(this);
      });
    },
    watch: {
      current_role(val, old) {
        let self = this;
        self.$api.get(self.CONFIG.REST.getLightAppsByRole+val).then(data => {
          if(data.success){
            self.current_apps_backup = data.rows.map((item) => {
              return item.app_id;
            });
            self.current_apps = self.current_apps_backup;
          }
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/msg/role.css";
</style>
