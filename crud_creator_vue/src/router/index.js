import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateEntity from '../views/CreateEntity.vue'
import CRUD from '../views/CRUD.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/create-entity',
		name: 'CreateEntity',
		component: CreateEntity
	},
	{
		path: '/crud/:entityName',
		name: 'CRUD',
		component: CRUD
	},
	{
		path: '*',
		component: Home
	}
]

export default new VueRouter({ routes })
