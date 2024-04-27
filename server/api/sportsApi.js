/**
 * Este api esta implementado basado en esta documentacion 
 * https://api-sports.io/documentation/basketball/
 */


const http = require('node-fetch')

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
const getGamesForDate = async (date) => {
    let options = getDefaultOptions()
    let params = new URLSearchParams({
        league: LIGA_BSN,
        date: date.toISOString().slice(0, 10)
    })

    fetch(`${BASE_URL}/games?${params.toString()}`, options)
        .then(res => {
            console.log(res.json())
        })
        .catch(err => {
            //todo what to send back? 500?
        })
}

/**
 * @param {Date} fromDate 
 * @param {Date} toDate 
 */
const getGamesForDateRange = async (fromDate, toDate) => {

}

module.exports = {
    sportsAPi: {
        getGamesForDate,
        getGamesForDateRange
    }
}