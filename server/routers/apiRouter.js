const http = require("http")
const { sportsApi } = require('../api/sportsApi')
/**
 * Handles incoming HTTP requests and routes them to the appropriate controller based on the URL.
 *
 * @param {http.IncomingMessage} req - The incoming HTTP request.
 * @param {http.ServerResponse} res - The outgoing HTTP response.
 */
const apiRouter = (req, res) => {
    console.log(req.url)
    let url = new URL(req.url , `http://${req.headers.host}`)
    let params = url.searchParams
    if (req.url.includes('getGameByDate')) {
        sportsApi.getGamesForDate(new Date(params.get('date')))
            .then(data => {
                console.log(data)
                res.writeHead(200, {
                    "Content-Type": contentTypes.json,
                    "content-length": Buffer.byteLength(JSON.stringify(data))
                })
                res.end(JSON.stringify(data))
            })
            .catch(err => {
                let response = "Internal Server Error , oops!"
                res.writeHead(500, {
                    "Content-Type": contentTypes.plainText,
                    "content-length": Buffer.byteLength(JSON.stringify(response))
                })
            })
    }
}

const contentTypes = {
    plainText: 'text/plain',
    json: 'text/json',
}
module.exports = { apiRouter }