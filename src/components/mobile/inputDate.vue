<template>
  <div class="mobile-container mobile-input-date"
       @click="select(id,index)"
       v-bind:style="style">
    <div class="mobile-content input">
      <h1>{{contents.title}}</h1>
      <div class="ipt">
        {{contents.value}}
        <!--<span>{{contents.placeholder}}</span>-->
        <span class="right"><label >{{contents.placeholder}}</label><i class="iconfont icon-you"></i></span>
      </div>
      <div class="ipts">
        <input type="date" :name="name"      class="hideinput"    v-if="contents.type === 'date'"       v-model="contents.value" >
        <input type="datetime" :name="name"  class="hideinput" v-if="contents.type === 'datetime'"  v-model="contents.value" >
        <input type="week"  :name="name"       class="hideinput"     v-if="contents.type === 'week'"      v-model="contents.value" >
        <input type="month" :name="name"      class="hideinput"     v-if="contents.type === 'month'"     v-model="contents.value" >
        <input type="time" :name="name"       class="hideinput"    v-if="contents.type === 'time'"       v-model="contents.value" >
      </div>
    </div>
  </div>
</template>

<script>
  import Tool from '../../tool/common'
  export default {
    name:'mp-input-text',
    props: ['id','index','contents'],
    data () {
      return {
        newId:'test',
        name:"",
        style:{}
      }
    },
    mounted () {
      this.style = {
        paddingBottom: this.contents.marginVertical+"px",
        paddingTop: this.contents.marginVertical+"px",
        paddingLeft: this.contents.marginLevel+"px",
        paddingRight: this.contents.marginLevel+"px"
      };
      this.name = Tool.getUuid();
    },
    methods:{
        select(id,index){
          this.$emit('focuscomp',id,index)
        }
    },
    watch:{
      'contents.marginLevel':function (val) {
        var el = $("#"+this.id).find('.mobile-container');
        el.css("paddingLeft",parseFloat(val));
        el.css("paddingRight",parseFloat(val));
      },
      'contents.marginVertical':function (val) {
        var el = $("#"+this.id).find('.mobile-container');
        el.css("paddingBottom",parseFloat(val));
        el.css("paddingTop",parseFloat(val));
      },
    }
  }
</script>


<style scoped>
  /*组件样式*/
  .mobile-container{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .mobile-input-date>.input{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #fff !important;
     border-bottom:1px solid #d9d9d9;
    overflow: hidden;
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
  .mobile-input-date>.input>h1{
    height: .2rem;
    line-height: .2rem;
    position: relative;
    color: #31364a;
    top: 50%;
    font-size: 15px;
    margin-top: -.1rem;
    padding-left:.1rem;
    box-sizing: border-box;
    text-align: center;
    white-space: nowrap;
    max-width: 15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 黑体;
    font-weight: 500;
  }
  .mobile-input-date>.input>.ipt{
    flex: auto;
    height: .3rem;
    line-height: .3rem;
    position: relative;
    top: 50%;
    margin-top: -.15rem;
    padding: 0 .67rem 0 .15rem;
    box-sizing: border-box;
  }
  .mobile-input-date>.input>.ipts{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding-left: .5rem;
    overflow: hidden;
  }
  .mobile-input-date>.input>.ipts>input{
    display: block;
    height: 100%;
    width: 100%;
    /*background-color: #fafafa;*/
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    border-radius: 0;
    border: 0;
    -webkit-box-flex: 1;
    font-family: 微软雅黑;
    -ms-flex: 1;
    outline: 0;
    line-height: 1.6;
    /*pointer-events: none;*/
    color: #575757;
  }
  .mobile-input-date>.input>.ipt>.right{
    position: absolute;
    right: .05rem;
    top: -.01rem;
    color: #818181;
    font-family: 微软雅黑;
    font-size: 13px;

  }
  .mobile-input-date>.input>.ipt>.right>label{
    vertical-align: middle;
  }
  .mobile-input-date>.input>.ipt>.right>i.iconfont{
    font-size: .18rem;
    vertical-align: middle;
  }
  .hideinput{
    opacity: 0;
  }

</style>
