<template>
  <div class="dn_daset_btn dn_daset_cnbtn"  :class="[setting.btnclass]" v-show="!setting.isShow || setting.isShow({others:this.others})">
    <el-button @click="click" type="primary" :loading="setting.loading"  size="medium" plain><i class="iconfont dn_ticn" :class="[setting.icon]"></i>{{setting.title}}</el-button>
  </div>
</template>

<script>
  export default {
    props: ["setting", "others", "contents", 'cid'],
    data() {
      return {
        value: "",
        temp:'',
        returnVal: (contents,others, str) => {
          return eval(str);
        }
      };
    },
    mounted() {
      let self = this;
      if(self.setting.init){
        let opt = {
          self,
          setting:self.setting,
          contents:self.contents
        }
        self.setting.init(opt,() => {
          self.value = self.returnVal(self.contents, self.others,self.setting.model);
        })
      }
      
    },
    methods: {
      triggerMethod(self,str,cb){
        self = self || this;
        self.$emit("triggerMethod", str, cb); //自定义事件，并传参
      },
      click(){
        if(!this.setting.click) return;
        let opt = {
          self:this,
          setting:this.setting,
          others:this.others,
          contents:this.contents,
          cid:this.cid
        }
        this.setting.click(opt);
      }
    },
    watch: {
      cid(val) {
        this.value = this.returnVal(this.contents,this.others, this.setting.model);
      },
      'setting.loading'(val){
        if(val){
          this.temp = this.setting.icon;
          this.setting.icon = '';
        }else{
          this.setting.icon = this.temp;
        }
      }
    }
  };
</script>


<style scoped>
  .dn_daset_btn {
  text-align: center;
  margin: 10px 0;
}

.dn_daset_cnbtn {
  margin: -5px 0 15px;
}



.dn_daset_cnbtn .iconfont {
  margin: 0 6px 0 0;
  font-size: 20px;
  vertical-align: middle;
}

.dn_daset_cnbtn button {
  color: #23b7e5;
  background: #ecf5ff;
  border-color: #b3d8ff;
  padding: 8px 20px 6px;
}

.dn_daset_rfbtn {
  margin: 20px auto 30px -35px !important;
}

.dn_daset_rfbtn .iconfont {
  margin: 0 6px 0 0!important;
  font-size: 17px!important;
}

.dn_daset_rfbtn button {
  color: #fff!important;
  background-color: #23b7e5!important;
  border-color: #23b7e5!important;
}


</style>
