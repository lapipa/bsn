const http = require("http")
const { gamesController } = require('../controllers/gamesController');
/**
 * Handles incoming HTTP requests and routes them to the appropriate controller based on the URL.
 *
 * @param {http.IncomingMessage} req - The incoming HTTP request.
 * @param {http.ServerResponse} res - The outgoing HTTP response.
 */
const apiRouter = (req, res) => {

    let url = new URL(req.url, `http://${req.headers.host}`)
    let params = url.searchParams

    switch (true) {
        case url.pathname.includes('getGamesByDate'):
            const date = params.get('date');
            gamesController.getGamesByDate(res, date);
            break;
        case url.pathname.includes('getAllGames'):
            gamesController.getAllGames(res)
            break;
        case url.pathname.includes('getTodaysGames'):
            gamesController.getGamesByDate(res , new Date())
            break;
        default: //todo add cors 
            res.writeHead(400, contentTypes.plainText)
            res.end("Come on bro! Get real!\n")

    }

}
const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Adjust this to restrict to specific origins if needed
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

const contentTypes = {
    plainText: 'text/plain',
    json: 'text/json',
}

module.exports = { apiRouter }