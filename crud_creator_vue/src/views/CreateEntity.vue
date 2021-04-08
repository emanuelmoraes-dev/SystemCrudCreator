<template>
	<div id="create-entity">
		<div class="columns">
			<div class="column is-5">
				<InputForm
					label="Nome da Entidade"
					placeholder="Informe o nome da entidade"
					fieldName="name"
					v-model="entityName"
				/>
			</div>
		</div>

		<modal name="form-field" height="auto">
			<div class="modal-container">
				<Form
					@change="onChangeField"
					@save="onSaveField"
					@cancel="onCancelField"
					:descriptor="descriptor"
					:entity="field"
					:title="'Campo' | titleForm(edit)"
				/>
			</div>
		</modal>

		<div class="columns">
			<div class="column">
				<List
					@edit="editField"
					@remove="removeField"
					:descriptor="descriptor"
					:entities="fields"
				/>
			</div>
		</div>

		<div class="buttons">
			<button id="form-field" class="button is-primary" @click.prevent="addField">
				<span class="icon-text">
					<span>Adicionar Atributo</span>
					<span class="icon">
					<i class="mdi mdi-plus-thick"></i>
				</span>
				</span>
			</button>

			<button id="form-field" class="button is-success" @click.prevent="onSave">
				<span class="icon-text">
					<span>Salvar</span>
					<span class="icon">
					<i class="mdi mdi-content-save"></i>
				</span>
				</span>
			</button>

			<button id="form-field" class="button is-danger" @click.prevent="onCancel">
				<span class="icon-text">
					<span>Cancelar</span>
					<span class="icon">
					<i class="mdi mdi-close-box"></i>
				</span>
				</span>
			</button>
		</div>
	</div>
</template>

<script>
import Form from '@/components/forms/Form.vue'
import InputForm from '@/components/forms/InputForm.vue'
import List from '@/components/List.vue'

export default {
	name: 'CreateEntity',

	components: { Form, InputForm, List },

	filters: {
		titleForm (message, edit) {
			if (edit)
				return `Alterando ${message}`
			else
				return `Cadastrando ${message}`
		}
	},

	data () {
		return {
			entityName: '',
			descriptor: {
				name: {
					label: 'Nome',
					type: 'input',
					placeholder: 'Nome do Campo'
				},

				label: {
					label: 'Título',
					type: 'input',
					placeholder: 'Nome do campo a ser exibido'
				},

				type: {
					label: 'Tipo',
					type: 'select',
					source: ['input', 'select']
				},

				placeholder: {
					label: 'Placeholder',
					type: 'input',
					placeholder: 'placeholder'
				},

				source: {
					label: 'Opções',
					type: 'input',
					placeholder: 'Opções separadas por ","'
				}
			},
			field: {},
			entity: {},
			toRemoveField: null,
			edit: false
		}
	},

	watch: {
		'$route.path' () {
			this.entity = {}
			this.entityName = ''
		}
	},

	methods: {
		addField () {
			this.edit = false
			this.$set(this.descriptor.placeholder, 'show', false)
			this.$set(this.descriptor.source, 'show', false)
			this.field = {}
			this.$modal.show('form-field')
		},

		editField (field) {
			this.edit = true
			if (field.type === 'input') {
				this.$set(this.descriptor.placeholder, 'show', true)
				this.$set(this.descriptor.source, 'show', false)
			} else if (field.type === 'select') {
				this.$set(this.descriptor.placeholder, 'show', false)
				this.$set(this.descriptor.source, 'show', true)
			} else {
				this.$set(this.descriptor.placeholder, 'show', false)
				this.$set(this.descriptor.source, 'show', false)
			}
			this.field = { ...field }
			this.toRemoveField = field
			this.$modal.show('form-field')
		},

		removeField (field) {
			delete this.entity[field.name]
			this.entity = { ...this.entity }
		},

		onChangeField (field) {
			if (field.type === 'input') {
				this.$set(this.descriptor.placeholder, 'show', true)
				this.$set(this.descriptor.source, 'show', false)
			} else if (field.type === 'select') {
				this.$set(this.descriptor.placeholder, 'show', false)
				this.$set(this.descriptor.source, 'show', true)
			} else {
				this.$set(this.descriptor.placeholder, 'show', false)
				this.$set(this.descriptor.source, 'show', false)
			}
		},

		_adapterEntity () {
			const entity = { ...this.entity }

			for (const key of Object.keys(entity)) {
				entity[key] = { ...entity[key] }
				if (typeof (entity[key].source) === 'string')
					entity[key].source = entity[key].source.split(/\s*,\s*/)
			}

			return entity
		},

		onSave () {
			const entity = this._adapterEntity(this.entity)
			this.$store.commit('createEntity', {
				name: this.entityName,
				descriptor: entity
			})
			this.entity = {}
			this.entityName = ''
		},

		onCancel () {
			this.entity = {}
			this.entityName = ''
		},

		onSaveField (field) {
			// this.entity[field.name] = field
			this.$set(this.entity, field.name, field)
			this.entity = { ...this.entity }
			if (this.toRemoveField) {
				this.removeField(this.toRemoveField)
				this.toRemoveField = null
			}
			this.$modal.hide('form-field')
		},

		onCancelField () {
			this.$modal.hide('form-field')
		}
	},

	computed: {
		fields () {
			return Object.values(this.entity)
		}
	}
}
</script>

<style lang="scss">
	#create-entity {
		#form-field {
			margin-bottom: 1rem;
		}

		.modal-container {
			margin: 1rem;
		}
	}
</style>
