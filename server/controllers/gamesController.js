const { sportsApi } = require('../api/sportsApi');


const corsPolicyJson = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
}

const corsPolicyPlainText = {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
}

/**
 * Fetches games for a given date and formats the response.
 * @param {http.ServerResponse} res - The outgoing HTTP response.
 * @param {string} date - The date for which to fetch games.
 */
const getGamesByDate = async (res, date) => {
    try {
        const games = await sportsApi.getGamesForDate(new Date(date));
        res.writeHead(200, corsPolicyJson);
        res.end(JSON.stringify(games));
    } catch (error) {
        console.error("Error fetching games:", error);
        res.writeHead(500, corsPolicyPlainText);
        res.end("Internal Server Error");
    }
};

const getAllGames = async (res) => {
    try {
        const games = await sportsApi.getAllGames();
        res.writeHead(200, corsPolicyJson);
        res.end(JSON.stringify(games));
    } catch (error) {
        console.error("Error fetching games:", error);
        res.writeHead(500, corsPolicyPlainText);
        res.end("Internal Server Error");
    }
}

module.exports = {
    gamesController: {
        getGamesByDate,
        getAllGames
    }
};