<template>
  <div class="mobile-container mobile-input-textarea"
       @click="select(id,index)"
       v-bind:style="style">
    <div class="mobile-content">
      <h1>{{contents.title}}</h1>
      <div class="ipt">
        <textarea :placeholder="contents.placeholder" v-model="contents.value" ></textarea>
      </div>
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
  .mobile-input-textarea>.mobile-content{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    /*display: flex;*/
    background-color: #fff !important;
     border-bottom:1px solid #d9d9d9;
    overflow: hidden;
  }
  .mobile-input-textarea>.mobile-content>h1{
    position: absolute;
    top: .12rem;
    left: 0;
    display: inline-block;
    height: .2rem;
    line-height: .2rem;
    color: #31364a;
    font-size: 15px;
    padding-left:.1rem;
    box-sizing: border-box;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 黑体;
    font-weight: 500;
  }
  .mobile-input-textarea>.mobile-content>.ipt{
    height: 100%;
    position: relative;
    padding: .4rem .1rem 0 .15rem;
    box-sizing: border-box;
  }
  .mobile-input-textarea>.mobile-content>.ipt>textarea{
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
    padding: 1px 0;
  }

</style>
