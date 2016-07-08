<style src="bootstrap.css"></style>

<template>
  <header class="navbar navbar-static-top navbar-inverse" role="banner">
    <div class="container">
      <nav class="navbar-header" id="bs-navbar">
        <button class="navbar-toggle collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#bs-navbar"
                aria-controls="bs-navbar"
                aria-expanded="false">
          <span class="sr-only">{{$t('app.collapse')}}</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="/" class="navbar-brand">{{ $t('app.title') }}</a>
      </nav>
    </div>
  </header>

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
