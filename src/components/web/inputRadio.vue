<template>
  <div class="dn_dasetrdo_ctn" v-show="!setting.isShow || setting.isShow({contents:this.contents})">
    <div class="dn_dasetrdo_left">
      <span>{{setting.title}}</span>
    </div>
    <div class="dn_dasetrdo_right">
      <el-radio 
      v-if="setting.model"
      v-for="(item,i) in setting.options"
       :key="i" 
       v-model="radio" 
       v-on:change="updateValue"
       :label="item.value">
       {{item.label}}
       </el-radio>
      <p v-show="setting.remark">{{setting.remark}}</p>
    </div>
  </div> 
</template>

<script>
export default {
  props: ["setting", "contents",'cid', "others"],
  data() {
    return {
      radio: 1,
      returnVal: (contents,others,str) => {
        return eval(str);
      }
    };
  },
  mounted(){
    this.radio =  this.returnVal( this.contents,this.others, this.setting.model)
  },
  methods: {
    updateValue(value) {
      this.$emit("updateValue", value, this.setting.model,this.cid); //自定义事件，并传参
    }
  },
  watch: {
    cid(val){
      this.radio =  this.returnVal( this.contents,this.others, this.setting.model)
    }
  }
};
</script>


<style scoped>
.dn_dasetrdo_ctn {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 5px 0 15px;
}
.dn_dasetrdo_left {
  width: 70px;
  min-width: 70px;
  flex-grow: 0;
  padding-right: 5px;
  padding-top: 7px;
  text-align: right;
}
.dn_dasetrdo_left > span {
  font-size: 12px;
  color: #595961;
}
.dn_dasetrdo_right {
  flex-grow: 1;
  padding: 0 15px 0 10px;
}
.dn_dasetrdo_right > label {
  /* display: block; */
  height: 30px;
  line-height: 36px;
  margin-left: 12px !important;
}
</style>
