<template>
  <canvas class="canvas" :width="canvasWidth || cwidth" :height="canvasHeight || cheight"></canvas>
</template>
<script>
  export default {
    props: ['canvasWidth', 'canvasHeight', 'gridWidth', 'gridHeight','borderWidth'],
    data () {
      var self = this;
      return {
        cwidth: 320,
        cheight: 486,
        gwidth: 26.66666667,
        gheight: 48,
        bwidth:0.5,//线宽
        drawing: null,
        context: null,
        isDraw: false,
        strokeStyle:'#fff',
 
        draw2(){
          const self = this;
          
          let CANVAS_WIDTH = parseFloat(this.canvasWidth || this.cwidth);
          let CANVAS_HEIGHT = parseFloat(this.canvasHeight || this.cheight);
          self.gwidth = CANVAS_WIDTH/12;
          let GRID_WIDTH = parseFloat(this.gridWidth || this.gwidth);
          let GRID_HEIGHT = parseFloat(this.gridHeight || this.gheight);
          if(!GRID_HEIGHT) return false;
          let canvas = $('.canvas')[0];
          if (!canvas.getContext) return false;
          let ctx = canvas.getContext("2d");
          let rows = Math.ceil(CANVAS_WIDTH / GRID_WIDTH);
          let cols = Math.ceil(CANVAS_HEIGHT / GRID_HEIGHT);
          let borderWidth = parseInt(this.borderWidth || 0);

          //先画横线
          for( var i = 1; i < cols+1; i++ ){
            ctx.lineWidth = this.bwidth;
            ctx.strokeStyle = this.strokeStyle;
            ctx.beginPath();
            ctx.moveTo(0,i * (GRID_HEIGHT+borderWidth) - borderWidth);
            ctx.lineTo(CANVAS_WIDTH,i * (GRID_HEIGHT+borderWidth) - borderWidth);
            ctx.stroke();
            //画间距线
            if(borderWidth){
              ctx.lineWidth = this.bwidth;
              ctx.strokeStyle = this.strokeStyle;
              ctx.beginPath();
              ctx.moveTo(0,i * (GRID_HEIGHT+borderWidth));
              ctx.lineTo(CANVAS_WIDTH,i * (GRID_HEIGHT+borderWidth));
              ctx.stroke();
            }
          }
          //再画纵线
          for( var j = 1; j < rows+1; j++ ){
            ctx.lineWidth = this.bwidth;
            ctx.strokeStyle = this.strokeStyle;
            ctx.beginPath();
            ctx.moveTo(j * GRID_WIDTH, 0);
            ctx.lineTo(j * GRID_WIDTH, CANVAS_HEIGHT);
            ctx.stroke();
          }
        }
      }
    },
    created() {

    },
    mounted(){
      let self = this;
      this.$nextTick(function () {
        this.draw2();
      })
    },
    watch: {
      gridHeight(val){
        let self = this;
        let CANVAS_WIDTH = this.canvasWidth || this.cwidth;
        let CANVAS_HEIGHT = this.canvasHeight || this.cheight;
        let drawing = $('.canvas')[0];
        if (!drawing.getContext) return false;
        let context = drawing.getContext("2d");
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        self.draw2();
      },
      borderWidth(val){
        let self = this;
        let CANVAS_WIDTH = this.canvasWidth || this.cwidth;
        let CANVAS_HEIGHT = this.canvasHeight || this.cheight;
        let drawing = $('.canvas')[0];
        if (!drawing.getContext) return false;
        let context = drawing.getContext("2d");
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        self.draw2();
      },
      canvasHeight(val){
        this.$nextTick(function () {
          let self = this;
        let CANVAS_WIDTH = this.canvasWidth || this.cwidth;
        let CANVAS_HEIGHT = this.canvasHeight || this.cheight;
        let drawing = $('.canvas')[0];
        if (!drawing.getContext) return false;
        let context = drawing.getContext("2d");
        context.clearRect(0, 0, this.cwidth, this.cheight);
        self.draw2();
        })
      },
      canvasWidth(val){
        this.$nextTick(function () {
        let self = this;
        let CANVAS_WIDTH = this.canvasWidth || this.cwidth;
        let CANVAS_HEIGHT = this.canvasHeight || this.cheight;
        let drawing = $('.canvas')[0];
        if (!drawing.getContext) return false;
        let context = drawing.getContext("2d");
        context.clearRect(0, 0, this.cwidth, this.cheight);
        self.draw2();
        })
      }
    }
  }
</script>
<style scoped>

</style>
