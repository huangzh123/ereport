<template>
  <div class="wbipt_textarea_ctn" v-show="!setting.isShow || setting.isShow({others:this.others,contents:this.contents})">
    <div class="wbipt_textarea_left">
      <span>{{setting.title}}</span>
    </div>
    <div class="wbipt_textarea_right" v-loading="setting.loading">
      <textarea 
      v-if="setting.model" 
      type="text"
      :rows="setting.rows || 5" 
      :placeholder="setting.describe" 
      :value="returnVal(contents,others,setting.model)" 
      v-on:input="updateValue($event.target.value)"></textarea>
      <p v-show="setting.remark">{{setting.remark}}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ["setting", "cid", "contents", "others"],
  data() {
    return {
      returnVal: (contents, others, str) => {
        let val = eval(str);
        if (this.setting.format) val = this.setting.format(val);
        return val;
      }
    };
  },
  mounted() {
    let self = this;
    if (self.setting.init) {
      let opt = {
        self,
        setting: self.setting,
        others: self.others,
        contents: self.contents
      };
      self.setting.init(opt);
    }
  },
  methods: {
    updateValue(value) {
      let self = this;
      if (self.setting.reformat) value = self.setting.reformat(value);
      // console.log(value);
      let opt = {
        self,
        setting: self.setting,
        others: self.others,
        contents: self.contents,
        cid: self.cid,
        value:value
      };
      if (self.setting.updateValue) {
        self.setting.updateValue(opt, () => {
          self.$emit("updateValue", value, self.setting.model, self.cid); //自定义事件，并传参
        });
      } else {
        self.$emit("updateValue", value, self.setting.model, self.cid); //自定义事件，并传参
      }
    }
  },
  watch: {
    cid(val) {
      let self = this;
      if (self.setting.init) {
        let opt = {
          self,
          setting: self.setting,
          others: self.others,
          contents: self.contents
        };
        self.setting.init(opt);
      }
    }
  }
};
</script>


<style scoped>
.wbipt_textarea_ctn {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 5px 0 15px;
  overflow: hidden;
}
.wbipt_textarea_left {
  width: 21%;
  min-width: 70px;
  flex-grow: 0;
  padding-right: 5px;
  padding-top: 7px;
  text-align: right;
}
.wbipt_textarea_left > span {
  font-size: 12px;
  color: #595961;
}
.wbipt_textarea_right {
  flex-grow: 1;
  padding: 0 15px 0 10px;
  overflow: hidden;
}
.wbipt_textarea_right > textarea {
  min-height: 74px;
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
  margin: 0;
  /* resize: none; */
}
.wbipt_textarea_right > textarea:focus {
  border-color: #23b7e5;
  outline: none;
}
.wbipt_textarea_right > p {
  font-size: 12px;
  color: #a3a3a3;
  margin: 0;
  padding-top: 2px;
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
