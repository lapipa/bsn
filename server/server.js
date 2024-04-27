const http = require('http')
const {router} = require("./routers/mainRouter")
const host = 'localhost'
const port = 8080

const server = http.createServer((req , res) => {
    router(req , res)
})

server.listen( port , host , () => {
    console.log(`Running on http://${host}:${port}`)
})