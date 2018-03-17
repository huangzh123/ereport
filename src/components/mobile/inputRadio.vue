<template>
  <div class="mobile-container mobile-input-radio"
       @click="select(id,index)"
       v-bind:style="style">
    <div class="mobile-content input">
      <h1>{{contents.title}}<span v-if="contents.placeholder">({{contents.placeholder}})</span></h1>
      <div class="ipt">
        <label class="radio-option" v-for="item in contents.options" >
          <span class="radio">
            <input type="radio"
                   :name="name"
                   v-bind:value="item.value"
                   v-model="contents.value"
                   :checked="contents.value == item.value"
            >
            <span class="radio-core"></span>
          </span>
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
        name:''
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
  .mobile-input-radio>.input{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #fff !important;
     border-bottom:1px solid #d9d9d9;
    overflow: hidden;
  }
  .mobile-input-radio>.input>h1{
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
  .mobile-input-radio>.input>h1>span{
    color: #7f7f7f;
    font-size: 13px;
  }
  .mobile-input-radio>.mobile-content>.ipt{
    height: 100%;
    position: relative;
    padding: .58rem 0 0 .15rem;
    box-sizing: border-box;
    width: 100%;
  }
  .mobile-input-radio .radio-option{
    display: block;
    height: 58px;
    line-height: 58px;
    border-top: 1px solid #d9d9d9;
  }
  .mobile-input-radio .radio-option>.radio>.radio-core{
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
  .mobile-input-radio .radio-option>.radio-label{
    vertical-align: middle;
    margin-left: 6px;
    color: #31364a;
    font-size: 14px;
  }
  .mobile-input-radio .radio-option>.radio>input[type=radio]{
    display: none;
  }
  .mobile-input-radio .radio-option>.radio>input[type=radio]:checked+.radio-core{
    background-color: #26a2ff !important;
    border: 1px solid #26a2ff !important;
  }
  .mobile-input-radio .radio-option>.radio>input[type=radio]+.radio-core:after{
    content: " ";
    border-radius: 100%;
    top: 5px;
    left: 5px;
    position: absolute;
    width: 8px;
    height: 8px;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s, -webkit-transform .2s;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  .mobile-input-radio .radio-option>.radio>input[type=radio]:checked+.radio-core:after{
    background-color: #fff;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

</style>
