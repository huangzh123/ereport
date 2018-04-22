<template>
  <div :ref='cid' class="wbipt_select_ctn" v-show="!setting.isShow || setting.isShow({others:this.others,contents:this.contents})">
    <div class="wbipt_select_left">
      <span>{{setting.title}}</span>
    </div>
    <div class="wbipt_select_right">
      <el-select v-model="value" :multiple="setting.multiple" :placeholder="setting.describe" v-on:change="updateValue" v-on:visible-change="visibleChange">
        <el-option v-if="setting.model" v-for="(item,i) in setting.options" :key="i" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <p v-show="setting.remark">{{setting.remark}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["setting", "others", "contents", "cid", "watch"],
  data() {
    return {
      value: "",
      returnVal: (contents, others, str) => {
        return eval(str);
      }
    };
  },
  mounted() {
    let self = this;
    if (self.setting.init) {
      let opt = {
        self,
        setting: self.setting,
        others: self.others,
        contents: self.contents,
        cid: self.cid
      };
      self.setting.init(opt, () => {
        self.value = self.returnVal(
          self.contents,
          self.others,
          self.setting.model
        );
      });
    } else {
      self.value = self.returnVal(
        self.contents,
        self.others,
        self.setting.model
      );
    }
  },
  methods: {
    triggerMethod(self, str, cb) {
      self = self || this;
      self.$emit("triggerMethod", str, cb); //自定义事件，并传参
    },
    visibleChange(status){
      let self = this;
      let opt = {
        self,
        setting: self.setting,
        others: self.others,
        contents: self.contents,
        cid: self.cid,
        status: status
      };
      if(self.setting.visibleChange) self.setting.visibleChange(opt)
    },
    updateValue(value) {
      let self = this;
      let opt = {
        self,
        setting: self.setting,
        others: self.others,
        contents: self.contents,
        cid: self.cid,
        value: value
      };
      if (self.setting.updateValue) {
        self.setting.updateValue(opt, () => {
          self.$emit("updateValue", value, self.setting.model, self.cid); //自定义事件，并传参
        });
      } else {
        self.$emit("updateValue", value, self.setting.model, self.cid); //自定义事件，并传参
      }
    }
  },
  watch: {
    cid(val) {
      let self = this;
      if (self.setting.init) {
        let opt = {
          self,
          setting: self.setting,
          others: self.others,
          contents: self.contents,
          cid: self.cid
        };
        self.setting.init(opt, () => {
          self.value = self.returnVal(
            self.contents,
            self.others,
            self.setting.model
          );
        });
      } else {
        self.value = self.returnVal(
          self.contents,
          self.others,
          self.setting.model
        );
      }
    },
    watch(val) {
      let self = this;
      if (self.setting.init) {
        let opt = {
          self,
          setting: self.setting,
          others: self.others,
          contents: self.contents,
          cid: self.cid
        };
        self.setting.init(opt, () => {
          self.value = self.returnVal(
            self.contents,
            self.others,
            self.setting.model
          );
        });
      } else {
        self.value = self.returnVal(
          self.contents,
          self.others,
          self.setting.model
        );
      }
    }
  }
};
</script>


<style scoped>
.wbipt_select_ctn {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 5px 0 15px;
}
.wbipt_select_left {
  width: 21%;
  min-width: 70px;
  flex-grow: 0;
  padding-right: 5px;
  padding-top: 7px;
  text-align: right;
}
.wbipt_select_left > span {
  font-size: 12px;
  color: #595961;
}
.wbipt_select_right {
  flex-grow: 1;
  padding: 0 15px 0 10px;
}
.wbipt_select_right > input {
  height: 34px;
  width: 100%;
  padding: 6px 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #e0e0e0;
  border-color: #e0e0e0;
  border-radius: 4px;
  color: #555;
  font-size: 14px;
  box-shadow: none;
  transition: border-color ease-in-out 0.2s, box-shadow ease-in-out 0.15s;
  outline: none;
}
.wbipt_select_right > input:focus {
  border-color: #23b7e5;
}
.wbipt_select_right > p {
  font-size: 12px;
  color: #a3a3a3;
  margin: 0;
  padding-top: 5px;
  line-height: 15px;
  text-align: justify;
}
.web-input-text {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
h1.web-title {
  height: 34px;
  line-height: 34px;
  font-size: 12px;
  color: #595961;
}
</style>
