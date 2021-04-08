<template>
	<div id="crud">
		<h1 class="title">Gerenciando {{ entityName }}</h1>

		<modal name="form-entity" height="auto">
			<div class="modal-container">
				<Form
					@save="onSave"
					@cancel="onCancel"
					:descriptor="descriptor"
					:entity="entity"
					:title="entityName | titleForm(indexEdit)"
				/>
			</div>
		</modal>

		<div class="columns">
			<div class="column">
				<List
					@edit="onEdit"
					@remove="onRemove"
					:descriptor="descriptor"
					:entities="list"
				/>
			</div>
		</div>

		<div class="buttons">
			<button id="form-field" class="button is-primary" @click.prevent="add">
				<span class="icon-text">
					<span>Cadastrar Entidade</span>
					<span class="icon">
					<i class="mdi mdi-plus-thick"></i>
				</span>
				</span>
			</button>
		</div>
	</div>
</template>

<script>
import Form from '@/components/forms/Form.vue'
import List from '@/components/List.vue'

export default {
	name: 'CRUD',

	components: { Form, List },

	filters: {
		titleForm (message, indexEdit) {
			if (indexEdit !== null && indexEdit !== undefined && indexEdit >= 0)
				return `Alterando ${message}`
			else
				return `Cadastrando ${message}`
		}
	},

	data () {
		return {
			indexEdit: null,
			entityName: null,
			entity: {}
		}
	},

	watch: {
		'$route.path' () {
			this._load()
		}
	},

	methods: {
		_load () {
			this.indexEdit = null
			this.entity = {}
			this.entityName = this.$route.params.entityName
		},

		onSave (entity) {
			if (this.indexEdit !== null && this.indexEdit !== undefined && this.indexEdit >= 0)
				this.$store.commit('editEntity', {
					name: this.entityName,
					index: this.indexEdit,
					values: entity
				})
			else
				this.$store.commit('addEntity', {
					name: this.entityName,
					values: entity
				})

			this.$modal.hide('form-entity')
		},

		onCancel () {
			this.$modal.hide('form-entity')
		},

		add () {
			this.indexEdit = null
			this.entity = {}
			this.$modal.show('form-entity')
		},

		onEdit (entity, index) {
			this.indexEdit = index
			this.entity = { ...entity }
			this.$modal.show('form-entity')
		},

		onRemove (_, index) {
			this.$store.commit('removeEntity', {
				name: this.entityName,
				index
			})
		}
	},

	created () {
		this._load()
	},

	computed: {
		descriptor () {
			return this.$store.state.entities[this.entityName].descriptor
		},

		list () {
			return this.$store.state.entities[this.entityName].list
		}
	}
}
</script>

<style lang="scss">
	#crud {
		.modal-container {
			margin: 1rem;
		}
	}
</style>
