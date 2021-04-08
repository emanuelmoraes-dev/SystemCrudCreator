import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateEntity from '../views/CreateEntity.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/create-entity',
		name: 'CreateEntity',
		component: CreateEntity
	},
	{
		path: '*',
		component: Home
	}
]

export default new VueRouter({ routes })
