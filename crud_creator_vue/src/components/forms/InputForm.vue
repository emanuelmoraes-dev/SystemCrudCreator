<template>
	<div class="element-form input-form">
		<div class="field">
			<label class="label">{{ label }}</label>
			<div :class="controlClasses">
				<input :class="inputClasses" :type="type" :placeholder="placeholder" v-model="dvalue">
			</div>
		</div>
	</div>
</template>

<script>
import declareValue from '@/mixins/declare-value.js'

export default {
	name: 'InputForm',

	mixins: [
		declareValue({
			required: true
		})
	],

	props: {
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
