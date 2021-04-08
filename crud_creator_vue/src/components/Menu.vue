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
				<li v-for="entity of listEntities" :key="entity.name">
					<router-link :to="{ name: 'CRUD', params: { entityName: entity.name } }">
						{{ entity.name }}
					</router-link>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
export default {
	name: 'Menu',

	computed: {
		listEntities () {
			return Object.keys(this.$store.state.entities).map(entityName => ({
				name: entityName,
				descriptor: this.$store.state.entities[entityName].descriptor,
				list: this.$store.state.entities[entityName].list
			}))
		}
	}
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
