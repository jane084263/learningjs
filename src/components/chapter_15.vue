<template>
  <div class="container">
    <div class="page__hd text-center" @click="click_back">this is chapter 15</div>
    <div class="page__bd text-center">
      <!--<img src="../assets/logo.png" alt="">-->
      <canvas ref="canvas" width="300" height="300">
      </canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      click_back: function () {
        this.$router.push({path: '/'})
      },
      //绘制矩形
      draw: function () {
        let ctx = this.$refs.canvas.getContext('2d');
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(10, 10, 50, 50);
        ctx.strokeStyle = 'rgba(255,0,0,0.6)';
        ctx.strokeRect(70, 70, 50, 50);
        ctx.clearRect(30, 30, 50, 50);
        console.log('ctx', ctx);
      },
      // 绘制图片
      draw_image: function () {
        let img,
          canvas,
          dataURl;
        canvas = this.$refs.canvas;
        img = new Image();
        img.src = require('../assets/logo.png');
        console.log('img', img);
        let ctx = this.$refs.canvas.getContext('2d');
        ctx.drawImage(img, 10, 10, 50, 50);
        dataURl = canvas.toDataURL();
        console.log('dataURl',dataURl);
      },
      //阴影
      draw_shadow:function () {
        let ctx;
        ctx = this.$refs.canvas.getContext('2d');
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(10,10,50,50);
        ctx.fillStyle = 'rgba(0,0,255,1)';
        ctx.fillRect(30,30,50,50);
      },
      draw_gradient:function () {
        let ctx,
            gradient;
        ctx = this.$refs.canvas.getContext('2d');
        gradient = ctx.createLinearGradient(30,30,70,70);
        gradient.addColorStop(0,"white");
        gradient.addColorStop(1,"black");
        ctx.fillStyle = gradient;
        ctx.fillRect(30,30,50,50);

      },
      draw_patten:function () {
        let ctx,img,pattern;
        ctx = this.$refs.canvas.getContext('2d');
        img = new Image();
        img.src = require('../assets/logo.png');
        console.log('ctx',ctx);
        pattern = ctx.createPattern(img,'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(10,10,300,300);
        console.log(ctx.getImageData(10,10,50,50));
      }
    },
    mounted() {
//      this.draw();
//      this.draw_image();
//      this.draw_shadow();
//      this.draw_gradient();
      this.draw_patten();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
