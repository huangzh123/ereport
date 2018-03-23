<template>
  <div class="wbipt_text_ctn" >
    <div class="wbipt_text_left">
      <span>{{title}}</span>
    </div>
    <div class="wbipt_text_right">
      <input 
      type="text" 
      :placeholder="placeholder" 
      :value="value" 
      v-on:input="updateValue($event.target.value)">
      <p v-show="remark">{{remark}}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ["title", "placeholder", "value", "remark"],
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    updateValue(value) {
      this.$emit("updateValue", value); //自定义事件，并传参
    }
  }
};
</script>


<style scoped>
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
.wbipt_text_left > span {
  font-size: 12px;
  color: #595961;
}
.wbipt_text_right {
  flex-grow: 1;
  padding: 0 15px 0 10px;
}
.wbipt_text_right > input {
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
.wbipt_text_right > input:focus {
  border-color: #23b7e5;
}
.wbipt_text_right > p {
  font-size: 12px;
  color: #a3a3a3;
  margin: 0;
  padding-top: 5px;
  line-height: 15px;
  text-align: justify
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
