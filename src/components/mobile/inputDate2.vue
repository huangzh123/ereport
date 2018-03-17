<template>
  <div class="mobile-container mobile-input-date"
       @click="select(id,index)"
       v-bind:style="style">
    <div class="mobile-content input">
      <h1>{{contents.title}}</h1>
      <div class="ipt">
        <!--<input type="date"  v-model="contents.value">-->
        <span class="right"><label >{{contents.placeholder}}</label><i class="iconfont icon-you"></i></span>
      </div>
    </div>
    <mt-datetime-picker ref="picker" type="time"></mt-datetime-picker>
  </div>
</template>

<script>
  export default {
    name:'mp-input-text',
    props: ['id','index','contents'],
    data () {
      return {
        newId:'test',
        style:{}
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
        },
        openPicker() {
          this.$refs.picker.open();
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
  .mobile-input-date>.input>.ipt>input{
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
  .mobile-input-date>.input>.ipt>select{
    display: block;
    height: 100%;
    width: 100%;
    min-width: 1.7rem;
    border: 1px solid rgba(255, 255, 255, 0.21);
    -webkit-appearance: none; /*for chrome*/
    color: #575757;
    border-radius: .2rem .2rem;
    font-family: 微软雅黑;
    font-size: 14px;
    background-color: #fff;
    border: 0;
    outline-color: #fff !important;
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

</style>
