<template>
	<div id="create-entity">
		<div class="columns">
			<div class="column is-offset-1 is-10">
				<Form
					:descriptor="{
						name: {
							type: 'input',
							label: 'Nome'
						},
						gender: {
							type: 'select',
							label: 'Sexo',
							source: ['Masculino', 'Feminino']
						}
					}"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Form from '@/components/forms/Form.vue'

export default {
	name: 'CreateEntity',
	components: { Form }
}
</script>
