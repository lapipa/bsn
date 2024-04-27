const http = require("http")
const {apiRouter} = require('./apiRouter')
/**
 * Handles incoming HTTP requests and routes them to the appropriate controller based on the URL.
 *
 * @param {http.IncomingMessage} req - The incoming HTTP request.
 * @param {http.ServerResponse} res - The outgoing HTTP response.
 */
const router = (req , res) => {
    const url = req.url

    switch(true){
        case url.startsWith('/api'):
            apiRouter(req,res)
            break;
        case url.startsWith('/sayBye'):
            res.writeHead(200 , contentTypes.plainText)
            res.write("why bye?\n")
            res.end("Bye!\n")
            break;
        default:
            res.writeHead(200 , contentTypes.plainText)
            res.end("Come on bro! Get real!\n")
    }
}

const contentTypes = {
    plainText:{ 'Content-Type': 'text/plain' },
    plainText:{ 'Content-Type': 'text/json' },
}

module.exports = {router}