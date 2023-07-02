const jsonServer = require('json-server')
const server = jsonServer.create()
const router =jsonServer.router("db.json")
const middelware = jsonServer.defaults()

const Port = 8080

server.use(middelware)
server.use(router)
server.listen(Port)