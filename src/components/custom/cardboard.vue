<template>
    <div class="custom_container" :style="{backgroundColor:contents.backgroundColor}" @click="$emit('click')">
        <div class="custom_body">
            <div class="cd_headtitle" v-show="contents.card.show" :style="contents.card.title.textStyle">
                <span>{{contents.card.title.text}}</span>
            </div>
            <div class="cd_maindiv" v-show="contents.card.show" :style="contents.card.data.textStyle">
                <span>{{contents.dataset.data}}</span>
            </div>
            <div class="cd_subbox">
                <div class="cd_subitem" v-show="contents.card_2.show">
                    <div class="cd_sit1" :style="contents.card_2.title.textStyle"><span>{{contents.card_2.title.text}}</span></div>
                    <div class="cd_sit2" :style="contents.card_2.data.textStyle"><span>{{contents.dataset.data_2}}</span></div>
                </div>
                 <div class="cd_subitem" v-show="contents.card_3.show">
                    <div class="cd_sit1" :style="contents.card_3.title.textStyle"><span>{{contents.card_3.title.text}}</span></div>
                    <div class="cd_sit2" :style="contents.card_3.data.textStyle"><span>{{contents.dataset.data_3}}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["contents"],
  data() {
    return {
    };
  }
};
</script>
<style scoped>
.custom_container {
  height: 100%;
}
.custom_body {
  position: relative;
  height: 100%;
}
.cd_headtitle {
  position: absolute;
  /* top: 10%;
  left: 5%;
  right: 5%;
  font-size: 12px; */
}
.cd_maindiv {
  position: absolute;
  /* top: 25%;
  left: 5%;
  right: 5%;
  font-size: 28px;
  color: rgb(249, 174, 1); */
}
.cd_subbox {
}
.cd_subitem {
}
.cd_sit1 {
  /* font-size: 14px; */
}
.cd_sit2 {
  /* font-size: 23px; */
  /* color: rgb(249, 174, 1); */
}
.cd_subbox > .cd_subitem:nth-child(2n) > .cd_sit1 {
  position: absolute;
  /* top: 60%;
  left: 55%;
  right: 5%; */
}
.cd_subbox > .cd_subitem:nth-child(2n) > .cd_sit2 {
  position: absolute;
  /* top: 75%;
  left: 55%;
  right: 5%; */
}
.cd_subbox > .cd_subitem:nth-child(2n + 1) > .cd_sit1 {
  position: absolute;
  /* top: 60%;
  left: 5%;
  right: 55%; */
}
.cd_subbox > .cd_subitem:nth-child(2n + 1) > .cd_sit2 {
  position: absolute;
  /* top: 75%;
  left: 5%;
  right: 55%; */
}
</style>
