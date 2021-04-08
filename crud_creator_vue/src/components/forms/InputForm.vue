<template>
	<div class="element-form input-form">
		<div class="field">
			<label class="label">{{ label }}</label>
			<div :class="controlClasses">
				<input :class="inputClasses" :type="type" :placeholder="placeholder" v-model="entity[fieldName]">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputForm',

	props: {
		entity: {
			type: Object,
			required: true
		},
		fieldName: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		controlClasses: {
			default: () => 'control'
		},
		inputClasses: {
			default: () => 'input'
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: ''
		}
	}
}
</script>
