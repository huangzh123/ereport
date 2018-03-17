<template>
  <div class="mobile-container mobile-input-checkbox"
       @click="select(id,index)"
       v-bind:style="style">
    <div class="mobile-content input">
      <h1>{{contents.title}}<span v-if="contents.placeholder">({{contents.placeholder}})</span></h1>
      <div class="ipt">
        <label class="radio-option" v-for="item in contents.options" >
          <span class="radio">
            <input type="checkbox"  :name="name" :truevalue="item.value"  :arr="contents.value[0]" :checked="indexOf(contents.value,item.value)" @change="changValue">
            <span class="radio-core"></span></span>
          <span class="radio-label">{{item.label}}</span>
        </label>
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
        style:{},
        indexOf(arr,val){
            let row = [];
            for(let i in arr) row.push(arr[i]);
            return row.indexOf(val)!==-1;
        },
        name:{}
      }
    },
    mounted () {
      this.name = Tool.getUuid();
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
        },
      changValue(val){
            let arr = [];
            for(let i in this.contents.options){
               if(this.contents.options[i].vmodel) arr.push(this.contents.options[i].value);
            }
            this.contents.value = arr;
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
  .mobile-input-checkbox>.input{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #fff !important;
     border-bottom:1px solid #d9d9d9;
     /*border-bottom:1px solid red;*/
    overflow: hidden;
  }
  .mobile-input-checkbox>.input>h1{
    position: absolute;
    top: .19rem;
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
  .mobile-input-checkbox>.input>h1>span{
    color: #7f7f7f;
    font-size: 13px;
  }
  .mobile-input-checkbox>.mobile-content>.ipt{
    height: 100%;
    position: relative;
    padding: .58rem 0 0 .15rem;
    box-sizing: border-box;
    width: 100%;
  }
  .mobile-input-checkbox .radio-option{
    display: block;
    height: 58px;
    line-height: 58px;
    border-top: 1px solid #d9d9d9;
  }
  .mobile-input-checkbox .radio-option>.radio>.radio-core{
    box-sizing: border-box;
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .mobile-input-checkbox .radio-option>.radio-label{
    vertical-align: middle;
    margin-left: 6px;
    color: #31364a;
    font-size: 14px;
  }
  .mobile-input-checkbox .radio-option>.radio>input[type=checkbox]{
    display: none;
  }
  .mobile-input-checkbox .radio-option>.radio>input[type=checkbox]:checked+.radio-core{
    background-color: #26a2ff !important;
    border: 1px solid #26a2ff !important;
  }
  .mobile-input-checkbox .radio-option>.radio>input[type=checkbox]+.radio-core:after{
    border: 2px solid transparent;
    border-left: 0;
    border-top: 0;
    content: " ";
    -webkit-transform: rotate(45deg) scale(0);
    transform: rotate(45deg) scale(0);
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s, -webkit-transform .2s;
    top: 3px;
    left: 6px;
    position: absolute;
    width: 6px;
    height: 11px;
  }
  .mobile-input-checkbox .radio-option>.radio>input[type=checkbox]:checked+.radio-core:after{
    border-color: #fff;
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
  }


</style>
