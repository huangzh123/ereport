<template>
  <div class="dn_dasetrdo_ctn" >
    <div class="dn_dasetrdo_left">
      <span>{{title}}</span>
    </div>
    <div class="dn_dasetrdo_right">
      <el-radio 
      v-for="(item,i) in options"
       :key="i" 
       v-model = "val"
       :label="item.value">
       {{item.label}}
       </el-radio>
      <p v-show="remark">{{remark}}</p>
    </div>
  </div> 
</template>

<script>
export default {
  props: ["title", "value", "options", "remark"],
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
  width: 21%;
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
