<template>
  <div class="wbipt_text_ctn">
    <div class="wbipt_text_left">
      <span>{{title}}</span>
    </div>
    <div class="wbipt_text_right">
      <el-upload :action="CONFIG.REST.uploadImg" 
      list-type="picture-card" 
      :show-file-list='false' 
      :before-upload="beforeAvatarUpload" 
      :on-success="handleAvatarSuccess"
        name='uploadedFile'>
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus"></i>
      </el-upload>
      <div v-if="imageUrl" class="imgbtn" @click="clear">清空</div>
      <p v-show="remark">{{remark}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title", "value", "remark"],
    data() {
      return {
        imageUrl: '',
      };
    },
    // mounted(){
    //   this.imageUrl = this.value || '';
    // },
    methods: {
      beforeAvatarUpload(file) {
        const isJPG = file.type === "image/jpeg";
        const isPNG = file.type === "image/png";
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isJPG && !isPNG) {
          this.$message.error("上传图片只能是 JPG或PNG 格式!");
        }
        if (!isLt2M) {
          this.$message.error("上传图片大小不能超过 5MB!");
        }
        return (isJPG || isPNG) && isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = this.CONFIG.IP + res.url;
        this.$emit("updateValue", this.imageUrl); 
      },
      clear(){
        this.imageUrl = '';
        this.$emit("updateValue", ''); 
      }
    },
    watch:{
      value(val){
        console.log(val)
        this.imageUrl = val || '';
      }
    }
  };
</script>


<style scoped>
  .imgbtn{
    position: absolute;
    right: 45px;
    bottom: 42%;
    width: auto;
    text-align: center;
    font-size: 14px;
    color: #23b7e5;
  }
  .wbipt_text_ctn {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 5px 0 15px;
  }
  .wbipt_text_left {
    width: 21%;
    min-width: 70px;
    flex-grow: 0;
    padding-right: 5px;
    padding-top: 7px;
    text-align: right;
  }
  .wbipt_text_left>span {
    font-size: 12px;
    color: #595961;
  }
  .wbipt_text_right {
    position: relative;
    flex-grow: 1;
    padding: 0 15px 0 10px;
    font-size: 0;
  }
  .wbipt_text_right>input {
    height: 34px;
    width: 100%;
    padding: 6px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e0e0e0;
    border-color: #e0e0e0;
    border-radius: 4px;
    color: #555;
    font-size: 14px;
    box-shadow: none;
    transition: border-color ease-in-out 0.2s, box-shadow ease-in-out 0.15s;
    outline: none;
  }
  .wbipt_text_right>input:focus {
    border-color: #23b7e5;
  }
  .wbipt_text_right>p {
    font-size: 12px;
    color: #a3a3a3;
    margin: 0;
    padding-top: 5px;
    line-height: 15px;
    text-align: justify;
  }
  .web-input-text {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  h1.web-title {
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    color: #595961;
  }
</style>
