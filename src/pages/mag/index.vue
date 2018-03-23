<template>
  <div id="mag">
    <header v-show="0">
      <a class="logo" href="#">SOFTCAN</a>
    </header>
    <div class="container">
        <div class="left">
          <div class="logo">
            <!--<div class="img"></div>-->
            <img src="../../assets/logo.png" alt="">
          </div>
          <em></em>
          <div class="menus">
            <div class="lm-item" :class="{'active': menu.open}" v-for="(menu,index) in menus" :key="index">
              <div class="item"  @click="openMenus(index)"><div><i class="iconfont" :class="menu.icon"></i><span class="text">{{menu.name}}</span></div><i class="iconfont icon-down"></i></div>
              <div class="lm-downlist">
                <router-link :to="item.path" class="item" v-for="(item) in menu.child" :key="item.id"  >
                  <span class="web-font">{{item.name}}</span><i></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="appQrcode">
            <!-- <div class="img"><img id='appQRcode' src="../../assets/code.jpg" alt=""></div> -->
            <div class="img"><img id='appQRcode' src="" alt=""></div>
            <div class="desc">
              <h1>APP客户端</h1>
              <p>手机扫码访问</p>
              <p>或<a :href="CONFIG.IP_APP" target="view_frame">直接访问</a></p>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="page-contents">
            <router-view></router-view>
          </div>
        </div>
    </div>
    <footer></footer>
    <div id="qrcodeImg_total" v-show="0"></div>
  </div>
</template>
<script>
import Tool from '../../tool/common'
export default {
 data(){
     return{
       value2:false,
        menus:[
          {
              name:"页面管理",
              icon:"icon-biaodan1",
              open:true,
              child:[
                {
                  name:"我的页面",
                  path:"/mag/my-chart"
                },{
                  name:"页面类型",
                  path:"/mag/chart-type"
                }
              ]
          },
          {
            name:"权限管理",
            icon:"icon-quanxian",
            open:true,
            child:[
              {
                name:"角色管理",
                path:"/mag/role"
              }
            ]
          },
          {
            name:"模板管理",
            icon:"icon-moban1",
            open:true,
            child:[
              {
                name:"我的模板",
                path:"/mag/my-template"
              }
            ]
          },
          
        ]
     }
 },
  methods:{
    openMenus(i){
        let obj = this.menus[i];
        obj.open =  !obj.open;
      this.$set(this.menus,i,obj);
    }
  },
  mounted(){
    //  let qrcode = $("#qrcodeImg_total")
    //       .qrcode({
    //         text: this.CONFIG.IP_APP
    //       })
    //       .hide();
    //     let canvas = qrcode.find("canvas").get(0);
    //     $("#appQRcode").attr("src", canvas.toDataURL("image/jpg"));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../assets/css/msg/index.css";
</style>
