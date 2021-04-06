const { app, restful } = require('./app')
const { Connector, www } = require('alpha-restful')

process.env.PORT = 3000
const connector = new Connector('mongodb://mongodb:27017/crud_creator', restful, app)
www(connector, true)
