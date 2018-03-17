<template>
  <div class="wbipt_text_ctn">
    <div class="wbipt_text_left">
      <span>{{setting.title}}</span>
    </div>
    <div class="wbipt_text_right">
      <el-slider v-model="value" v-on:change="updateValue" :step="setting.step || 1" :min="setting.min || 0" :max="setting.max || 100" :format-tooltip="setting.format || returnFormat"></el-slider>
      <p v-show="setting.remark">{{setting.remark}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["setting", "cid", "contents", "others"],
  data() {
    return {
      value: 0,
      returnVal: (contents, others,str) => {
        return eval(str);
      },
      returnFormat(val) {
        return val;
      },
      returnInit(val) {
        return val;
      }
    };
  },
  mounted() {
    this.returnInit = this.setting.initformat || this.returnInit;
    let v = this.returnVal(this.contents,this.others, this.setting.model);
    this.value = this.returnInit(v);
  },
  methods: {
    updateValue(value) {
      this.returnFormat = this.setting.format || this.returnFormat;
      let v = this.returnFormat(value);
      this.$emit("updateValue", v, this.setting.model, this.cid); //自定义事件，并传参
    }
  },
  watch: {
    cid(val) {
      this.returnInit = this.setting.initformat || this.returnInit;
      let v = this.returnVal(this.contents,this.others, this.setting.model);
      this.value = this.returnInit(v);
    }
  }
};
</script>


<style scoped>
.wbipt_text_ctn {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 5px 0 15px;
}
.wbipt_text_left {
  width: 70px;
  min-width: 70px;
  flex-grow: 0;
  padding-right: 5px;
  padding-top: 7px;
  text-align: right;
}
.wbipt_text_left > span {
  font-size: 12px;
  color: #595961;
}
.wbipt_text_right {
  flex-grow: 1;
  padding: 0 15px 0 10px;
}
.wbipt_text_right > input {
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
.wbipt_text_right > input:focus {
  border-color: #23b7e5;
}
.wbipt_text_right > p {
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
