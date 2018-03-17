<template>
  <label class="web-input-date">
    <h1 class="web-title">{{setting.title}} <span>{{setting.subTitle}}</span></h1>

    <!--原生实现方法  -->
     <!-- <div class="comp-ipt-txt" v-if="contents.type === 'month' || contents.type === 'date'">
      {{contents[returnVal(setting.model)]}}
      <input class="inputhide" v-if="contents.type === 'month'" type="month" :placeholder="setting.placeholder" :value="contents[returnVal(setting.model)]" v-on:input="updateValue($event.target.value)">
      <input class="inputhide" v-if="contents.type === 'date'"  type="date" :placeholder="setting.placeholder" :value="contents[returnVal(setting.model)]" v-on:input="updateValue($event.target.value)">
    </div>
    <input  class="comp-ipt-txt" v-else="1"  type="text" :placeholder="setting.placeholder" :value="contents[returnVal(setting.model)]" v-on:input="updateValue($event.target.value)">  -->

     <!--插件实现  -->
     <!-- <el-time-picker v-if="contents.type === 'time' " v-model="contents[returnVal(setting.model)]" placeholder="任意时间点"></el-time-picker>  -->
    <!-- <el-date-picker v-else-if="contents.type === 'month'"  v-model="contents[returnVal(setting.model)]" type="month" placeholder="选择月份" format="yyyy-MM"></el-date-picker> -->
    <!-- <el-date-picker v-else-if="contents.type === 'date'" v-model="contents[returnVal(setting.model)]" align="right" type="date" placeholder="选择日期" format="yyyy-MM-dd"></el-date-picker>  -->
     <el-time-picker v-if="contents.type === 'time' " v-model="content" placeholder="任意时间点"></el-time-picker>
    <el-date-picker v-else-if="contents.type === 'month'"  v-model="content" type="month" placeholder="选择月份" format="yyyy-MM"></el-date-picker>
    <el-date-picker v-else-if="contents.type === 'date'" v-model="content" align="right" type="date" placeholder="选择日期" format="yyyy-MM-dd"></el-date-picker> 
  </label>
</template>

<script>
  import Tool from '../../tool/common'
  export default {
    props: ['setting','cid','contents', "others"],
    data () {
      return {
        returnVal:function(str){
          return str.split('.')[1];
        },
        content:"",
      }
    },
    mounted () {

    },
    methods:{
      updateValue(value){
        this.$emit('updateValue',value,this.setting.model); //自定义事件，并传参
      }
    },
    watch:{
        'content': function(val){
          let fmt = this.contents.type === 'month'?'yyyy-MM':this.contents.type === 'time'?'hh:mm:ss':'yyyy-MM-dd';
          this.contents[this.returnVal(this.setting.model)] = Tool.format(val,fmt);
        }
    }
  }
</script>


<style>
  .web-input-date{
    /*position: relative;*/
  }
  /*普通输入框*/
  .web-input-date>.comp-ipt-txt{
    position: relative;
    display: block;
    width: 100%;
    height: .28rem;
    color: #fff;
    font-size: 12px;
    font-family: 微软雅黑;
    line-height: .28rem;
    border-radius: .2rem .2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid rgba(255, 255, 255, 0.21);
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    outline: 0;
    padding: 0 .12rem;
    background-color: #4c5a63;
    transition: .5s;
  }
  .web-input-date>.comp-ipt-txt:before{
    content: "\e6b9";
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    right: .2rem;
    top: 0.03rem;
    color: #fff;
  }
  .inputhide{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    border: 0;
    line-height: .26rem;
    cursor: pointer;
  }

   ::-webkit-datetime-edit-fields-wrapper { background-color: transparent; }
  ::-webkit-datetime-edit-text { color: #8e8e8e; padding: 0 .3em; }
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    background: transparent;
    opacity: 0;
  }
  ::-webkit-inner-spin-button,::-webkit-clear-button{
    opacity: 0;
  }
  input::-webkit-datetime-edit-year-field:focus{
    background-color: #fff;
  } 

.web-input-date .el-input__inner{
     display: block;
    width: 100%;
    height: .28rem;
    color: #fff;
    font-size: 12px;
    font-family: 微软雅黑;
    line-height: .28rem;
    border-radius: .2rem .2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid rgba(255, 255, 255, 0.21);
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    outline: 0;
    padding: 0 .12rem;
    background-color: #4c5a63;
    transition: .5s; 
}
.el-time-panel__content::after, .el-time-panel__content::before{
      top: 55% !important;
     box-sizing: border-box !important; 
}
  /* .el-time-panel *, */
  .el-time-panel *:before,
  .el-time-panel *:after {
    box-sizing: initial ;
}

</style>
