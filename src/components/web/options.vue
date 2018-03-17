<template>
  <div>
    <h1 class="web-title">{{setting.title}} <span>{{setting.subTitle}}</span></h1>
    <div class="comp-options">
     <div class="ipt" v-for="(item,index) in contents[returnVal(setting.model)]" v-if="item" :key='index'>
        <label><span>名:</span><input type="text"  :value="item.label"  v-on:input="updateValue($event.target.value,index,'label')"></label>
        <label><span>值:</span><input type="text"  :value="item.value" v-on:input="updateValue($event.target.value,index,'value')"></label>
        <div style="clear: both"></div>
        <i class="iconfont icon-jian" @click="delOption(index)"></i>
      </div>
      <div class="addBtn" @click="addOption"><i class="iconfont icon-add1"></i>添加新选项</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["setting", "index", "contents", "others"],
  data() {
    return {
      returnVal: function(str) {
        return str.split(".")[1];
      }
    };
  },
  mounted() {
    let arr = [];
    for (let i in this.contents[this.returnVal(this.setting.model)]) {
      arr.push(this.contents[this.returnVal(this.setting.model)][i]);
    }
    this.contents[this.returnVal(this.setting.model)] = arr;
  },
  methods: {
    //添加新选项
    addOption(e) {
      let arr = [];
      for (let i in this.contents[this.returnVal(this.setting.model)]) {
        arr.push(this.contents[this.returnVal(this.setting.model)][i]);
      }
      this.contents[this.returnVal(this.setting.model)] = arr;
      this.contents[this.returnVal(this.setting.model)].push({
        label: "",
        value: ""
      });
      // console.log(this.contents[this.returnVal(this.setting.model)])
    },
    //删除选项
    delOption(index) {
      let arr = [];
      for (let i in this.contents[this.returnVal(this.setting.model)]) {
        arr.push(this.contents[this.returnVal(this.setting.model)][i]);
      }
      this.contents[this.returnVal(this.setting.model)] = arr;
      this.contents[this.returnVal(this.setting.model)].splice(index, 1);
    },
    updateValue(value, index, name) {
      let temp = this.contents[this.returnVal(this.setting.model)];
      temp = JSON.parse(JSON.stringify(temp))
      temp[index][name] = value;
      this.contents[this.returnVal(this.setting.model)] = temp;
      // this.$emit(
      //   "updateValue",
      //   temp,
      //   this.setting.model
      // ); //自定义事件，并传参
    }
  },
  watch: {}
};
</script>


<style scoped>
.comp-options {
  /*height: .28rem;*/
  position: relative;
}
.comp-options > .ipt {
  position: relative;
  padding: 0 0.25rem 0 0;
  width: 100%;
  margin-bottom: 0.08rem;
}
.comp-options > .ipt > label {
  position: relative;
  display: inline-block;
  float: left;
}
.comp-options > .ipt > label:nth-child(1) {
  width: 60%;
  padding-left: 0.2rem;
}
.comp-options > .ipt > label:nth-child(2) {
  width: 40%;
  padding-left: 0.3rem;
}
.comp-options > .ipt > label > span {
  display: block;
  position: absolute;
  color: rgba(255, 255, 255, 0.77);
  left: 0.08rem;
  top: 0.05rem;
  font-size: 13px;
}
.comp-options > .ipt > label:nth-child(1) > span {
  left: 0;
}
.comp-options > .ipt > label > input {
  display: inline-block;
  width: 100%;
  height: 0.28rem;
  color: #fff;
  font-size: 12px;
  font-family: 微软雅黑;
  line-height: 0.28rem;
  border-radius: 0.2rem 0.2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.21);
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  outline: 0;
  /*padding: 0 .12rem;*/
  background-color: #4c5a63;
  text-align: center;
  transition: 0.5s;
}
.comp-options > .ipt > label > input:focus {
  border: 1px solid #fff;
}
.comp-options > .ipt > i.iconfont {
  position: absolute;
  color: rgba(255, 255, 255, 0.78);
  font-size: 19px;
  top: 50%;
  right: 0;
  margin-top: -9.5px;
  cursor: pointer;
}
.comp-options > .addBtn {
  margin: 0.1rem auto 0;
  height: 0.38rem;
  line-height: 0.38rem;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 13px;
  border-radius: 20px;
  cursor: pointer;
}
.comp-options > .addBtn > i.iconfont {
  font-size: 18px;
  margin: 0 0.1rem 0 0;
  vertical-align: middle;
}
</style>
