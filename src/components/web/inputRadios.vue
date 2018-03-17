<template>
  <div class="web-input-radios">
    <h1 class="web-title">{{setting.title}}<span>{{setting.subTitle}}</span></h1>


    <template v-for="item in setting.options">
      <label>
        <input class="comp-ipt-checkbox" type="radio" v-bind:value="item.value" :checked="contents[returnVal(setting.model)] === item.value"  v-on:change="updateValue($event.target.value)">
        <i></i>
        {{item.label}}
      </label>

    </template>
  </div>
</template>

<script>
  import tool from '../../tool/common'
  export default {
    props: ['setting','index','contents'],
    data () {
      return {
        returnVal:function(str){
          return str.split('.')[1];
        }
      }
    },
    methods:{
      updateValue(value){
        this.$emit('updateValue',value,this.setting.model); //自定义事件，并传参
      }
    },
    watch:{

    }
  }
</script>


<style scoped>
  .comp-ipt-checkbox{
    display: none;
  }
  .web-input-radios label{
    display: inline-block;
    position: relative;
    color: #fff;
    padding-left: .22rem;
    font-size: .13rem;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently not supported by any browser */
  }
  .comp-ipt-checkbox+i{
    content: '';
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.21);
    background-color: #4c5a63;
    height: .15rem;
    width: .15rem;
    border-radius: 50%;
    position: absolute;
    left: 0 ;
    top: .02rem;
  }
  .comp-ipt-checkbox:checked+i{
    display: block;
    background: transparent url("../../assets/checked.png");
    background-size: 100% 100%;
    border: 0;
    animation: bounceIn 1s;
  }
  .web-input-radios label{
    margin-right: .2rem;
    display: block;
    margin-bottom: .1rem;
  }

</style>
