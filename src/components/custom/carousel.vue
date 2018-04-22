<template>
    <div class="casl_container" :style="{backgroundColor:contents.backgroundColor}" @click="$emit('click')" :id="id">
        <ul class="casl_body" :style="{marginTop:marginTop+'px',transition:transition}">
            <li :style="contents.itemTextStyle" v-for="(item,index) in contents.dataset" :key="index"><div v-html="item"></div></li>
        </ul>
        
    </div>
</template>

<script>
export default {
  props: ["contents", "id"],
  data() {
    return {
      marginTop: 0,
      transition: 0,
      timeout: null,
      timer: null
    };
  },
  methods: {
    scrollList(self, obj) {
      self = self || this;
      var scrollHeight = $(obj)
        .parent()
        .find("ul li:first")
        .height();
      if (self.contents.speed)
        self.transition = self.contents.speed / 1000 + "s";
      self.marginTop = -scrollHeight;
      if (self.timeout) clearTimeout(self.timeout);
      self.timeout = setTimeout(() => {
        self.transition = "0s";
        self.marginTop = 0;
        $(obj)
          .find("li:first")
          .appendTo(obj);
      }, self.contents.speed);
    },
    //绑定事件
    triggerEvent(self) {
      let $uList = $("#" + self.id).find("ul");
      $uList.off("mouseleave");
      //触摸清空定时器
      $uList
        .hover(
          () => {
            // 悬停
            if (self.contents.isHoverStop) clearInterval(self.timer);
          },
          () => {
            // 离开
            if (self.contents.isHoverStop) self.$options.methods.setIntervalEven(self,$uList);
            
          }
        )
        // .trigger("mouseleave"); //自动触发触摸事件
        self.$options.methods.setIntervalEven(self,$uList)
    },
    //设置定时器
    setIntervalEven(self,$uList) {
      if(self.timer) clearInterval(self.timer);
      let t = self.contents.delay;
      self.timer = setInterval(function() {
        //修改定时器的时间，重置定时器
        if (t !== self.contents.delay) return self.$options.methods.setIntervalEven(self,$uList);
        //组件被销毁了，删除定时器
        if ($("#" + self.id).length <= 0) return clearInterval(self.timer);
        //绑定事件
        self.$options.methods.scrollList(self, $uList);
      }, self.contents.delay);
    }
  },
  mounted() {
    let self = this;
    self.$options.methods.triggerEvent(self);
  },
  watch: {
    id(val) {
      self.$options.methods.triggerEvent(self);
    }
  }
};
</script>
<style scoped>
.casl_container {
  height: 100%;
  overflow: hidden;
}
.casl_body {
  position: relative;
  list-style: none;
  width: 100%;
  height: 100%;
  margin-top: 0;
}
.casl_body li {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  /* line-height: 55px; */
  align-items: center;
  transition: 0.6s;
}
.casl_body li > div {
  text-align: center;
  padding: 0 10px;
  width: 100%;
  text-align: inherit;
}
</style>
