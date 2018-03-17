<template>
  <p class="web-p bg-grey"><i v-if="setting.icon" class="iconfont web-tips" :class="setting.icon"></i>{{setting.title}}</p>
</template>
<script>
  export default {
    name:'web-tips',
    props: ['setting'],
    data () {
      return {}
    }
  }
</script>
<style scoped>
  p.web-p{
    height: .4rem;
    line-height: .4rem;
    width: 100%;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.80);
  }
  p.web-p.bg-grey{
    background-color: #707f88;
    border-radius: 2px;
    height: .34rem;
    line-height: .34rem;
    margin: .06rem 0;
  }
  i.web-tips{
    font-size: 15px;
    margin:0 .1rem;
  }
</style>
