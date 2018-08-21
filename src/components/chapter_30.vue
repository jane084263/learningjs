<template>
  <div class="container">
    <div class="page__hd">this is chapter 30</div>
    <div class="page__bd">

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
      defineReactive: function (obj, key, val) {
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function reactiveGetter() {
            return val;
          },
          set: function reactiveSetter(newVal) {
            if (newVal === val) return;
            cb(newVal);
          }
        })
      },
      observer: function (value) {
        if (!value || (typeof value !== 'object')) {
          return;
        }
        Object.keys(value).forEach((key,val,arr) => {
          this.defineReactive(value, key, value[key]);
        });
      },
      createClass:function () {
        class semiVue {
          /* Vue构造类 */
          constructor(options) {
            console.log('this',this);
            this._data = options.data;
            observer(this._data);
          }
        }
        return semiVue;
      }
    },
    mounted() {
      console.log(this.createClass());
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
