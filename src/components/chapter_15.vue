<template>
  <div class="container">
    <div class="page__hd" @click="click_back">this is chapter 15</div>
    <div class="page__bd text-center">
        <canvas ref="canvas" width="300" height="300" >

        </canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      click_back:function () {
        this.$router.push({path:'/'})
      },
      draw:function () {
        let ctx = this.$refs.canvas.getContext('2d');
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(10,10,50,50);
        ctx.strokeStyle = 'rgba(255,0,0,0.6)';
        ctx.strokeRect(70,70,50,50);
        ctx.clearRect(30,30,50,50);
        console.log('ctx',ctx);
      }
    },
    mounted() {
      this.draw();
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
