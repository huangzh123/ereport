<template>
  <div  class="wbipt_select_ctn">
    <div class="wbipt_select_left">
      <span>{{title}}</span>
    </div>
    <div class="wbipt_select_right">
      <el-select v-model="val" :multiple="multiple" :placeholder="placeholder">
        <el-option  v-for="(item,i) in options" :key="i" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <p v-show="remark">{{remark}}</p>
    </div>
  </div>
</template>

<script>
export default {
 props: ["title", "value","placeholder", "multiple","options", "remark"],
  data() {
    return {
      val: "",
    };
  },
  mounted() {
    this.val = this.value;
  },
  watch: {
    val(v, old) {
      this.$emit("updateValue", v);
    },
    value(v){
      this.val = v;
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
