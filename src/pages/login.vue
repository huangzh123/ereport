<template>
  <div class="ln_container">
      <div class="ln_header">
          <img class="ln_header_timg" src="../assets/title-login.png" alt="">
      </div>
      <div class="ln_body">
          <div class="ln_body_bg"></div>
          <canvas id="waves" class="waves"></canvas>
          <div class="ln_cotents">
              <div class="ln_circle"></div>
              <div class="ln_circle2"></div>
              <div class="ln_header_title">SOFTCAN - 软件开发平台</div>
              <div class="ln_phh1">
                  <!-- <h1>SOFTCAN</h1> -->
                  <h2 class="t1">软件开发平台</h2>
                  <h2 class="t2">快速设计报表系统</h2>
              </div>
              <img class="ln_phimg" src="../assets/ph-login.png" alt="">
              <div class="ln_form" 
                    v-loading="loading"
                element-loading-text="登录中...">
                  <h1 class="ln_form_title">用户登录</h1>
                  <el-input class="ln_form_input" v-model="username" placeholder="请输入您的账号" clearable></el-input>
                  <el-input class="ln_form_input" type="password" v-model="password" placeholder="请输入您的密码" clearable></el-input>
                  <el-checkbox class="ln_form_radio"  v-model="isRemenber">记住密码</el-checkbox>
                  <button ref="loginbtn" class="ln_form_btn" type="submit" @click="login">登 录</button>
              </div>
          </div>
      </div>
      <div class="ln_footer">
          <div class="ln_bottom_txt">
              <h1>2018厦门建发房地产集团All Right Reserve</h1>
                <h2>京ICP备14007358号-1  版权所有</h2>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "admin",
      password: "123456",
      isRemenber: true,
      loading: false
    };
  },
  methods: {
    startCanvas() {
      var a = new SineWaves({
          el: document.getElementById("waves"),
          speed: 4,
          width: function() {
            var a = $(document).width();
            return 768 > a
              ? 3 *
                  $("#waves")
                    .parent()
                    .width()
              : 1.4 *
                  $("#waves")
                    .parent()
                    .width();
          },
          height: function() {
            return $("#waves")
              .parent()
              .height();
          },
          wavesWidth: "100%",
          ease: "SineInOut",
          waves: [
            //   {
            //     timeModifier: 0.5,
            //     lineWidth: 1,
            //     amplitude: 150,
            //     wavelength: 200,
            //     segmentLength: 1
            //   },
            {
              timeModifier: 0.5,
              lineWidth: 1,
              amplitude: 80,
              wavelength: 150,
              segmentLength: 1
            },
            {
              timeModifier: 0.5,
              lineWidth: 1,
              amplitude: 50,
              wavelength: 80,
              segmentLength: 1
            }
          ],
          initialize: function() {},
          resizeEvent: function() {
            var a = this.ctx.createLinearGradient(0, 0, this.width, 0);
            a.addColorStop(0, "rgba(255, 255, 255, 0)"),
              a.addColorStop(0.5, "rgba(255, 255, 255, 0.2)"),
              a.addColorStop(1, "rgba(255, 255, 255, 0)");
            for (var b = -1, c = this.waves.length; ++b < c; )
              this.waves[b].strokeStyle = a;
            (b = void 0), (c = void 0), (a = void 0);
          }
        }),
        b = $("#waves"),
        c = $(document).scrollTop(),
        d = $(document).scrollTop() + $(window).height(),
        e = b.offset().top + b.height(),
        f = b.offset().top;
      (c > e || f > d) && ((a.running = !1), a.update()),
        $(window).bind("scroll", function() {
          (c = $(document).scrollTop()),
            (d = $(document).scrollTop() + $(window).height()),
            (e = b.offset().top + b.height()),
            (f = b.offset().top),
            c > e || f > d
              ? ((a.running = !1), a.update())
              : ((a.running = !0), a.update());
        });
    },
    login() {
      let self = this;
      if (!self.username) return self.$tool.dialog("请输入账号", "warning");
      if (!self.password) return self.$tool.dialog("请输入密码", "warning");
      self.loading = true;
      if (self.username !== "admin" || self.password !== "123456") {
        setTimeout(() => {
          self.$tool.dialog("账号密码错误,请重试", "error");
          self.loading = false;
        }, 1000);
        return;
      }
      setTimeout(() => {
        self.$tool.setCookie(
          "LOCAL_SERVER_D01_tgc",
          "d6460c44a311d002e18231d630aec",
          1
        );
        self.$router.push("/mag/my-chart");
        self.loading = false;
      }, 2000);
    }
  },
  mounted() {
    let self = this;
    self.$options.methods.startCanvas();
  },
  beforeRouteEnter: (to, from, next) => {
    next(self => {
      document.onkeydown = e => {
        if (e.keyCode === 13 && self.$route.name === "login") {
          self.$refs["loginbtn"].click();
        }
      };
    });
  },
  beforeRouteLeave: (to, from, next) => {
    document.onkeydown = null;
    next();
  }
};
</script>
<style>
.ln_circle {
  position: absolute;
  height: 200px;
  width: 227px;
  right: 0;
  top: -116px;
  background-size: 100% auto;
  background-image: url("../assets/circle3.png");
}
.ln_circle2 {
  position: absolute;
  height: 380px;
  width: 250px;
  left: -14px;
  top: -257px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url("../assets/circle.png");
  opacity: 0.1;
}
#waves {
  position: absolute;
  /* top: 320px; */
  opacity: 0.8;
  width: 100%;
  /* transform: rotate(90deg) */
}
.ln_container {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  background-size: cover;
  overflow: hidden;
}
.ln_header {
  position: relative;
  min-height: 90px;
  flex-grow: 1;
  width: 100%;
}
.ln_header_title {
  position: absolute;
  top: -40px;
  left: 0;
  font-weight: 600;
  font-size: 26px;
  color: #5374af;
}
.ln_header_timg {
  display: none;
  position: absolute;
  bottom: 12px;
  left: 13%;
  height: 26px;
}
.ln_footer {
  position: relative;
  flex-grow: 2;
  height: 56px;
  min-height: 56px;
  width: 100%;
}
.ln_footer .ln_bottom_txt {
  position: absolute;
  bottom: 10px;
  text-align: center;
  font-size: 12px;
  width: 100%;
  color: #999;
  line-height: 20px;
}
.ln_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-grow: 1; */
  height: 500px;
  min-height: 500px;
  width: 100%;
  /* padding-top: 20px; */
  /* background-image: url("../assets/bg-login.png"); */
  background-size: 100% 100%;
  /* overflow: hidden; */
}
.ln_body_bg {
  position: absolute;
  height: 500px;
  min-height: 500px;
  width: 100%;
  /* width: 940px; */
  opacity: 0.9;
  background-image: url("../assets/bg-login.png");
  background-size: 100% 100%;
}
.ln_cotents {
  position: relative;
  flex-grow: 1;
  width: 940px;
  /* border:1px solid #eaeaea; */
}
.ln_phimg {
  position: absolute;
  height: 320px;
  width: auto;
  top: 50%;
  left: 120px;
  margin-top: -150px;
}
.ln_phh1 {
  position: absolute;
  top: 50px;
  left: 40px;
}
.ln_phh1 > h1 {
  width: 10px;
  color: #fff;
  font-size: 16px;
  word-wrap: break-word;
  font-family: "黑体";
}
.ln_phh1 > h2 {
  position: absolute;
  color: #fff;
  font-size: 14px;
  writing-mode: vertical-lr;
  writing-mode: tb-lr;
  height: 200px;
  letter-spacing: 7px;
  font-family: "华为行楷";
  text-shadow: 3px -3px 8px #6f93ca;
}
.ln_phh1 > h2.t1 {
  top: 10px;
  left: 10px;
}
.ln_phh1 > h2.t2 {
  top: 46px;
  left: 40px;
}
.ln_form {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -150px;
  height: 320px;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}
.ln_form_title {
  /* font-family: '黑体'; */
  font-size: 15px;
  color: #333;
  font-weight: 600;
  height: 25px;
  margin-bottom: 40px;
}
.ln_form_input {
  margin-bottom: 15px;
}
.ln_form_radio {
  margin-bottom: 20px;
}
.ln_form_radio .el-checkbox__input {
  vertical-align: sub;
}
.ln_form_radio .el-checkbox__label {
  font-size: 12px;
  color: #999;
  vertical-align: baseline;
}
.ln_form_radio .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #679ceb;
}
.ln_form_radio .el-checkbox__input.is-checked .el-checkbox__inner,
.ln_form_radio .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #679ceb;
  border-color: #679ceb;
}
.ln_form_radio .el-checkbox {
  border-radius: 7px;
}
.ln_form_btn {
  height: 38px;
  line-height: 38px;
  width: 100%;
  border-radius: 3px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  background-color: #7eb0f9;
  transition: 0.3s;
}
.ln_form_btn:hover {
  background-color: #679ceb;
}
</style>
