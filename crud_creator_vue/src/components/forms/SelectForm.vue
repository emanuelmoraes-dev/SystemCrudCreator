<template>
	<div class="element-form select-form">
		<div class="field">
			<label class="label">{{ label }}</label>
			<div :class="controlClasses">
				{{ dvalue }}
				<select v-model="dvalue">
					<option v-for="opt of source" :key="opt">
						{{ opt }}
					</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
import declareValue from '@/mixins/declare-value.js'

export default {
	name: 'SelectForm',

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
		selectClasses: {
			default: () => 'select'
		},
		source: {
			type: Array,
			default: () => []
		}
	}
}
</script>
