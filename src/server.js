const http = require('http')
const app = require('./app')
const { PORT } = require('./config/config')

const server = http.createServer(app)

console.log(`Server is running on port ${PORT}`)