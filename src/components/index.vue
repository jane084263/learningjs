<template>
  <div class="container">
    <div class="page_hd">
      <h3 class="text-center">
        This is js reviewing demo
      </h3>
    </div>
    <div class="page_bd">
      <template v-for="item in list">
        <mt-cell :title="item.title" :to="item.to" is-link :value="item.value">
        </mt-cell>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        list: [
          {
            title: "第一章",
            to: "/chapter_1",
            value: "javascript 简介",
          },
          {
            title: "第二章",
            to: "/chapter_2",
            value: "在html中使用javascript",
          },
          {
            title: "第三章",
            to: "/chapter_3",
            value: "基本概念",
          },
          {
            title: "第四章",
            to: "/chapter_4",
            value: "变量作用域和内存问题",
          },
          {
            title: "第五章",
            to: "/chapter_5",
            value: "引用类型",
          },
          {
            title: "第六章",
            to: "/chapter_6",
            value: "面向对象的程序设计",
          },
          {
            title: "第七章",
            to: "/chapter_7",
            value: "函数表达式",
          },
          {
            title: "第八章",
            to: "/chapter_8",
            value: "BOM",
          },
          {
            title: "第九章",
            to: "/chapter_9",
            value: "客户端检测",
          },
          {
            title: "第十章",
            to: "/chapter_10",
            value: "DOM",
          },
          {
            title: "第十一章",
            to: "/chapter_11",
            value: "DOM扩展",
          },
          {
            title: "第十二章",
            to: "/chapter_12",
            value: "DOM2和DOM3",
          },
          {
            title: "第十三章",
            to: "/chapter_13",
            value: "事件",
          },
          {
            title: "第十四章",
            to: "/chapter_14",
            value: "表单脚本",
          },
          {
            title: "第十五章",
            to: "/chapter_15",
            value: "使用canvas画图",
          },
          {
            title: "第十六章",
            to: "/chapter_16",
            value: "html5脚本编程",
          },
          {
            title: "第十七章",
            to: "/chapter_17",
            value: "错误处理与调试",
          },
          {
            title: "第十八章",
            to: "/chapter_18",
            value: "js与xml",
          },
          {
            title: "第十九章",
            to: "/chapter_19",
            value: "E4X",
          },
          {
            title: "第二十章",
            to: "/chapter_20",
            value: "JSON",
          },
          {
            title: "第二十一章",
            to: "/chapter_21",
            value: "ajax与comet",
          },
          {
            title: "第二十二章",
            to: "/chapter_22",
            value: "高级应用技巧",
          },
          {
            title: "第二十三章",
            to: "/chapter_23",
            value: "离线应用与客户端缓存",
          },
          {
            title: "第二十四章",
            to: "/chapter_24",
            value: "最佳实践",
          },
          {
            title: "第二十五章",
            to: "/chapter_25",
            value: "新兴API",
          },
          {
            title: "附录A",
            to: "/chapter_26",
            value: "ES harmony",
          },
          {
            title: "附录B",
            to: "/chapter_27",
            value: "严格模式",
          },
          {
            title: "附录C",
            to: "/chapter_28",
            value: "js库",
          },
          {
            title: "附录D",
            to: "/chapter_29",
            value: "js工具",
          },
          {
            title: "vue源码学习",
            to: "/chapter_30",
            value: "vue源码学习",
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .page_hd {
    padding: 15px;
  }

  .page_bd {
    padding: 15px;
  }
</style>
