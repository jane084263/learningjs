<template>
  <div class="container">
    <div class="page__hd">this is chapter XMLHttpRequest</div>
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
      createXHR: function () {
        if (typeof XMLHttpRequest != "undefined") {
          return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
          if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
              "MSXML2.XMLHttp"
            ], i, len;
            for (i = 0, len = versions.length; i < len; i++) {
              try {
                new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                break;
              } catch (ex) {
                //跳过 }
              }
            }
          }
        } else {
          throw new Error("No XHR object available.");
        }
        // xhr 的用法 请求的方式 url 是否异步
//        xhr.open("get","example.php",false); false 代表同步
//        xhr.send() //发送请求 接受一个参数  发送的数据
//        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
//          alert(xhr.responseText);
//        } else {
//          alert("Request was unsuccessful: " + xhr.status);
//        }
      },
      xhr: function () {
        let xhr = this.createXHR();
        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
              alert(xhr.responseText);
            } else {
              alert("Request was unsuccessful: " + xhr.status);
            }
          }
        };
        xhr.open('get', 'example.txt', true);
        xhr.send(null);
        // 在接受到请求之前，还可以用abort（） 来取下请求
        // http 头部信息
        // Accept application/json text/plain 浏览器能处理的内容类型
        // Accept-Charset 浏览器能够显示的字符集
        // Accept-Encoding 浏览器能够处理的压缩编码
        // Accept-language 浏览器当前设置的语言
        // Connection 浏览器与服务器之间的链接类型
        // cookie 当前页面设置的cookie
        // referer 请求的url
      },
      addURLParam: function () {
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
      },
      submitData: function () {
        let xhr = this.createXHR();
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
              alert(xhr.responseText);
            } else {
              alert("Request was unsuccessful: " + xhr.status);
            }
          }
          xhr.open("post", "postexample.php", true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//          var form = document.getElementById("user-info");
//          xhr.send(serialize(form));
        }
      },
      test:function () {
        // this is note
        console.log(111111);
      }
    },
    mounted() {
      this.createXHR()
      this.addURLParam()
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
