<template>
  <div class="container">
    <div class="page__hd">this is chapter 14</div>
    <div class="page__bd">
      <form action="">
        <input type="text" name="text">
        <input type="reset" value="reset form" >
        <input type="submit">
      </form>
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
