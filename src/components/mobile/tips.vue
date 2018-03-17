<template>
  <div class="mobile-container mobile-tips"
       @click="select(id,index)"
       v-bind:style="style">
    <div class="mobile-content input">
      <i class="iconfont icon-tip"></i>
      <p>{{contents.title}}</p>
    </div>
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
          this.$emit('focuscomp',id,index);
          return false;
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
  .mobile-tips>.mobile-content{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    /*background-color: #fff !important;*/
    overflow: hidden;
    background-color: #fff;
    padding: .1rem;
     border-bottom:1px solid #d9d9d9;
    /*padding:.02rem .1rem;*/
  }
  .mobile-tips>.mobile-content>p{
    position: absolute;
    top: 50%;
    left: .3rem;
    transform: translate(0, -50%);
    font-size: .14rem;
    line-height: .14rem;
    box-sizing: border-box;
    padding: .01rem 0;
    color: #8e8e8e;
    /*max-height: 50%;*/
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .mobile-tips>.mobile-content>i{
    position: absolute;
    top: 50%;
    left: .05rem;
    font-size: .16rem;
    transform: translate(0, -50%);
    margin:  0 .02rem;
    color: #8e8e8e;
  }

</style>
