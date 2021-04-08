import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		entities: {}
	},
	mutations: {
		createEntity (state, { name, descriptor }) {
			state.entities[name] = { descriptor, list: [] }
			state.entities = { ...state.entities }
		},

		addEntity (state, { name, values }) {
			state.entities[name].list.push(values)
			state.entities = { ...state.entities }
		},

		editEntity (state, { name, index, values }) {
			// state.entities[name].list[index] = values
			Vue.set(state.entities[name].list, index, values)
			state.entities[name] = { ...state.entities[name] }
		},

		removeEntity (state, { name, index }) {
			state.entities[name].list.splice(index, 1)
			state.entities = { ...state.entities }
		}
	},
	actions: {
	},
	modules: {
	}
})
