<template>
	<div id="menu" class="home">
		<aside class="menu">
			<p class="menu-label">
				Entidades
			</p>
			<router-link to="/create-entity">
				<button class="button is-primary">
					<span class="icon-text">
						<span>Criar</span>
						<span class="icon">
							<i class="mdi mdi-plus-thick"></i>
						</span>
					</span>
				</button>
			</router-link>
			<ul id="entities" class="menu-list">
				<li><a>Pessoas</a></li>
			</ul>
		</aside>
	</div>
</template>

<script>
export default {
	name: 'Menu'
}
</script>

<style lang="scss">
	#menu {
		#entities {
			margin-top: 1rem;
		}
	}
</style>

<style lang="scss">
#menu {
	text-align: center;
}
</style>
