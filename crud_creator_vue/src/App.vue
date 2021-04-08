<template>
	<div id="app">
		<div class="columns">
			<div class="column is-2">
				<Menu/>
			</div>
			<div class="column">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
	components: { Menu }
}
</script>

<style lang="scss">
#app {
	padding-top: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
