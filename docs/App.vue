<style src="bootstrap.css"></style>
<style src="syntaxhighlighter.css"></style>
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
      <d3-index></d3-index>
      <!--
      <hello :username="username"></hello>
      <bye-bye :username="username"></bye-bye>
      -->
	</main>
</template>

<script>
import comps from 'src/main.js'
import d3Index from './d3/D3Index.vue'
export default {
  data  () {
    return {
    }
  },
  components: {
    d3Index,
    hello: comps.hello,
    byeBye: comps.byeBye
  }
}
</script>
