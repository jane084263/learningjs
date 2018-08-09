<template>
  <div class="container">
    <div class="page__hd text-center" @click="click_back">this is chapter 16</div>
    <div class="page__bd">
      <section>
        <h4>跨文档消息传递</h4>
        <div>
          iframe 嵌入页面之间的消息传递
          postMessage 向内嵌框架中发送消息。
        </div>
      </section>
      <!--&lt;!&ndash;音频&ndash;&gt;-->
      <!--<audio src=""></audio>-->
      <!--视频-->
      <!--<video src="" ref="video"></video>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
      }
    },
    methods:{
      click_back:function () {
        this.$router.push({path:'/'});
      },
      //跨文档消息传递
      postMessage:function () {

      },
      //vidio 属性
      get_vedioPro:function () {
        let vdo = this.$refs.video;
        // video 的属性值

      },
      create_audio:function() {
        let audio = new Audio();
        console.log('audio',audio);
        audio.addEventListener('canplaythrough',function(e) {
          audio.play();
        })
      }
    },
    mounted() {
      this.get_vedioPro();
//      this.create_audio();
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
