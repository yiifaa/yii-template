<template>
  <H1>byebye,{{username}}</H1>
</template>

<script>
  export default {
    props: {
      username: {
        type: String,
        default: ''
      }
    }
  }
</script>
