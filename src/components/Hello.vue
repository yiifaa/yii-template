<template>
  <H1>Hello,{{username}}</H1>
</template>

<script>
  /**
   *  @class Hello 提示欢迎信息
   *  @desc 输出欢迎功能
   */
  export default {
    props: {
      username: {
        type: String,
        default: ''
      }
    }
  }
</script>
