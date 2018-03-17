<template>
  <div class="mobile-container mobile-input-select"
       @click="select(id,index)"
       v-bind:style="style">
    <label class="mobile-content input">
      <h1>{{contents.title}}</h1>
      <div class="ipt">
        <select v-model="contents.value">
          <option v-for="item in contents.options" :value="item.value">{{item.label}}</option>
        </select>
        <span class="right"><label>{{contents.placeholder}}</label><i class="iconfont icon-you"></i></span>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name:'mp-input-text',
    props: ['id','index','contents'],
    data () {
      return {
        newId:'test',
        style:{},
        forid:new Date().getTime()
      }
    },
    mounted () {
      this.style = {
        paddingBottom: this.contents.marginVertical+"px",
        paddingTop: this.contents.marginVertical+"px",
        paddingLeft: this.contents.marginLevel+"px",
        paddingRight: this.contents.marginLevel+"px"
      }
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
  .mobile-input-select>.input{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #fff !important;
     border-bottom:1px solid #d9d9d9;
    overflow: hidden;
  }
  .mobile-input-select>.input>h1{
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
  .mobile-input-select>.input>.ipt{
    flex: auto;
    height: .3rem;
    line-height: .3rem;
    position: relative;
    top: 50%;
    margin-top: -.15rem;
    padding: 0 .67rem 0 .15rem;
    box-sizing: border-box;
  }


  .mobile-input-select>.input>.ipt>select{
    display: block;
    height: 100%;
    width: 100%;
    -webkit-appearance: none; /*for chrome*/
    color: #575757;
    font-family: 微软雅黑;
    font-size: 14px;
    background-color: #fff;
    border: 0;
    outline-color: #fff !important;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
  }

  select::-ms-expand { display: none; }

  .mobile-input-select>.input>.ipt>.right{
    position: absolute;
    right: .05rem;
    top: -.01rem;
    color: #818181;
    font-family: 微软雅黑;
    font-size: 13px;

  }
  .mobile-input-select>.input>.ipt>.right>label{
    vertical-align: middle;
  }
  .mobile-input-select>.input>.ipt>.right>i.iconfont{
    font-size: .18rem;
    vertical-align: middle;
  }

</style>
