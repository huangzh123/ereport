<template>
  <div class="mobile-container mobile-button"
       @click="select(id,index)"
       v-bind:style="style">
    <div class="mobile-content input" >
      <button @click="commit" :style="{'backgroundColor':contents.backgroundColor,'borderRadius':borderRadius}">{{contents.title}}</button>
      <!--<div class="button">{{contents.title}}</div>-->
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
        borderRadius: this.contents.borderRadius+"px"
      }
    },
    mounted () {
      this.style = {
        paddingBottom: this.contents.marginVertical+"px",
        paddingTop: this.contents.marginVertical+"px",
        paddingLeft: this.contents.marginLevel+"px",
        paddingRight: this.contents.marginLevel+"px",
      }
      this.borderRadius = this.contents.borderRadius+"px"
    },
    methods:{
        select(id,index){
          this.$emit('focuscomp',id,index);
          return false;
        },
        commit(){
          this.$emit('commit',this.contents.requestUrl);
          return false;
        },

    },
    watch:{
      'contents.marginLevel':function (val) {
        let el = $("#"+this.id).find('.mobile-container');
        el.css("paddingLeft",parseFloat(val));
        el.css("paddingRight",parseFloat(val));
      },
      'contents.marginVertical':function (val) {
        let el = $("#"+this.id).find('.mobile-container');
        el.css("paddingBottom",parseFloat(val));
        el.css("paddingTop",parseFloat(val));
      },
      'contents.borderRadius':function (val) {
        let el = $("#"+this.id).find('.mobile-container button');
        el.css("borderRadius",parseFloat(val));
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
  .mobile-button>.mobile-content{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    /*background-color: #fff !important;*/
    overflow: hidden;
    /*padding:.02rem .1rem;*/
  }
  .mobile-button>.mobile-content>button{
    height: 100%;
    width: 100%;
    font-size: .14rem;
    /* background-color: #59c7f9 !important; */
    color: #fff;
    /* border-radius: .2rem; */
    /*pointer-events: none;*/
    /*cursor: none;*/
  }
  .mobile-button>.mobile-content>div.button{
    height: 100%;
    width: 100%;
    font-size: .14rem;
    background-color: #59c7f9 !important;
    color: #fff;
     /* border-radius: .2rem;  */
    text-align: center;
  }

</style>
