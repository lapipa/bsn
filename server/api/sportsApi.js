/**
 * Este api esta implementado basado en esta documentacion 
 * https://api-sports.io/documentation/basketball/
 */


// Dynamically import node-fetch
import('node-fetch').then(nodeFetch => {
    fetch = nodeFetch.default || nodeFetch; // Use the default export if available
}).catch(err => {
    console.error("Failed to load node-fetch:", err);
});

//TODO test api on app initialization
const API_KEY = process.env.API_KEY
const LIGA_BSN = 76 // el id de BSN en el api
const BASE_URL = "https://v1.basketball.api-sports.io"

if (!API_KEY) {
    throw "NO API KEY PROVIDED PENDEJO"
}

const getDefaultOptions = () => {

    let options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'v1.basketball.api-sports.io',
            'x-rapidapi-key': API_KEY
        }
    }

    return options
}

/**
 * @param {Date} date 
 */
const getGamesForDate = (date) => {
    let options = getDefaultOptions()
    let params = new URLSearchParams({
        league: LIGA_BSN,
        date: date.toISOString().slice(0, 10),
        season:date.toISOString().slice(0, 4)
    })

    let response = fetch(`${BASE_URL}/games?${params.toString()}`, options)
        .then(res => {
            return res.json()
        })
        .catch(err => {
            //todo what to send back? 500?
            console.error("Fetch error:  " , err)
            throw new Error("Could not fetch")
        })
        .then(json_data => json_data.response)
     
    return response
}

/**
 * @param {Date} fromDate 
 * @param {Date} toDate 
 * If undefined dates , just get all 
 * 
 * Note: Por alguna estupida razon que supongo que es para cobrar mas api calls
 * los cbs no proveen un api call para date range asi que siempre hay que llamar todos los juegos
 * son pocos sou no debe ser horrible el filtering latency
 * 
 * como funciona asi maybe esto se deberia mover al controlador pq tecnicamente no es un api call
 */
const getGamesForDateRange = async (fromDate, toDate) => {
    let options = getDefaultOptions()
    let params = new URLSearchParams({
        league: LIGA_BSN,
        season: fromDate ? date.toISOString().slice(0, 4) : (new Date()).getFullYear()
    })

    let response = fetch(`${BASE_URL}/games?${params.toString()}`, options)
        .then(res => {
            return res.json()
        })
        .catch(err => {
            //todo what to send back? 500?
            console.error("Fetch error:  " , err)
            throw new Error("Could not fetch")
        })
        .then(json_data => {
            let games = json_data.response
            let gamesInRange = games.filter(game => {
                let gameDate = new Date(game.date)
                if(gameDate.getTime() >= fromDate.getTime()  && gameDate.getTime() <= toDate.getTime()){
                    return true
                }
                return false
            })

            return gamesInRange
        })
    
        return response
}

const getAllGames = () => {
    return getGamesForDateRange()
}

module.exports = {
    sportsApi: {
        getGamesForDate,
        getGamesForDateRange,
        getAllGames
    }
}