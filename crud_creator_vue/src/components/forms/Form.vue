<template>
	<div>
		<slot name="before-title"></slot>
		<slot name="title">
			<h1 class="title">{{ title }}</h1>
		</slot>
		<slot name="after-title"></slot>
		<form>
			<slot name="fields">
				<div v-for="[fieldName, field] of fields" :key="fieldName">
					<slot :name="`field-${fieldName}`" :fieldName="fieldName" :field="field">
						<InputForm
							@change="change"
							v-if="field.type === 'input'"
							v-show="!(field.show === false)"
							v-model="entity[fieldName]"
							:label="typeof (field.label) === 'string' ? field.label : fieldName"
							:controlClasses="field.controlClasses || 'control'"
							:inputClasses="field.inputClasses || 'input'"
							:type="field.inputType || 'text'"
							:placeholder="field.placeholder || ''"
						/>

						<SelectForm
							@change="change"
							v-if="field.type === 'select'"
							v-show="!(field.show === false)"
							v-model="entity[fieldName]"
							:label="typeof (field.label) === 'string' ? field.label : fieldName"
							:controlClasses="field.controlClasses || 'control'"
							:selectClasses="field.selectClasses || 'select'"
							:source="field.source || []"
						/>
					</slot>
				</div>
			</slot>

			<slot name="before-actions"></slot>

			<slot name="actions">
				<div class="buttons">
					<slot name="save">
						<button class="button is-success" @click.prevent="save">
							Salvar
						</button>
					</slot>

					<slot name="cancel">
						<button class="button is-danger" @click.prevent="cancel">
							Cancelar
						</button>
					</slot>
				</div>
			</slot>

			<slot name="after-actions"></slot>
		</form>
	</div>
</template>

<script>
import InputForm from '@/components/forms/InputForm.vue'
import SelectForm from '@/components/forms/SelectForm.vue'

export default {
	name: 'Form',

	components: { InputForm, SelectForm },

	props: {
		title: {
			type: String,
			default: ''
		},
		entity: {
			type: Object,
			default: () => ({})
		},
		descriptor: {
			type: Object,
			default: () => ({})
		}
	},

	methods: {
		save () {
			this.$emit('save', this.entity)
		},

		cancel () {
			this.$emit('cancel', this.entity)
		},

		change () {
			this.$emit('change', this.entity)
		}
	},

	computed: {
		fields () {
			return Object.keys(this.descriptor).map(fieldName => [
				fieldName,
				this.descriptor[fieldName]
			])
		}
	}
}
</script>

<style lang="scss">
	.element-form {
		margin-bottom: 1rem;
	}
</style>
