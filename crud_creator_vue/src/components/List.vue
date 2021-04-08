<template>
	<div class="list">
		<table :class="tableClass">
			<thead>
				<slot name="thead">
					<tr>
						<th v-for="[fieldName, field] of fields" :key="fieldName">
							<slot :name="`field-head-${fieldName}`" :fieldName="fieldName" :field="field">
								{{ typeof (field.label) === 'string' ? field.label : fieldName }}
							</slot>
						</th>
						<th>Ações</th>
					</tr>
				</slot>
			</thead>
			<tbody>
				<slot name="tbody">
					<tr v-for="({ entity, id }, index) of this.listEntities" :key="id">
						<td v-for="[fieldName, field] of fields" :key="fieldName">
							<slot :name="`field-content-${fieldName}`" :entity="entity" :fieldName="fieldName" :field="field">
								{{ entity[fieldName] }}
							</slot>
						</td>

						<td>
							<slot :name="`entity-actions`" :entity="entity">
								<div class="actions">
									<div class="buttons">
										<slot name="entity-edit" :entity="entity">
											<button class="button is-warning is-rounded" @click.prevent="edit(entity, index)">
												<span class="icon">
													<i class="mdi mdi-pencil"></i>
												</span>
											</button>
										</slot>

										<slot name="entity-remove" :entity="entity">
											<button class="button is-danger is-rounded" @click.prevent="remove(entity, index)">
												<span class="icon">
													<i class="mdi mdi-delete"></i>
												</span>
											</button>
										</slot>
									</div>
								</div>
							</slot>
						</td>
					</tr>
				</slot>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'List',

	props: {
		entities: {
			type: Array,
			default: () => []
		},
		descriptor: {
			type: Object,
			default: () => ({})
		},
		tableClass: {
			default: 'table'
		}
	},

	methods: {
		edit (entity, index) {
			this.$emit('edit', entity, index)
		},

		remove (entity, index) {
			this.$emit('remove', entity, index)
		}
	},

	computed: {
		fields () {
			return Object.keys(this.descriptor).map(fieldName => [
				fieldName,
				this.descriptor[fieldName]
			])
		},

		listEntities () {
			return this.entities.map((entity, index) => ({
				entity,
				id: index
			}))
		}
	}
}
</script>
