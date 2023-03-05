const jsonServer = require('json-server')
const jsonServerAuth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ static: './node_modules/json-server-auth' })
const port = process.env.PORT || 3500

server.use(middlewares)
server.use(router)

server.listen(port)
