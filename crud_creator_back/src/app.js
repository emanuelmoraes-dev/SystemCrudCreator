const express = require('express')
const { Restful, Entity } = require('alpha-restful')

const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const restful = new Restful('crud_creator', {
	locale: 'pt'
})

app.get('/', (_, res) => {
	res.status(200).write('wellcome to Alpha Restful')
	res.end()
})

restful.applyRouters(app)

module.exports = { app, restful }
