<style src="bootstrap.css"></style>

<template>
  <button class="btn btn-primary">Hello</button>
	<main class="container">
    <hello :username="username"></hello>
    <bye-bye :username="username"></bye-bye>
	</main>
</template>

<script>
import comps from 'src/main.js'
export default {
  data  () {
    return {
      username : "书写的信"
    }
  },
  components: {
    hello : comps.hello,
    byeBye : comps.byeBye
  }
}
</script>
