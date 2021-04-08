<template>
	<div class="element-form select-form">
		<div class="field">
			<label class="label">{{ label }}</label>
			<div :class="controlClasses">
				<select v-model="entity[fieldName]">
					<option v-for="opt of source" :key="opt">
						{{ opt }}
					</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SelectForm',

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
